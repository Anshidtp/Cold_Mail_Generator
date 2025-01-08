# import streamlit as st
# from langchain_community.document_loaders import WebBaseLoader

# from app.model import Chain
# from app.database import Portfolio
# from app.utils import clean_text


# def create_streamlit_app(llm, portfolio, clean_text):
#     st.title("📧 Cold Mail Generator")
#     url_input = st.text_input("Enter a URL:", value="https://jobs.nike.com/job/R-33460")
#     submit_button = st.button("Submit")

#     if submit_button:
#         try:
#             loader = WebBaseLoader([url_input])
#             data = clean_text(loader.load().pop().page_content)
#             portfolio.load_portfolio()
#             jobs = llm.extract_jobs(data) 
#             for job in jobs:
#                 skills = job.get('skills', [])
#                 links = portfolio.query_links(skills)
#                 email = llm.write_mail(job, links)
#                 st.code(email, language='markdown')
#         except Exception as e:
#             st.error(f"An Error Occurred: {e}")


# if __name__ == "__main__":
#     chain = Chain()
#     portfolio = Portfolio()
#     st.set_page_config(layout="wide", page_title="Cold Email Generator", page_icon="📧")
#     create_streamlit_app(chain, portfolio, clean_text)


from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from app.model import Chain
from app.database import Portfolio
from app.utils import clean_text
from langchain_community.document_loaders import WebBaseLoader

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class URLRequest(BaseModel):
    url: str

@app.post("/generate-email")
async def generate_email(request: URLRequest):
    try:
        chain = Chain()
        portfolio = Portfolio()
        
        loader = WebBaseLoader([request.url])
        data = clean_text(loader.load().pop().page_content)
        
        portfolio.load_portfolio()
        jobs = chain.extract_jobs(data)
        
        emails = []
        for job in jobs:
            skills = job.get('skills', [])
            links = portfolio.query_links(skills)
            email = chain.write_mail(job, links)
            emails.append(email)
        
        return {"emails": emails}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# @app.get("/")
# async def serve_frontend():
#     return FileResponse('frontend/index.html')

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)