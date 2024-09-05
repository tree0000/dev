import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const HeaderComponent = () => {

  const {darkMode, setDarkMode} = useContext(ThemeContext) //darkMode 값을 바꿔주는 곳은 Header

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const theme = {
    backgroundColor : darkMode ? 'black' : 'white',
    color : darkMode ? 'white' : 'black',
  }

  return (
    <div className='header' style={theme}>
      Header
      {
        darkMode ?
                  (<button className='toggleBtn' onClick={toggleDarkMode}>🌑</button>)
                :
                (<button className='toggleBtn' onClick={toggleDarkMode}>🌝</button>)
      }
    </div>
  );
};

export default HeaderComponent;