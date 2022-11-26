from model import Bin
import os
from dotenv import load_dotenv

load_dotenv()

#MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv('MONGO_URI'))
database = client.Bins
collection = database.bin

async def fetch_one_bin(id):
    document = await collection.find_one({"id":id})
    return document

async def fetch_all_bins():
    bins = []
    curser = collection.find({})
    async for document in curser:
        bins.append(Bin(**document))
    return bins

async def create_bin(bin):
    document = bin
    result = await collection.insert_one(document)
    return result

async def update_bin(id, level, type):
    await collection.update_one({"id":id}, {"$set":{
        "level":level, "type":type}})
    document = await collection.find_one({"id":id})
    return document

async def remove_bin(id):
    await collection.delete_one({"id": id})
    return True