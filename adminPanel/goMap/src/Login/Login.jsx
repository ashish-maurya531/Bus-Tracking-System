import styles from './Login.module.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const showToast = () => toast("Here is a basic toast message.");
    const navigate = useNavigate();
    const handleLogin = async () => {
        const tostShow=(e) =>
        toast(e, {
          position: 'top-right',
          autoClose: 5000,
        })
        
        console.log(userId + ' ' + password);

        try {
          const response = await axios.post('http://localhost:3000/login', { userId, password });
          console.log(response.data)
          if (response.data.message==="login successfull" && response.data.status==200 && response.data.status==200){
            tostShow("Login Successful");
            setTimeout( ()=>{navigate("/portal");}, 2000);
          }
          else{
            tostShow("Login Failed");

            // console.log(response.data)
          }
           
        } catch (error) {
            console.error('Login failed:', error);
        }
      
     
    };
  
  return (
    <MDBContainer fluid>
        
      <MDBRow className='d-flex justify-content-center align-items-center h-100 'style={{marginTop:'130px'}}>
      <h2 className="fw-bold  text-uppercase text-center text-white" style={{marginBottom:"-20px" ,fontSize:"4em"}}>Go Map<img src="./src/assets/icons8-location.gif"style={{height:"80px" ,marginTop:"-30px"}}></img></h2>
        <MDBCol col='12'>

          <MDBCard className='bg-transparent text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px', border:"1px solid black" ,backdropFilter: "blur(10px) saturate(100%)",backgroundColor: "rgba(17, 25, 40, 0.69)",boxShadow: "9.1px 9.3px 6.6px rgba(0, 0, 0, 0.17),25px 25.8px 18.2px rgba(0, 0, 0, 0.077),60.3px 62.1px 43.7px rgba(0, 0, 0, 0.054),200px 206px 145px rgba(0, 0, 0, 0.036)"}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Admin Id' id='formControlLg' type='text' size="lg" onChange={(e)=> {setUserId(e.target.value)}} style={{color:"white"}}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=> {setPassword(e.target.value)}} style={{color:"white"}}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'  onClick={()=>handleLogin()}>

                Login
              </MDBBtn>
            

              {/* <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='apple' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div> */}

         
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
      <ToastContainer />
    </MDBContainer>
    
  );
}

export default Login;