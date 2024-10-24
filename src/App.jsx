import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import BlockShareLanding from './components/BlockShareLanding'
import Verifier from './components/entities/Verifier'
import Student from './components/entities/Student'
import Issuer from './components/entities/Issuer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes> 
        <Route path="/" element={<BlockShareLanding />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/student" element={<Student />} />
        <Route path="/issuer" element={<Issuer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
