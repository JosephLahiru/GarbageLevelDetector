from pydantic import BaseModel

class Level(BaseModel):
    title: str
    level: str