import React, { useContext, useState, useEffect } from 'react';
import { ColorContext } from './colorContext';
import ColorBox from './ColorBox';

const ColorProvider = () => {
  const [color, setColor] = useState('green')
  console.log(color)

  useEffect(() => {
    const newColor = prompt('색상을 입력해주세요:');
    if (newColor) {
      setColor(newColor);
    }
  }, []);
  return (
    <div>
      
     <ColorContext.Provider value={{color}}>
       <ColorBox />
     </ColorContext.Provider>
    </div>
  );
};

export default ColorProvider;