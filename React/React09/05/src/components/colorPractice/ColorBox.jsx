import React, { useContext } from 'react';
import { ColorContext } from './colorContext';

const ColorBox = () => {
  const {color} = useContext(ColorContext)

  const style= {
    backgroundColor : color,
    width : '100vh',
    height : '100vh'
  }
  return (
    <div style={style}>    
    </div>
  );
};

export default ColorBox;