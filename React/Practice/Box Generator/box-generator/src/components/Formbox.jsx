import React, { useState } from 'react';

function Formbox({ addBox }) {
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ color, width, height });
    setColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter a color"
      />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Width"
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height"
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default Formbox;