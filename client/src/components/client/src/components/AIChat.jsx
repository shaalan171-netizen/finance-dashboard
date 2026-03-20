import React, { useState } from 'react'

// This is where the AI magic happens
// For now we're using hardcoded responses — later we'll swap in a real OpenAI API call
function AIChat({ transactions }) {

  // Two pieces of state — the chat history and the current input value
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hey! I've analyzed your transactions. Your food spending is up 18% — want tips to bring it down?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // This runs when the user hits Send
  async function sendMessage() {
    if (!input.trim()) return

    // Add the user's message to the chat history
    // Spread operator (...) copies the existing array and adds the new message
    const userMessage = { role: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI thinking — setTimeout is like a non-blocking delay
    // Later this becomes a real fetch() call to your Python backend
    setTimeout(() => {
      const aiReplies = [
        "Your biggest spike this month was the $312 Amazon charge — flagged as unusual. Want me to set a monthly shopping cap?",
        "You're on track to overspend by ~$200 this month. Cutting one food delivery per week would help.",
        "Your transport costs are above average. Have you considered a monthly transit pass?",
        "I noticed a subscription you haven't used in 30 days. Want me to list recurring charges?",
      ]
      // Pick a random reply for now
      const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)]
      setMessages(prev => [...prev, { role: 'ai', text: reply }])
      setLoading(false)
    }, 1200)
  }

  return (
    <div style={{ background: '#fff', border: '0.5px solid #e0e0e0', borderRadius: '12px', padding: '1.25rem' }}>
      
      <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
        Ask AI about your finances
      </div>

      {/* Chat history */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px', maxHeight: '200px', overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            background: m.role === 'user' ? '#185FA5' : '#f5f5f5',
            color: m.role === 'user' ? '#fff' : '#111',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            maxWidth: '80%',
            lineHeight: 1.5,
          }}>
            {m.text}
          </div>
        ))}

        {/* Loading indicator while AI is "thinking" */}
        {loading && (
          <div style={{ alignSelf: 'flex-start', background: '#f5f5f5', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', color: '#666' }}>
            Analyzing...
          </div>
        )}
      </div>

      {/* Input row */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={input}
          // onChange fires every keystroke — updates input state with current value
          onChange={e => setInput(e.target.value)}
          // Let user hit Enter instead of clicking Send
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="e.g. Why did I overspend this month?"
          style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '0.5px solid #e0e0e0', fontSize: '14px' }}
        />
        <button
          onClick={sendMessage}
          style={{ padding: '8px 16px', borderRadius: '8px', border: '0.5px solid #e0e0e0', background: '#fff', fontSize: '13px', cursor: 'pointer' }}
        >
          Send ↗
        </button>
      </div>

    </div>
  )
}

export default AIChat