# GarbageLevelDetector
This is a web platfrom to detect what garbage cans have been filled up

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

### startup the FAST-API backend
``` uvicorn main:app ```

## open another terminal window
### Then lets setup the frontend
``` cd frontend ```

### if you dont have react installed
``` npm i react```

### then startup the frontend
``` npm start ```
