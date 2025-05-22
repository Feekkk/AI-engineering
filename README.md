# 🧙♂️ Stock Oracle - AI-Powered Stock Prediction Tool

**Your crystal ball for stock market insights** 🔮 - A modern web application combining AI smarts with real-time financial data to empower your investment decisions.

## 🌟 Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| 📈 Real-time Analysis  | 3-day stock performance breakdown with key metrics                         |
| 🔄 Multi-Stock Compare | Side-by-side comparison of up to 3 tickers                                  |
| 🤖 AI Recommendations  | Intelligent buy/sell/hold suggestions from Groq's LLM                       |
| 🎨 Beautiful UI        | Gradient-powered, responsive interface with smooth animations              |
| ⚡ Instant Reports      | Generate comprehensive PDF reports in under 5 seconds                      |

## 🛠 Tech Stack

**Frontend Magic**
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) 19 (Latest)
- 🎀 Modern CSS (Grid, Flexbox, Animations)
- ⚡ Vite (Blazing Fast Builds)

**AI & Data Backbone**
- 🤖 Groq API (Llama-3.1-8b-instant)
- 📊 Polygon.io (Real-time Market Data)
- 🔐 Secure Env Management

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16.x
- API Keys for [Groq](https://console.groq.com/) & [Polygon](https://polygon.io/)

### Installation Guide

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/stock-oracle.git

# 2. Navigate to project
cd stock-oracle

# 3. Install dependencies
npm install

# 4. Configure environment
echo "VITE_POLYGON_API_KEY=your_key" > .env
echo "VITE_GROQ_API_KEY=your_key" >> .env
echo "VITE_GROQ_API_BASE=your_url" >> .env

# 5. Launch the app
npm run dev
```

🧠 How It Works
User Input 📥
Add up to 3 stock tickers via intuitive search

Data Fetch 🌐
Real-time data pulled from Polygon.io API

AI Analysis 🧪
Groq's LLM processes trends and patterns

Report Generation 📄
Clean PDF report with actionable insights

👨💻 Developer Spotlight
> "Building Stock Oracle taught me the power of combining modern web tech with AI capabilities. Every line of code is a step toward democratizing financial insights."
> – Wan Afiq
