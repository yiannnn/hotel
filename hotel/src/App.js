import React from 'react'
import  Container  from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
import './App.css';
// import App from './App';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Badge from 'react-bootstrap/Badge';
import {HotelData} from './data.js';

const Login = () =>{
    
    return (
      <div className='p1'>
        <h3>找到{HotelData.length}間住宿</h3>
    {HotelData.map((data, index) => {
        return (
     <Container className='border Container'>
      <img src={data.HotelImg} alt='' className='p3'/>
        <div className='p4'>
          <br></br>
          <span className='p7'>{data.HotelReward}
          <Badge bg="danger">{data.HotelRewardScore}</Badge>
          </span>
          <h5>{data.HotelName}</h5>
          <IconContext.Provider value={{ color: "red"}}>
            <p className='p5'>
            <FaMapMarkerAlt />
            {data.HotelLocation}</p>
          </IconContext.Provider>
          <span className='p6'>{data.HotelNote}</span>
          <h5 className='p8'>NT$:{data.HotelPrice}起</h5>
        </div>
      </Container>  
      );
    })}
   </div>  
   )
  }

export default Login;

