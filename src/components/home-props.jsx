import { useState } from 'react'
function PropsAnimeHome({ image, increment, alt, classColorHover, imageHover }) {
  const [count, setCount] = useState(7)
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-actions">
          <div className={classColorHover}>
            <div className={imageHover}>
              <img onClick={() => setCount((count) => count + 1)} src={image} alt={alt} />
            </div>
            <p>{increment}{ count}</p>
          </div>
        </div>
      </div>
    </>

  )
}
export default PropsAnimeHome;