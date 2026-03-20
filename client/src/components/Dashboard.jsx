import React, { useState } from 'react'
import SpendingChart from './SpendingChart'
import TransactionList from './TransactionList'
import AIChat from './AIChat'

// This is our main dashboard component
// Think of components like functions that return UI
function Dashboard() {

  // useState is like a variable that re-renders the UI when it changes
  // [value, setterFunction] = useState(initialValue)
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Whole Foods', amount: 84.20, category: 'Food' },
    { id: 2, name: 'Uber', amount: 22.50, category: 'Transport' },
    { id: 3, name: 'Netflix', amount: 15.99, category: 'Entertainment' },
    { id: 4, name: 'Amazon', amount: 312.00, category: 'Shopping', flagged: true },
    { id: 5, name: 'Pepco', amount: 98.00, category: 'Utilities' },
  ])

  // Calculate total by reducing the array — same as a for loop summing values
  const total = transactions.reduce((sum, t) => sum + t.amount, 0)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      
      <h1 style={{ marginBottom: '1.5rem' }}>Finance Dashboard</h1>

      {/* Metric cards at the top */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '1.5rem' }}>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '13px', color: '#666' }}>Monthly spending</div>
          <div style={{ fontSize: '24px', fontWeight: 500 }}>${total.toFixed(2)}</div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '13px', color: '#666' }}>Largest category</div>
          <div style={{ fontSize: '24px', fontWeight: 500 }}>Food</div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '13px', color: '#666' }}>Flagged anomalies</div>
          <div style={{ fontSize: '24px', fontWeight: 500, color: '#D85A30' }}>
            {transactions.filter(t => t.flagged).length}
          </div>
        </div>
      </div>

      {/* Chart and transactions side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '1.5rem' }}>
        <SpendingChart transactions={transactions} />
        <TransactionList transactions={transactions} />
      </div>

      {/* AI Chat takes full width at the bottom */}
      <AIChat transactions={transactions} />

    </div>
  )
}

// We export it so other files can import and use this component
export default Dashboard