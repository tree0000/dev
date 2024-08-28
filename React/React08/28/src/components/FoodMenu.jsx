import React from 'react';
import '../App.css';
import pastaImg from '../img/파스타.jpg';
import pizzaImg from '../img/피자.jpg';
import steakImg from '../img/스테이크.jpg';

function FoodMenu() {
  return (
    <div className="food-menu">
    <div className='foodimg'>
         <img 
          src={pastaImg} // import된 변수를 사용합니다.
          alt='pasta'
        />
      <h3>pasta</h3>
      <p>15,000</p>
      <img 
          src={pizzaImg} // import된 변수를 사용합니다.
          alt='pizza'
        />
      <h3>pasta</h3>
      <p>25,000</p>
      <img 
          src={steakImg} // import된 변수를 사용합니다.
          alt='steak'
        />
      <h3>pasta</h3>
      <p>50,000</p>
    </div>
    </div>
  );
}

export default FoodMenu;
