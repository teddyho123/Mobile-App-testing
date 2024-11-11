from fastapi import FastAPI
from sqlalchemy.orm import Session
from models import History, SessionLocal
from fastapi import Depends
from sqlalchemy.orm import Session
import random

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/random-number")
async def random_number(min_val: int = 1, max_val: int = 100):
    random_num = random.randint(min_val, max_val)
    return {"random_number": random_num}

@app.get("/roll-dice")
async def roll_dice():
    dice_roll = random.randint(1, 6)
    return {"dice_roll": dice_roll}

@app.post("/history")
async def save_result(result: str, type: str, db: Session = Depends(get_db)):
    history_item = History(result=result, type=type)
    db.add(history_item)
    db.commit()
    db.refresh(history_item)
    return history_item

@app.get("/history")
async def get_history(db: Session = Depends(get_db)):
    return db.query(History).all()
