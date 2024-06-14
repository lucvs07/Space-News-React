import React from 'react';
import './styles.css';
import { Alien } from '@phosphor-icons/react';


export function Footer(){
    return(
        <footer id="footer">
            <span>Desenvolvido por <a href='https://www.linkedin.com/in/lucasrgrecco/' target='blank'> Lucas Grecco</a></span>
            <Alien size={48}/>
        </footer>
    );
}