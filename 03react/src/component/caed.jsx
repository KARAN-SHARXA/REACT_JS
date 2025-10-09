import React from "react";

const Card = (props) =>{
  return(
    <div>

      {props.children}
      {props.name}
      {props.age}

    </div>
  )
}

export default Card