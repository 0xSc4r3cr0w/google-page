import React from 'react';
import UtilButtons from './UtilButtons';
import SearchItems from './SearchItems';
import './style.css';

function SearchBar() {
    const showPreSearch = (e) => {
        const containerSearch = document.querySelector("#container-search");
        const toggleOptions = ["not-show-search-items", "show-search-items"]
        const searchItems = document.querySelector("#container-search-items").querySelector("div");
        containerSearch.classList.add("preview-search");
        searchItems.id = toggleOptions[1];
    }

    document.addEventListener("click", (e) => {
        const targetId = e.target.id;
        const containerSearch = document.querySelector("#container-search");
        const searchBar = document.querySelector("#search-bar");
        const searchItems = document.querySelector("#container-search-items").querySelector("div");
        const toggleOptions = ["not-show-search-items", "show-search-items"]
        const abledIds = ["search-bar", "presearch-list", "presearch-list-item", "not-show-search-items", "show-search-items", "container-search-items"];

        if(targetId === "search-bar" && searchBar.value){
            containerSearch.classList.add("preview-search");
            searchItems.id = toggleOptions[1];
        }
        else{
            searchItems.id = toggleOptions[0];
            containerSearch.classList.remove("preview-search");
        }
    })

    return(
        <React.Fragment>
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <div id="container-search" class="container-search w-50 d-flex align-items-center">
                <svg id="search-bar-input" width="20px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <input id="search-bar" type="search" onInput={showPreSearch} class="smll-font input-search no-border"/>
                <img src="keyboard.png" />
            </div>
        </div>
        <SearchItems/>
        <UtilButtons/>
        </React.Fragment>
    );
}

export default SearchBar;