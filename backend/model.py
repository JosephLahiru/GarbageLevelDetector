from pydantic import BaseModel

class Level(BaseModel):
    id: str
    level: str