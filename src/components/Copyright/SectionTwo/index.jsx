// justify-content-evenly

import React from "react";
import './style.css';

function SectionTwo() {
    return (
        <div class="d-flex align-items-center flex-wrap pe-2 justify-content-evenly sections smll-font sec-color">
            <div class="d-flex flex-wrap justify-content-evenly">
                <a class="section-links me-4">Sobre</a>
                <a class="section-links me-4">Publicidade</a>
                <a class="section-links me-4">Negócios</a>
                <a class="section-links me-4">Como funciona a pesquisa</a>
            </div>
            <div class="d-flex flex-wrap justify-content-evenly">
                <a class="section-links me-4">Privacidade</a>
                <a class="section-links me-4">Termos</a>
                <a class="section-links me-4">Configurações</a>
            </div>
        </div>
    );
}

export default SectionTwo;