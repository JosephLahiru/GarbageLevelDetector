from pydantic import BaseModel

class Bin(BaseModel):
    id: str
    level: str
    type: str