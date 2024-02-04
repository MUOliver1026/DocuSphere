import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({ message: '', type: '' })
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = await loginUser(email, password)
      setAlert({ message: 'Login successful! Redirecting...', type: 'success' })
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000) // Hide the alert after 3 seconds
      setTimeout(() => { navigate('/') }, 2000) // Navigate to the home page or dashboard upon successful login
    } catch (error: any) {
      setAlert({ message: error.message, type: 'error' })
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000) // Hide the alert after 3 seconds
    }
  }

  return (
        <div className="container mx-auto px-4">
            {alert.message && (
            <div className={`${showAlert ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 fixed bottom-5 right-5 fixed bottom-5 right-5 md:bottom-10 md:right-10 p-4 rounded shadow-lg ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                {alert.message}
            </div>
            )}
            <h2 className="text-lg font-semibold">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required className="input" />
                </div>
                <div>
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required className="input" />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
            </div>
  )
}

export default Login
