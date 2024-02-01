import Header from '../../components/header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const FindPw = () => {
  const [values, setValue] = useState({
    email: '',
    username: ''
  })
  //local server port
  const url = 'http://localhost3500/users/login'
  const navigate = useNavigate()

  const formSubmitHandler = e => {
    e.preventDefault()
    if (values.email != '' && values.username != '') {
      findPw()
    } else {
      ;<prompt message="Enter your email and name" />
    }
  }

  async function findPw() {
    const email = values.email
    const username = values.username

    await axios
      .post(url, {
        email: email,
        username: username
      })
      .then(res => {
        if (res.data.message != 'User not found') {
          ;<prompt message="User not found" />
        } else {
          const message = `Your password is: ${res.data.message}`
          ;<prompt message={message} />
        }
      })
      .catch(err => {
        ;<prompt message={err} />
      })
  }

  return (
    <div>
      <Header />
      <form className="loginCredForm">
        <h2>Find ID</h2>
        <section className="inputSection">
          <div className="inputContainer">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="email123@gmail.com"
              onChange={e => setValue({ ...values, email: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="username123"
              onChange={e => setValue({ ...values, username: e.target.value })}
            />
          </div>
          <button>SUBMIT</button>
          <div className="options">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="findpwidContainer">
            <Link to="/findid">Find ID</Link>
          </div>
        </section>
      </form>
    </div>
  )
}

export default FindPw
