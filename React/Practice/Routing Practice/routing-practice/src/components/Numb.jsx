import React from 'react';
import { useParams } from 'react-router-dom';
const Numb = () => {
  const { numb } = useParams();
  
  const isValidNumber = !isNaN(Number(numb));

  return (
    <div>
      {isValidNumber ? (
        <h1>This number is: {numb}</h1>
      ) : (
        <h1>the word is : {numb}</h1>
      )}
    </div>
  );
}

export default Numb;
