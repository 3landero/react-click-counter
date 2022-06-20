import './App.css';
import freeCodeCampLogo  from '../src/img/FreeCodeCamp_logo.png';
import Button  from './components/button';
import Counter from './components/counter';
import React, { useState } from 'react';


function App() {
  const [numClicks, setNumClicks]  = useState(0)
  const handleClick=()=>{
    setNumClicks(numClicks + 1);
  };

  const  resetCounter=()=>{
    setNumClicks(0)
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container' >
          <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='freecodecamp-logo'/>
      </div>
          <div className='main-container' >
              <Counter 
              numClicks={numClicks}/>
              <Button
              text = 'Click'
              isClickButton={true}
              handleClick= { handleClick }/>
              <Button 
              text= 'Reiniciar'
              isClickButton={false}
              handleClick={ resetCounter }/>
          </div>
    </div>
  );
}

export default App;
