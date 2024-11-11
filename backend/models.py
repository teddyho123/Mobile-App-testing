from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./history.db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    result = Column(String)
    type = Column(String)

Base.metadata.create_all(bind=engine)
