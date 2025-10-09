import React from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChangeCapture={(e)=>{
        props.setName(e.target.value)
      }
     } />

     <p>Name state variable ki value inside card:{props.name}</p>
    </div>
  );
};

export default Card;
