import React from 'react';
import MenuItem from '../MenuItem';

function HamburguerMenu() {
    return(
        <div class="btn-group" role="group">
            <img src="hamburguer.png" data-bs-toggle="dropdown" class="menu-hamb me-4" title="Menu" />
            
            <div class="dropdown-menu p-3 fixed-menu-size" aria-labelledby="btnGroupDrop1">
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
                <MenuItem Href="" Title="Instagram" Src="instagram.png" />
            </div>
        </div>
    );
}

export default HamburguerMenu;