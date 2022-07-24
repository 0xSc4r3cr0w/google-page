import React from "react";
import './style.css'
import ItemLi from "./ItemLi";

const presearch = ["Ow boy", "Opa", "Esses dados foram manipulados", "Obg pelo apoio Pedro :>"];

function SearchItems() {
    return(
        <React.Fragment>
            <div id="container-search-items">
                <div id="not-show-search-items" class="bg-white border w-50 d-flex flex-column position-absolute justify-content-center">
                    <div class="divisory align-self-center"></div>
                    <ul id="presearch-list">
                        {presearch.map((value) => {
                            return <ItemLi Title={value} />
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchItems;