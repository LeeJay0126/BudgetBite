import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginCredential/Login'
import Signup from './pages/loginCredential/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
