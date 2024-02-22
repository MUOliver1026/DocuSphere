import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import DocumentDashboard from './components/DocumentDashboard'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DocumentDashboard />} />
      </Routes>
    </div>
  )
}

export default App
