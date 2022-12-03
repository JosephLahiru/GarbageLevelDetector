import RPi.GPIO as GPIO
import time
from pymongo import MongoClient
import os
from dotenv import load_dotenv

BIN_ID = "001"

load_dotenv()

cluster = MongoClient(os.getenv('MONGO_URI'))

db = cluster["Bins"]
collection = db["bin"]

GPIO.setmode(GPIO.BCM)

GPIO_TRIGGER = 18
GPIO_ECHO = 24

GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
 
def distance():
    GPIO.output(GPIO_TRIGGER, True)
 
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER, False)
 
    StartTime = time.time()
    StopTime = time.time()
 
    while(GPIO.input(GPIO_ECHO) == 0):
        StartTime = time.time()

    while(GPIO.input(GPIO_ECHO) == 1):
        StopTime = time.time()
 
    TimeElapsed = StopTime - StartTime
    distance = ((TimeElapsed * 34300) / 2)
 
    return distance
 
if(__name__ == '__main__'):
    try:
        while True:
            dist = distance()

            print ("Measured Distance = %.1f cm" % dist)
            #height of a garbage bin is 100cm

            #if dist = 100 -> bin is empty
            #if dist < 10 -> bin is full

            collection.find_one_and_update({"id":f"{BIN_ID}"}, {"$set" : {"level" : f"{dist}"}}, upsert = False )

            time.sleep(14400)
            #update every 4 hours
 
    except KeyboardInterrupt:
        print("Measurement stopped by User")
        GPIO.cleanup()