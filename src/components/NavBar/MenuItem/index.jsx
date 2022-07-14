import React from 'react';
import './style.css';

function MenuItem(props) {
    return (
        <div class="option-container">
            <div class="img-center">
                <a href={props.Href}>
                    <img width="70px" height="70px" title={props.Title} src={props.Src} />
                </a>
            </div>
            <div class="description-img">
                <span>{props.Title}</span>
            </div>
        </div>
    );
}

export default MenuItem;