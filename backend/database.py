from model import Level
import os

#MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv('MONGO_URI'))
database = client.data
collection = database.changestream

async def fetch_one_level(id):
    document = await collection.find_one({"id":id})
    return document

async def fetch_all_levels():
    levels = []
    curser = collection.find({})
    async for document in curser:
        levels.append(Level(**id))
    return levels

async def create_level(level):
    document = level
    result = await collection.insert_one(document)
    return document

async def update_level(id, level):
    await collection.update_one({"id":id}, {"$set":{
        "level":level}})
    document = await collection.find_one({"id":id})
    return document