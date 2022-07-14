import React from 'react';
import './style.css';

function UtilButtons() {
    return(
        <React.Fragment>
        <div class="d-flex vw-100 justify-content-center pt-4">
            <button type="button" class="btn util-button me-4">Pesquisa Google</button>
            <button type="button" class="btn util-button">Estou com sorte</button>
        </div>
        
        <div class="d-flex vw-100 justify-content-center pt-4">
            <span class="message">Feito por <a href="https://github.com/0xSc4r3cr0w/" title="Marcos">マルコス</a></span>
        </div>
        </React.Fragment>
    );
}

export default UtilButtons;