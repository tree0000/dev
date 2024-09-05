import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const FooterComponent = () => {
  const {darkMode} = useContext(ThemeContext) //여기서는 darkMode 값을 바꿔줄 필요는 없으므로 darkMode 값만 가져옴
  
  const theme = {
    backgroundColor : darkMode ? 'black' : 'white',
    color : darkMode ? 'white' : 'black',
  }

  return (
    <div className='footer' style={theme}> 
      Footer
    </div>
  );
};

export default FooterComponent;