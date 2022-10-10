import React,{useState}from 'react'
import  Container  from 'react-bootstrap/Container'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Badge from 'react-bootstrap/Badge';
import {HotelData} from './data.js';



const Login = () =>{
  var Result = HotelData;
  const [selected, setSelected] = useState();
  const handleChange = event => {
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
}

    return (
  <div className='grouplist'>
  <select value={selected} onChange={handleChange} className='select' title='為您精選'>
    <option key='default' value='default'hidden>為您推薦</option>
    <option key='price' value='price'>價錢低到高</option>
    <option key='score' value='score'>評分低到高</option>
  </select>
  <h3>找到{HotelData.length}間住宿</h3>
    {Result.map((data, index) => {
        return (
     <Container className='border container'>
      <img src={data.HotelImg} alt='' className='imgcss'/>
        <div className='textcss'>
          <br></br>
          <span className='rewardcss'>{data.HotelReward}
          <Badge bg="danger">{data.HotelRewardScore}</Badge>
          </span>
          <h5>{data.HotelName}</h5>
          <IconContext.Provider value={{ color: "red"}}>
            <p className='locationcss'>
            <FaMapMarkerAlt />
            {data.HotelLocation}</p>
          </IconContext.Provider>
          <span className='notecss'>{data.HotelNote}</span>
          <h5 className='pricecss'>NT:${data.HotelPrice}起</h5>
        </div>
      </Container>  
      );
    })}
   </div>  
   )
  }

export default Login;

