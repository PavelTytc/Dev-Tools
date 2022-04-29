import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";


function Header () {
    return (
        <div className='header'>
            <Link className='header__logo' to="/">DevBlog</Link>
           <div className='nav__container'>
               <Link className='nav' to="/authors">Наши авторы</Link>
               <Link className='nav' to="/new">Создать пост</Link>
               <Link className='nav' to="/account">Личный кабинет</Link>              
           </div>
            
        </div>

    )
}
export default Header;