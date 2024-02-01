import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginCredential/Login'
import Signup from './pages/loginCredential/Signup'
import FindId from './pages/loginCredential/FindId'
import FindPw from './pages/loginCredential/FindPw'

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
          <Route
            path="/findid"
            element={<FindId />}
          />
          <Route
            path="/findpw"
            element={<FindPw />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
