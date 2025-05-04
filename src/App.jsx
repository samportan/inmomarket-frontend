// src/App.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Layout from './components/Layout'
import Inbox from './pages/Inbox'

export default function App() {
  return (
      <Routes>
        {/* Public Routes - no sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes - wrapped with sidebar layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          {/* Add more protected pages here */}
        </Route>
      </Routes>
  )
}
