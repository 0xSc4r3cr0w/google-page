import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import GoogleLogo from './components/GoogleLogo';
import Copyright from './components/Copyright';

import "./App.css";

function App() {
  return (
    <div class="d-flex vh-100 vw-100 flex-column">
      <div class="d-flex flex-column justify-content-start  flex-fill">
        <NavBar />
        <GoogleLogo />
        <SearchBar />
      </div>
      <Copyright />
    </div>
  );
}

export default App;