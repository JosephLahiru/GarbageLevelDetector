from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Level

#App object
app = FastAPI()

from database import (
    fetch_one_level,
    fetch_all_levels,
    create_level,
    update_level
)

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.get("/api/level")
async def get_level():
    reponse = await fetch_all_levels()
    return reponse

@app.get("/api/level{id}", response_model=Level)
async def get_level_by_id(id):
    response = fetch_one_level(id)
    if(response):
        return response
    raise HTTPException(404, f"There is no Level item in this ID : {id}")


@app.post("/api/level",response_model=Level)
async def post_level(level:Level):
    response = await create_level(level.dict())
    if(response):
        return response
    raise HTTPException(400, "Bad Request")

@app.put("/api/level{id}/", response_model=Level)
async def put_level(id:str, level:str):
    response = await update_level(id, level)
    if(response):
        return response
    raise HTTPException(404, f"There is no Level item in this ID : {id}")