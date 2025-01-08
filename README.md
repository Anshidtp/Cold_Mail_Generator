# Cold_Mail_Generator
AI Powered Cold Mail Generator using Meta Llama 3.1
![Demo](sample\sample_video.gif)

## Overview

A powerful, AI-driven **Cold Email Generator** that creates personalized job application emails based on job descriptions. The system uses LLaMA 3.1 through Groq Cloud for generation, FastAPI for the backend, ChromaDB for vector Database storage, and React for the frontend.

### Features

    - 🤖 AI-Powered Email Generation: Uses LLama 3.1 model through Groq Cloud for high-quality,      contextual email generation
    - 🔍 Intelligent Job Analysis: Extracts key requirements and skills from job postings
    - 🌐 URL Scraping: Automatically extracts job descriptions from provided URLs
    - 💾 Vector Database: Uses ChromaDB for efficient storage and retrieval of relevant examples
    - ⚡ Fast Performance: Leverages Groq Cloud's fast inference capabilities
    - 🎨 Modern UI: Responsive React-based frontend with dark/light mode
    - 🔄 Real-time Processing: Immediate email generation with loading states

## Tech Stack

  ### Backend

    - FastAPI: High-performance Python web framework
    - LangChain: Framework for LLM application development
    - Groq Cloud: Cloud platform for LLaMA 3.1 model hosting
    - ChromaDB: Vector database for semantic search
    - WebBaseLoader: URL content extraction
    - Pydantic: Data validation

  ### Frontend

    - React: UI framework
    - Tailwind CSS: Utility-first CSS framework


### Prerequisites

    * Python 3.8+
    * Node.js 14+
    * Groq API key
    * ChromaDB

### Backend Setup

1. Clone repository

    ```bash
    git clone https://github.com/yourusername/cold-email-generator.git
    cd cold-email-generator
    ```

2. Create and activate virtual environment

    ```bash
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate

    ```

3. Install dependencies

    ```bash
    pip install -r requirements.txt

    ```
4. Create a .env file in the backend directory
    ```bash
    GROQ_API_KEY=your_groq_api_key
    ```
5. Run the backend server
    ```bash 
    uvicorn main:app --reload
    ```

### Frontend Setup

1. Install dependencies
    ```bash
    cd frontend
    npm install
    ```

2. Start development server
    ```bash
    npm start
    ```

### API Documentation

Request body:
 ![RequestBody](sample\request.png)


Response:
 ![ResponseBody](sample\response.png)

#### Troubleshooting 🔧

##### Common Issues

 1. ChromaDB Connection Error

    - Ensure ChromaDB is properly initialized
    - Check path configuration

 2. Groq API Issues

    - Verify API key
    - Check API quota

 3. CORS Errors

    - Check CORS configuration in FastAPI

### Contact
    Anshid TP - connect.anshid@gmail.com

### Acknowledgments

    - Groq Cloud for AI processing
    - LangChain community
    - ChromaDB team
