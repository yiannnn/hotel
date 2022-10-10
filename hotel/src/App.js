import React,{useState}from 'react'
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
// import Form from 'react-bootstrap/Form';
import Select from 'react-select'


const Login = () =>{
  var Result = HotelData;
  var Origin = HotelData;
  const [selected, setSelected] = useState();
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
if(selected === "score"){
  Result = HotelData.sort(dynamicSort("HotelRewardScore"));
}else if(selected === "price"){
  Result = HotelData.sort(dynamicSort("HotelPrice"));
}else if(selected === "default"){
  console.log(Result)
  //Result = Origin;
}

    return (
  <div className='p1'>
  <select value={selected} onChange={handleChange} className='DropDown' title='為您精選'>
    <option key='default' value='default'hidden>為您推薦</option>
    <option key='price' value='price'>價錢低到高</option>
    <option key='score' value='score'>評分低到高</option>
  </select>
  <h3>找到{HotelData.length}間住宿</h3>
    {Result.map((data, index) => {
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
          <h5 className='p8'>NT:${data.HotelPrice}起</h5>
        </div>
      </Container>  
      );
    })}
   </div>  
   )
  }

export default Login;

