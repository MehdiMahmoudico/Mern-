import React from "react";
import { useParams } from 'react-router-dom';
const Detail = () => {
  const { numb , tcolor , bcolor } = useParams();

  const isValidNumber = !isNaN(Number(numb));
  return (
    <div >
      {isValidNumber ? (
        <h1 style={{backgroundColor:bcolor , color:tcolor}}>This number is: {numb}</h1>
      ) : (
        <h1 style={{backgroundColor:bcolor, color:tcolor}}>the word is : {numb}</h1>
      )}
    </div>
  );
};

export default Detail;
