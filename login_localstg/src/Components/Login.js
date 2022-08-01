import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link ,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate=useNavigate()
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
  const loginData=JSON.parse(localStorage.getItem('Registeration'))
  console.log("LoginData",loginData)
  if(loginData===null)
  {
    alert('Please SignUp first')
  }
  let user_records = loginData ? loginData : []
  
  //console.log('Token',token)
    
   
    
    const emailCheck=user_records.find((v) => { return v.email === email    
    })
  
  if (emailCheck)
   {
    alert('Login Successfully')
    
    // localStorage.setItem('Token',JSON.stringify(setToken(TokenCheck)) );
    navigate("/Cards")
    
  }
 
  else
  {
    alert('Credentials are not Correct..!!')
     
  }
  }
  return (
    <div className='container'>
      <Paper elevation={3} style={{ width: 500, height: 500 }}>
        <h2 style={{ fontSize: '35px', fontFamily: 'sans-serif', color: 'lightblue' }}>LogIn</h2>
        <div className='main_container'>
          <form onSubmit={handleSubmit}>
            <div >
              <TextField label="Enter FirstName" size="small" required
                value={fname} onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <TextField className='inputField' label="Enter Email" size="small" required
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <br></br>
            <Button variant="outlined" type='submit' >Login</Button>
          </form>

          <p className='link'>Not have an account?<Link to='/Signup' style={{ textDecoration: 'none', marginLeft: 40, color: 'blue' }}>SignUp</Link> </p>
        </div>

      </Paper>


    </div>
  )
}

export default Login