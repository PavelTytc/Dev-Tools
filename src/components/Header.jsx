import React from 'react';


function Header () {
    return (
        <div className='header'>
            <a className='header__logo' href="#">DevBlog</a>
           <div className='nav__container'>
               <a className='nav' href="#">Наши авторы</a>
               <a className='nav' href="#">Создать пост</a>
               <a className='nav' href="#">Личный кабинет</a>                  
           </div>
            
        </div>

    )
}
export default Header;