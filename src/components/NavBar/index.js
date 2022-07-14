import React from 'react';
import HamburguerMenu from './HamburguerMenu';
import './style.css';

function NavBar() {
    return(
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-row-reverse align-items-center vw-100 m-3">
                <img src="login.png" width="40px" height="40px" class="border rounded-circle" title="Login" />
                
                <HamburguerMenu />

                <a class="small-text me-4">Imagens</a>
                <a class="small-text me-4">Gmail</a>
            </div>
        </div>
    );
}

export default NavBar;