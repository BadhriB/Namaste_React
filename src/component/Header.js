import React from 'react';
import { useState } from 'react';
import resList from '../utils/mockData';

//import logoUrl from '../utils/constants'
export const logoUrl = 'https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702857600&semt=ais';          


export const Header = () =>{
     const[count,setCount] = useState(4);
     function decrement(){
      setCount(count-1);
     }

    return(
          <div className='header'>
                <div className='logo'>
                      <img src={logoUrl}></img>
                </div>
                <div className='nav-items'>
                      <ul>
                        <button onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button >+</button>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                      </ul>
                </div>
          </div>
    );
}