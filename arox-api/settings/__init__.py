from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    TEST: str = "Hello Test!!"

    class Config:
        env_file = ".env.development"
        env_file_encoding = "utf-8"
