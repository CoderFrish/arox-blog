import os
from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv(".env.development")
app = FastAPI()

@app.get("/hello")
def hello() -> str:
    return os.environ["TEST"]
