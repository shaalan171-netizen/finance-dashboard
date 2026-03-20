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
<img width="2027" height="1465" alt="image" src="https://github.com/user-attachments/assets/b0ee0eb9-6c05-4e8b-bbc7-58302fce7e32" />

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org) (LTS version)
- [Python 3](https://python.org) (for backend, coming soon)
- [Git](https://git-scm.com)

### Running the Frontend

1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/finance-dashboard.git
cd finance-dashboard
```

2. Install dependencies
```bash
cd client
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and go to `http://localhost:3000`

### Running in the Browser (no installs)
You can also run this project without installing anything locally:

1. Go to [codesandbox.io](https://codesandbox.io)
2. Sign in with your GitHub account
3. Click **Import from GitHub**
4. Paste your repo URL
5. Open a terminal in CodeSandbox and run:
```bash
cd client && npm install && npm start
```
6. Click **Y** when prompted about the default browser targets
7. A preview window will open on the right side

## Features
- Spending breakdown by category with visual bar chart
- Recent transaction list with anomaly flagging
- AI chat assistant for spending insights
- Responsive layout

## Roadmap
- [ ] CSV/PDF bank statement upload
- [ ] Python/FastAPI backend
- [ ] Real OpenAI API integration
- [ ] PostgreSQL database
- [ ] User authentication
- [ ] Deploy to Vercel + Render

## Contributing
Pull requests are welcome! For major changes please open an issue first.

## License
MIT
