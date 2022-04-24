import React from 'react';
import api from '../../Api';
import "./Main.css";

console.log(api.getAllPosts()); //смотрим апи в консоли
function Main (props) {
    
    return (
       <div className='main'>
           <div>{props.api}</div>
       </div>
    )
   
}


export default Main;