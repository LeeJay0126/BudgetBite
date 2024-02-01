import Header from '../../components/header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const FindId = () => {
  const [values, setValue] = useState({
    email: '',
    firstname: '',
    lastname: ''
  })
  //local server port
  const url = 'http://localhost3500/users/login'
  const navigate = useNavigate()

  const formSubmitHandler = e => {
    e.preventDefault()
    if(values.email != '' && values.firstname != '' && values.lastname != ''){
        findId();
    }else{
        <prompt message="Enter your email and name"/>
    }
  }

  async function findId() {
    const email = values.email;
    const firstname = values.firstname;
    const lastname = values.lastname;

    await axios.post(url, {
        email: email,
        firstname: firstname,
        lastname: lastname
    }).then(res =>{
        if(res.data.message != "User not found"){
            <prompt message="User not found"/>
        }else{
            const message = `Your username is: ${res.data.message}`;
            <prompt message={message}/>
        }
    }).catch(err => {
        <prompt message={err}/>
    });
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
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="John"
              onChange={e => setValue({ ...values, firstname: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              placeholder="Doe"
              onChange={e => setValue({ ...values, lastname: e.target.value })}
            />
          </div>
          <button>SUBMIT</button>
          <div className="options">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="findpwidContainer">
            <Link to="/findpw">Find PW</Link>
          </div>
        </section>
      </form>
    </div>
  )
};

export default FindId;
