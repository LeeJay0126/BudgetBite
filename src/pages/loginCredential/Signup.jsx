import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import './loginCred.css'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [value, setValue] = useState({
    email: '',
    username: '',
    password: ''
  })

  const url = 'http://localhost:3500/users/signup'
  const navigate = useNavigate()

  async function postNewUser(e) {
    e.preventDefault()
    if (!(value.email == '' && value.username == '' && value.password == '')) {
      await axios
        .post(url, {
          email: value.email,
          username: value.username,
          password: value.password
        })
        .then(res => {
          console.log(res.data)
          if (res.data == 'User registration successful') {
            alert('Successfully Registered!')
            // navigate("/");
          } else {
            alert(res.data)
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert("Please don't leave any of username, email, and password empty!")
    }
  }

  return (
    <div>
      <Header />
      <form
        className="loginCredForm"
        onSubmit={postNewUser}>
        <h2>Sign Up</h2>
        <section className="inputSection">
          <div className="inputContainer">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Username123"
              onChange={e => setValue({ ...value, username: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label>Password:</label>
            <input
              type="text"
              placeholder="Type your password"
              onChange={e => setValue({ ...value, password: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label>Email:</label>
            <input
              type="text"
              placeholder="email123@gmail.com"
              onChange={e => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <button>SUBMIT</button>
          <div className="options">
            <Link to="/">Log In</Link>
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

export default Signup
