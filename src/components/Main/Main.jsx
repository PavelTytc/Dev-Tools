import React from 'react';
import api from '../../Api';
import "./Main.css";
import Card from "../Card"

console.log(api.getAllPosts()); //смотрим апи в консоли
function Main (props) {
    
    return (
       <div className='container'>
           <div>{props.api}</div>
       </div>
    )
   
}


export default Main;