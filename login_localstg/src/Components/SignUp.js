import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,Link } from 'react-router-dom'



function SignUp() {

  
  // const getDataLS = () => {
  //   let LSdata = JSON.parse(localStorage.getItem('Registeration'));
  //   if (LSdata) {
  //     let values = JSON.parse(LSdata)
  //     console.log(values)
  //     return values
  //   }

  //   else {
  //     return []
  //   }
  // }
  

  const [dob, setDob] = useState(new Date());
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [cellPhone, setCellPhone] = useState('')
  const [data, setData] = useState([])
  const [success,setSuccess]=useState(false)
  const navigate = useNavigate()
  const LSdata = JSON.parse(localStorage.getItem('Registeration'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Data1',data);
    // localStorage.setItem('Registeration', JSON.stringify(data))
  
    let user_records = LSdata ? LSdata :[]
    
    if (user_records.find((v) => { return v.email === email })) {
      alert('Email already exists')
      console.log('Data2',data);
    }
    else {
      let values = {
        fname,
        lname,
        dob,
        email,
        cellPhone,
         token: (Math.random() + 1)
      }
      // console.log('Data3',data);
      setData([...data,values])
      // console.log('Data4',data);
     localStorage.setItem('Registeration',JSON.stringify(data))
     setSuccess(true)
     if(!email.includes("@"))
     {
        alert('Please enter valid Email Address..!!')
     }
    //  console.log('suc1',success)
     if(success)
     {
      navigate('/');
      setSuccess(false);
      console.log('Success',success);
     }
      
    }
    // setFname('')
    // setLname('')
    // setEmail('')
    // setCellPhone('');
  }
  // const handleChange=((e)=>{
  //   name=e.target.name;
  //   value=e.target.value;

  // // })

  // useEffect(() => {
  //   localStorage.setItem('Registeration', JSON.stringify(data))
    

  // }, [data])


  return (


    <div className='container'>
      <Paper elevation={3} style={{ width: 500, height: 550 }}>
        <h2 style={{fontSize:'35px',fontFamily:'sans-serif',color:'lightblue'}}>SignUp</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <TextField label="Enter FirstName" size="small" required
              value={fname} onChange={(e) => setFname(e.target.value)}
            /><br></br>
            <br></br>
            <TextField label="Enter LastName" size="small" required
              value={lname} onChange={(e) => setLname(e.target.value)}
            /><br></br>
            <br></br>
            <DatePicker wrapperClassName="date-picker" selected={dob} onChange={(date) => setDob(date)}
              required dateFormat={"dd/MM/yyyy"}
              showYearDropdown
              scrollableMonthYearDropdown

            /><br></br>
            <br></br>
            {/* <input placeholder='Enter Eamil' required/><br></br>
          <input placeholder='Enter Phone No' required/><br></br> */}
            <TextField label="Enter Email" size="small" required
              value={email} onChange={(e) => setEmail(e.target.value)}
            /><br></br>
            <br></br>
            <TextField
              id="outlined-number"
              label="Enter Cell No"
              type="number"
              size="small"
              required
              value={cellPhone} onChange={(e) => setCellPhone(e.target.value)}
            />
            <br></br><br></br>
            

            <Button variant="outlined" type='submit' >Register</Button>
          </form>
          <p className='link'>Already have an account?<Link to='/' style={{textDecoration:'none',marginLeft:40,color:'blue'}}>Login</Link> </p>
        </div>

      </Paper>

    </div>
  )
}

export default SignUp