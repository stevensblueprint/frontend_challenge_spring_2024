import React from 'react';
import blueprintLogo from './assets/blueprint.png';

// Shows Blueprint Logo
function BlueprintLogo() {
  return (
    //HTML for page
    <div className='center-container'>
      <a href="https://sitblueprint.com" target="_blank" rel="noopener noreferrer">
        <img src={blueprintLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
}

export default BlueprintLogo;
