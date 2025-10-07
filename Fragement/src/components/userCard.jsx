import React from 'react';
import pic from '../assets/react.svg'; // ✅ use forward slashes
import "./userCard.css"
const Usercard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt='Karan' />
      <p id='user-desc'>{props.desc}</p>
    </div>
  );
};

export default Usercard;
