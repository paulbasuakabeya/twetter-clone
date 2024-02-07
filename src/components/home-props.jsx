import { useState } from 'react'
function PropsAnimeHome({ image, alt, classColorHover, imageHover }) {
  const [count, setCount] = useState(27);

  const handleIconClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleIconDoubleClick = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <>
      <div className="tweet-actions ">
        <div className="tweet-actions">
          <div className={classColorHover}>
            <div className={imageHover} onClick={handleIconClick} onDoubleClick={handleIconDoubleClick}>
              <img  src={image} alt={alt} />
            </div>
            <p>{ count}</p>
          </div>
        </div>
      </div>
    </>

  )
}
export default PropsAnimeHome;
/*
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIconClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleIconDoubleClick = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIconClick} onDoubleClick={handleIconDoubleClick}>
        { Icône à remplacer par votre propre icône }
        Icon
      </button>
    </div>
  );
}

export default Counter; */