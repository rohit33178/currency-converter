import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-slate-700 p-4'>
      <h2 className='text-4xl text-white p-3'>Currency Convertor</h2>
    </div>
  )
}

export default App
