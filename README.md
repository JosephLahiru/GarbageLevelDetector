# GarbageLevelDetector
This is a web platfrom to detect what garbage cans have been filled up
### mongodb competition link : https://dev.to/thealphaguardian/mongodb-atlas-hackathon-2022-on-dev-5aoe

## open a terminal window
### First clone the repository
``` git clone https://github.com/JosephLahiru/GarbageLevelDetector.git ```

### Then change your working directory to the project file
``` cd GarbageLevelDetector ```

### Then lets setup the backend first
``` cd backend ```

in Ubuntu
``` apt install pipenv && pip3 install pipenv ```

### start pipenv shell
``` pipenv shell```

### install dependencies
``` pipenv install -r requirements.txt```

### After that add .env file to the /backend, make sure you add your mongo db connection link
```MONGO_URI="mongodb+srv://username:password@cluster0.gwqfihf.mongodb.net/?retryWrites=true&w=majority"```

### startup the FAST-API backend
``` uvicorn main:app ```

## open another terminal window
### Then lets setup the frontend
``` cd frontend ```

### if you dont have react installed
``` npm i react```

### then startup the frontend
``` npm start ```
