from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

cluster = MongoClient(os.getenv('MONGO_URI'))

db = cluster["Bins"]
collection = db["bin"]

#collection.insert_one({"id":"069", "level":"", "type":"Recycling Paper and Cardboard"})

collection.find_one_and_update({"id":"001"}, {"$set" : {"level" : "6"}}, upsert = False )