import React, { useState } from 'react';
import route from './Map.jsx';
import Map from './Map';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import H from '@here/maps-api-for-javascript';
import axios from 'axios'





export default function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);



  const [openBasic2, setOpenBasic2] = useState(false);
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleOpen2 = () => setBasicModal2(!basicModal2);
  const navigate = useNavigate();
  const apikey = 'NgCSowYeGRTzuy1zp75Py29m_oFOdA-ATehX_gZ3IxA'
  const userPosition = { lat: 64.1472, lng: -21.9398 };
  

    



  


  




  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [pass, setPass] = useState("");
  const [busses, setBusses] = useState(0);
  const [route1, setRoute1] = useState("");

  const addriver = async (req, res) => {
    console.log(name, phone, pass)
    try {
      const response = await axios.post('http://localhost:3000/add', { 
        driver_name: name,
        phoneNo: phone,
        password: pass
      })
      console.log(response.data)
      alert("New Driver Added");
    }catch(err) {
      console.log(err)
    }
  }
  
  const handleList =async () => {
    

    try {
      const response = await axios.get('http://localhost:3000/driver_location');
      // console.log((response.data.data));
      var location = response?.data?.data;
      console.log(location);
      setBusses(location.length);
    
    } catch (error) {
        console.error('Login failed:', error);
    }
  };

  useEffect(() => {

    handleList();
  }, [])


  const movetologin=()=>{
    navigate("/login")

  }



  const route = async () => {
    
    try {
      const response = await axios.get('http://localhost:3000/route');
      // console.log((response.data.data));
      var location = response?.data?.data;
      console.log(location);
      setRoute1(location);
      // alert("New route added");
    }catch(err) {
      console.log(err)
    }
  }
  route();


  const route_update = async () => {
    
    try {
      const updated_routes=document.getElementById("textAreaExample1").value;
      const response = await axios.post('http://localhost:3000/route', { 
        route: updated_routes,
       
      })
      console.log(response)
      // console.log((response.data.data));
      
      console.log(location);
      setRoute1(updated_routes);
      alert("routes has been updated")
      // alert("New route added");
    }catch(err) {
      console.log(err)
    };
  }
  // useEffect(() => {

  //   route();
  // }, [])













  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
        
      <MDBContainer fluid>
 
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
        <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            
            <MDBNavbarItem >
            <MDBBtn style={{float:"right"}} onClick={()=>movetologin()}>LogOut</MDBBtn>
            </MDBNavbarItem>
           
          </MDBNavbarNav>

        
        </MDBCollapse>
        <h2 className="fw-bold  text-uppercase text-right text-dark" >Go Map<img src="./src/assets/icons8-location.gif"style={{height:"30px",marginTop:"-10px"}}></img></h2>

      </MDBContainer>
    </MDBNavbar>


    <MDBContainer  >
    <MDBRow className='row-cols-3 row-cols-md-3 g-3 m-3'>
      <MDBCol>
        <MDBCard style={{ maxWidth: "15rem" } }className="h-100">
          <MDBCardImage className="img-fluid"
            src="./src/assets/bus.gif"
            alt='...'
            position='top'
          />
          <MDBCardBody className="text-uppercase text-center ">
            <MDBCardTitle className="m-auto">Buses</MDBCardTitle>
            <MDBCardText className="text-uppercase text">
       {busses}
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ maxWidth: "15rem" }}className="h-100">
          <MDBCardImage className="img-fluid"
            src="./src/assets/location3.gif"
            alt='...'
            position='top'
            style={{height:"auto", width:"80%"}}

            onClick={toggleOpen}
          />
          <MDBCardBody className="text-uppercase text-center mt-0">
            <MDBCardTitle className="m-auto">Routes</MDBCardTitle>
            <MDBCardText>
             View / Edit
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ maxWidth: "15rem" }} className="h-100">
          <MDBCardImage className="img-fluid"
            src="./src/assets/person2.gif"
            alt='...'
            position='top'
           
           onClick={toggleOpen2}
          />
          <MDBCardBody className="text-uppercase text-center mt-0">
            <MDBCardTitle className="m-auto">Driver</MDBCardTitle>
            <MDBCardText>
              Add/Remove 
              
            </MDBCardText>
          </MDBCardBody>
         
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    
    

          
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Routes</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div data-mdb-input-init class="form-outline">
              <textarea class="form-control" id="textAreaExample1" rows="4" contenteditable='true' defaultValue={route1}></textarea>
             
            </div>
  




            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={route_update}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    


      <MDBModal open={basicModal2} onClose={() => setBasicModal2(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>ADD-Driver</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form>
              <label>Enter name:
              <input
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
               />
              </label>
              <label>Enter phone no:
              <input
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
               />
              </label>
              <label>Enter password:
              <input
              type="text" 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
               />
              </label>
            </form>
            
  
  
          
      

             






            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen2}>
                Close
              </MDBBtn>
              <MDBBtn onClick={()=>addriver()}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

{/*       
      <MDBContainer >
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Enter Bus Number' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
      </MDBContainer> */}
          

     <div>
      <Map apikey={apikey} />
    </div>

    
    </>



  );
}