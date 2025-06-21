from settings import Settings
from fastapi import FastAPI

settings = Settings()
app = FastAPI()

@app.get("/hello")
def hello() -> str:
    return settings.TEST
