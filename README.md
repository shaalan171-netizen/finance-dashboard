# Finance Dashboard

AI-powered personal finance dashboard — upload bank statements, 
get spending insights and anomaly detection. React + FastAPI + OpenAI.

## Tech Stack
- Frontend: React, Recharts
- Backend: Python, FastAPI
- AI: OpenAI API
- Database: PostgreSQL

## Project Structure
```
finance-dashboard/
├── client/               ← React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   ├── SpendingChart.jsx
│   │   │   └── AIChat.jsx
│   │   └── App.jsx
├── server/               ← Python/FastAPI backend
│   ├── main.py
│   ├── parser.py
│   ├── ai.py
│   └── models.py
└── .env.example
```

## Getting Started
```bash
# Frontend
cd client && npm install && npm start

# Backend
cd server && pip install -r requirements.txt && uvicorn main:app
```

## Demo
(screenshot/GIF coming soon)