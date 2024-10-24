import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import BlockShareLanding from './components/BlockShareLanding'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes> 
        <Route path="/" element={<BlockShareLanding />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
