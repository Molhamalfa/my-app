import React from "react";

const Card = ({name , email , id}) => {

  return (
    <div  className=
    "tc bg-light-blue br3 dib pa3 grow ma2 shadow-5">
      <img alt="robots" 
      src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;