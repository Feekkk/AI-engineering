import { useState, useEffect } from "react";
import "./App.css";
import Groq from "groq-sdk";
import { dates } from "./services/dates";

function App() {
  const [tickers, setTickers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState("");
  const [apiMessage, setApiMessage] = useState("Querying Stocks API...");

  const handleAddTicker = (e) => {
    e.preventDefault();
    if (
      inputValue.trim() &&
      inputValue.trim().length > 2 &&
      tickers.length < 3 &&
      !tickers.includes(inputValue.trim().toUpperCase())
    ) {
      setTickers([...tickers, inputValue.trim().toUpperCase()]);
      setInputValue("");
    } else if (inputValue.trim().length <= 2) {
      // Add validation message
      const label = document.querySelector("label[for='ticker-input']");
      if (label) {
        label.style.color = "red";
        label.textContent =
          "You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.";
      }
    }
  };

  const handleGenerateReport = async () => {
    if (tickers.length === 0) return;

    setIsLoading(true);
    setReport("");

    try {
      setApiMessage("Querying Stocks API...");

      // Fetch stock data for each ticker
      const stockData = await Promise.all(
        tickers.map(async (ticker) => {
          const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${
            dates.startDate
          }/${dates.endDate}?apiKey=${import.meta.env.VITE_POLYGON_API_KEY}`;
          const response = await fetch(url);
          const data = await response.text();
          const status = response.status;

          if (status === 200) {
            setApiMessage("Creating report...");
            return data;
          } else {
            throw new Error(`Error fetching data for ${ticker}`);
          }
        })
      );

      // Generate report using Groq
      const reportText = await fetchReport(stockData.join(""));
      setReport(reportText);
    } catch (error) {
      console.error("Error generating report:", error);
      setReport("There was an error fetching stock data.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReport = async (data) => {
    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        apiUrl: import.meta.env.VITE_GROQ_API_BASE,
        dangerouslyAllowBrowser: true,
      });

      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell.",
          },
          {
            role: "user",
            content: `Analyze this stock data and provide investment advice: ${data}
          
          Please include the following in your analysis:
          1. A summary of the price trends
          2. Key observations about volatility and volume
          3. A clear recommendation (buy, sell, or hold)
          4. Brief explanation for your recommendation
          
          Keep your response under 300 words and use simple language that a non-expert can understand.`,
          },
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        max_tokens: 250,
      });

      return response.choices[0]?.message?.content || "No report generated.";
    } catch (error) {
      console.error("Error fetching report:", error);
      throw new Error("There was an error generating the report.");
    }
  };

  // Reset label color when input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const label = document.querySelector("label[for='ticker-input']");
    if (label && label.style.color === "red") {
      label.style.color = "";
      label.textContent =
        "Add up to 3 stock tickers below to get a super accurate stock predictions report";
    }
  };

  return (
    <>
      <main>
        <header>
          <h1>Stock Prediction Report Generator</h1>
          <p>Get a super accurate stock predictions report in seconds!</p>
          <p>Powered by Groq and Polygon.io</p>
        </header>
        <section className="action-panel">
          <form id="ticker-input-form" onSubmit={handleAddTicker}>
            <label htmlFor="ticker-input">
              Add up to 3 stock tickers below to get a super accurate stock
              predictions report
            </label>
            <div className="form-input-control">
              <input
                type="text"
                id="ticker-input"
                placeholder="MSFT"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="add-ticker-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="ticker-choice-display">
            {tickers.length > 0
              ? tickers.join(", ")
              : "Your tickers will appear here..."}
          </p>
          <button
            className="generate-report-btn"
            type="button"
            disabled={tickers.length === 0}
            onClick={handleGenerateReport}
          >
            Generate Report
          </button>
          <p className="tag-line">The result is at your own risk</p>
        </section>

        {isLoading && (
          <section className="loading-panel">
            <div id="api-message">{apiMessage}</div>
          </section>
        )}

        {report && (
          <section className="output-panel">
            <h2>Your Report </h2>
            <div className="report-content">{report}</div>
          </section>
        )}
      </main>
      <footer>&copy; This is not real financial advice!</footer>
    </>
  );
}

export default App;
