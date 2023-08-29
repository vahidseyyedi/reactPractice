import { useState } from 'react';
import './header.css'
import Login from './login';


const Header = () =>{
    const [showBox , setShowBox] = useState(false);
    const handel = () =>{
        setShowBox(true);

    }

    return(
        <div className='header'>
            <img src="../assets/logo.png"></img>
            <h1 className='title'>COMPONY</h1>
            <button className='loginButton' onClick={handel}>Login</button>
            {showBox && <Login />}
        </div>
    );
}

export default Header