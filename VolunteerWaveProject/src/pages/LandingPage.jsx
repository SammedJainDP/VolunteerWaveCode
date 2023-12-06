import React from 'react';
import Header1 from '../CommonComponents/Header1';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';



const LandingPage = () => {
    
return(
    <div>
    <Header1/>
    <div className=" flex justify-center items-center h-screen">
    <div style={{width: 818,height: 244,textAlign: 'center',color: 'black',fontSize: 64,fontFamily: 'Inter',fontWeight: '400',wordWrap: 'break-word' }}>
            <p>
                Welcome to Volunteer Wave! If you're new, please sign up.
            </p>
            <Button style={{ color:"black", backgroundColor:"#D3D3D3", fontSize:"20px", fontWeight:"Bold", marginRight:"10px", width:"150px"}} variant="contained" href="/#/Login"> LOGIN </Button>
            <Button style={{color:"black", backgroundColor:"#D3D3D3", fontSize:"20px", fontWeight:"Bold", width:"150px"}} variant="contained" href="/#/SignUp"> SignUp </Button>
            </div>
            </div>
            </div>
);
};
export default LandingPage;