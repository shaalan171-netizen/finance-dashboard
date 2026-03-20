import React from 'react'

// Badge colors for each category
const badgeStyles = {
  Food:          { background: '#E1F5EE', color: '#0F6E56' },
  Transport:     { background: '#E6F1FB', color: '#185FA5' },
  Entertainment: { background: '#FBEAF0', color: '#993556' },
  Utilities:     { background: '#FAEEDA', color: '#854F0B' },
  Shopping:      { background: '#EEEDFE', color: '#534AB7' },
}

// This component receives the transactions array from Dashboard via props
function TransactionList({ transactions }) {
  return (
    <div style={{ background: '#fff', border: '0.5px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem' }}>
      
      <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
        Recent transactions
      </div>

      {/* Map over transactions — like a for loop that returns UI for each item */}
      {transactions.map(t => (
        <div key={t.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 0',
          borderBottom: '0.5px solid #f0f0f0',
        }}>
          
          {/* Left side — name and category badge */}
          <div>
            <div style={{ fontSize: '14px', color: '#111' }}>
              {t.name} {t.flagged ? '⚠️' : ''}
            </div>
            <div style={{ marginTop: '3px' }}>
              <span style={{
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '6px',
                // Spread operator pulls in the right colors for this category
                // Like dereferencing a struct in C
                ...badgeStyles[t.category]
              }}>
                {t.category}
              </span>
            </div>
          </div>

          {/* Right side — amount, red if flagged */}
          <div style={{
            fontWeight: 500,
            fontSize: '14px',
            color: t.flagged ? '#D85A30' : '#111'
          }}>
            -${t.amount.toFixed(2)}
          </div>

        </div>
      ))}

    </div>
  )
}

export default TransactionList