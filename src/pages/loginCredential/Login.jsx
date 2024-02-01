import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import './loginCred.css'
import Signup from './Signup'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [errorMessage, setError] = useState('')
  const [values, setValue] = useState({
    username: '',
    password: ''
  })
  //local server port
  const url = 'http://localhost3500/users/login'
  const navigate = useNavigate()

  async function fetchLoginData() {
    const username = values.username
    const pw = values.password

    await axios
      .post(url, {
        username: username
      })
      .then(res => {
        if (res.data.message != 'User does not exist') {
          if (res.data.message == pw) {
            loginHandler()
            // navigate('/')
            setError(res.data.message)
          } else {
            setError('Wrong Password!')
          }
        } else {
          setError(res.data)
        }
      })
      .catch(err => {
        setError(err.response.data)
      })
  }

  const formSubmitHandler = e => {
    e.preventDefault()
    setError('')
    if (values.username != '' && values.password != '') {
      fetchLoginData()
    } else {
      setError('Please check if the username or password field is left empty')
    }
  }
  return (
    <div>
      <Header />
      <form
        className="loginCredForm"
        onSubmit={formSubmitHandler}>
        <h2>LOG IN</h2>
        <section className="inputSection">
          <div className="inputContainer">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Type your username"
              onChange={e => setValue({ ...values, username: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label>Password:</label>
            <input
              type="text"
              name="password"
              placeholder="Type your password"
              onChange={e => setValue({ ...values, password: e.target.value })}
            />
          </div>
          <button>SUBMIT</button>
          <div className="options">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="findpwidContainer">
            <Link to="/findid">Find ID</Link>
            <Link to="/findid">Find PW</Link>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Login
