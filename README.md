# Mobile App testing
A Simple Random Number Generator
- Simple UI that shows the number generator
- History system that tracks the previous numbers
- Maybe add dice rolls later


Frontend:
- React Native
- API's

Backend:
- FastAPI
- SQLite

Using Expo with this project for convenience of developing in both IOS and android.
Installing Expo CLI: A command-line tool that helps create and manage Expo projects:
- npm install -g expo-cli
Initializing the frontend...:
- To set up the project using Expo:
- - npx create-expo-app random-number-app   # random-number-app being the desination folder
- To start the dev server:
- - npm start

Setting up the backend:
- Set up a backend folder
- - mkdir random-number-backend
- - cd random-number-backend
- Set up a venv in the backend
- - python -m venv venv
- - source venv\Scripts\activate
- Make sure FastAPI and Uvicorn are installed
- - pip install fastapi uvicorn