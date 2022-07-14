import React from 'react';
import UtilButtons from './UtilButtons';
import './style.css';

function SearchBar() {
    return(
        <React.Fragment>
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <div class="container-search w-50 d-flex align-items-center">
                <img src="search.png" />
                <input class="smll-font input-search no-border"/>
                <img src="keyboard.png" />
            </div>
        </div>
        <UtilButtons/>
        </React.Fragment>
    );
}

export default SearchBar;