from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#App object
app = FastAPI()

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
    return 1

@app.get("/api/level{id}")
async def get_level_by_id(id):
    return 1

@app.post("/api/level")
async def post_level(level):
    return 1