import React, { useState } from 'react';
import axios  from 'axios';



const Login = () => {
    const [loginData, setLoginData] = useState({})
   
    


    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        const body={
            employeeId:loginData.employeeId,
            password:loginData.password
        }
        axios.post('https://staging-api.erpxbd.com/api/v1/users/login',body)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))


    }

    return (
        <div className='login'>
                
                
                <br/>
              <div className='row'>
              <div className='col-md-3 m-auto  bg-dark text-light   p-5'>
              <div className='text-center bg-light'><h4>Welcome Back!</h4>
                    <p>Please login to your account</p>
                </div>
                    <p className='text-center mt-5'>Log-in</p>
                   
                    <form onSubmit={handleLogInSubmit}>
                 
                        <input name="employeeId" type="text" className='form-control' onChange={handleChange} placeholder='Enter Your Email'  />
                       
                        < input name="password" className='form-control' onChange={handleChange} placeholder="Password" type="password"  />
                        <br/>
                        <button className='form-control btn btn-primary' type="submit" variant='contained'>Signin</button>
                           
                       

                      

                    </form>
                    <h4>Don,t have an account? Sign up</h4>

                </div>

              </div>
            
           
        </div>
    );
};

export default Login;