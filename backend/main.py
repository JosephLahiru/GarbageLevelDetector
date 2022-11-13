from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Bin

#App object
app = FastAPI()

from database import (
    fetch_one_bin,
    fetch_all_bins,
    create_bin,
    update_bin,
    remove_bin,
)

origins = ['http://localhost:3000',
            'http://localhost',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.get("/api/bin")
async def get_bin():
    reponse = await fetch_all_bins()
    return reponse

@app.get("/api/bin{id}", response_model=Bin)
async def get_bin_by_id(id):
    response = fetch_one_bin(id)
    if(response):
        return response
    raise HTTPException(404, f"There is no Bin item in this ID : {id}")


@app.post("/api/bin", response_model=Bin)
async def post_bin(bin:Bin):
    response = await create_bin(bin.dict())
    if(response):
        return response
    raise HTTPException(400, "Bad Request")

@app.put("/api/bin{id}/", response_model=Bin)
async def put_bin(id:str, level:str):
    response = await update_bin(id, level)
    if(response):
        return response
    raise HTTPException(404, f"There is no Bin item in this ID : {id}")

@app.delete("/api/bin/{id}")
async def delete_bin(id):
    response = await remove_bin(id)
    if response:
        return "Successfully deleted bin"
    raise HTTPException(404, f"There is no bin with the ID {id}")