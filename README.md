# Stock Oracle - AI-Powered Stock Prediction Tool

**🚀 Overview**
Stock Oracle is a modern, user-friendly web application that provides AI-generated stock market predictions and analysis. Built using React and powered by Groq's LLM and Polygon.io's financial data API, this tool helps users make more informed investment decisions by analyzing stock performance and generating personalized recommendations.

**✨ Features**
Real-time Stock Analysis: Get analysis of stock performance over the past 3 days
Multiple Stock Comparison: Add up to 3 different stock tickers for comprehensive analysis
AI-Powered Recommendations: Receive buy, sell, or hold recommendations based on current market data
Clean, Intuitive UI: User-friendly interface with responsive design for all devices
Instant Report Generation: Get analysis reports in seconds

**🛠️ Technologies Used**
Frontend
React 19 - Latest React framework for optimal performance
CSS3 - Custom styling with modern CSS features including gradients, animations, and flexbox
Vite - Modern build tool for faster development and optimized production builds

AI & Data Integration
Groq API - Integration with Groq's LLM (llama-3.1-8b-instant) for generating insightful market analysis
Polygon.io - Real-time and historical financial data API

**📋 Getting Started**
Prerequisites
Node.js (v16+)
API keys for Groq and Polygon.io

**Installation**
Clone the repository
`git clone https://github.com/yourusername/stock-oracle.git`

Navigate to the project directory
`cd stock-oracle`

Install dependencies
`npm install`

Create .env file with your API keys
`echo "VITE_POLYGON_API_KEY=your_polygon_api_key" > .env`
`echo "VITE_GROQ_API_KEY=your_groq_api_key" >> .env`
`echo "VITE_GROQ_API_BASE=your_groq_api_base_url" >> .env`

Start the development server
`npm run dev`

**🧠 How It Works**
User adds stock tickers - Up to 3 different stocks can be analyzed simultaneously
Application fetches data - Recent stock performance data is retrieved from Polygon.io
AI analyzes patterns - Groq's LLM processes the data and identifies relevant patterns
Report generation - A concise, easy-to-understand report is generated with recommendations

**🌟 Key Features Implemented**
Error Handling & Validation - Robust error handling for API requests and user inputs
Responsive Design - Fully responsive layout that works on all device sizes
Optimized Performance - Fast loading times and efficient API usage
User-Friendly Interface - Clean, intuitive UI with helpful feedback messages

**🚀 Future Enhancements**
`<input disabled="" type="checkbox"> Historical trend analysis with longer time periods`
`<input disabled="" type="checkbox"> Portfolio tracking and management`
`<input disabled="" type="checkbox"> Email notifications for significant stock movements`
`<input disabled="" type="checkbox"> Enhanced visualization with interactive charts`
`<input disabled="" type="checkbox"> User accounts to save favorite stocks`

**👨‍💻 Developer**
> Created by Wan Afiq as a demonstration of frontend development skills and AI integration capabilities.

**⚠️ Disclaimer**
> This project is intended for educational purposes and not for actual financial advice. All investment decisions should be made with proper research and consultation with financial professionals.

**📜 License**
> This project is licensed under the MIT License - see the LICENSE file for details.
