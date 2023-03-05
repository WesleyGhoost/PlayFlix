import './Navbar.css'

import React from "react";

import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    const getUser = localStorage.getItem('nick')
    const getImg = localStorage.getItem('img')

    const [colorNav, setColorNav] = useState(false)

    useEffect(() => {
        function scrollNav() {
            if(window.scrollY > 10) {
                setColorNav(true)
            }
            else {
                setColorNav(false)
            }
        }
        window.addEventListener('scroll', scrollNav)
    }, [])
    
    return(
        <div>
            <nav className={colorNav ? 'color-change' : ''}>
                <h4>PLAYFLIX</h4>
                <ul className="genres">
                    <li>
                        <Link to="/home">Início</Link>
                    </li>
                    <li>
                        <Link to="/aaa">AAA</Link>
                    </li>
                    <li>
                        <Link to="/indie">Indies</Link>
                    </li>
                    <li>
                        <Link to="/retro">Retrô</Link>
                    </li>
                    <li>
                        <Link to="/launch">Lançamentos</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
                <Link className='user-nick' to='/perfil'><h3>{getUser}</h3></Link>
                <Link to="/select-char"><img className='user-char' src={getImg} alt="Character" /></Link>
            </nav>
        </div>
    )

}