import React from 'react'

// We're drawing the bars manually with plain CSS/HTML
// Later you can swap this out for the Recharts library for fancier charts
// Props are like function parameters — parent passes data down to child components
function SpendingChart({ transactions }) {

  // Group transactions by category and sum amounts
  // .reduce() here builds an object like { Food: 84.20, Transport: 22.50, ... }
  const categories = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount
    return acc
  }, {})

  // Find the biggest value so we can scale all bars relative to it
  const max = Math.max(...Object.values(categories))

  // Colors for each category
  const colors = {
    Food: '#1D9E75',
    Transport: '#185FA5',
    Shopping: '#D85A30',
    Utilities: '#BA7517',
    Entertainment: '#993556',
  }

  return (
    <div style={{ background: '#fff', border: '0.5px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem' }}>
      
      <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
        Spending by category
      </div>

      {/* Loop over each category and draw a bar */}
      {/* Object.entries turns { Food: 84.20 } into [['Food', 84.20], ...] */}
      {Object.entries(categories).map(([category, amount]) => (
        <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          
          {/* Category label */}
          <div style={{ width: '100px', fontSize: '13px', color: '#666', textAlign: 'right' }}>
            {category}
          </div>

          {/* Bar track — the gray background */}
          <div style={{ flex: 1, height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            
            {/* Bar fill — width is a percentage of the max value */}
            <div style={{
              height: '100%',
              width: `${(amount / max) * 100}%`,
              background: colors[category] || '#888',
              borderRadius: '4px',
              // CSS transition — smoothly animates width changes, like in C when you interpolate values
              transition: 'width 0.4s ease'
            }} />
          </div>

          {/* Amount label */}
          <div style={{ width: '55px', fontSize: '13px', fontWeight: 500, textAlign: 'right' }}>
            ${amount.toFixed(2)}
          </div>

        </div>
      ))}

    </div>
  )
}

export default SpendingChart