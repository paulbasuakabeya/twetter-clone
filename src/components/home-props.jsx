import { useState } from 'react'
function PropsAnimeHome({ image, alt, classColorHover, imageHover }) {
  const [valeur, setValeur] = useState(78);
  const handleClick = () => {
    if (valeur === 78) {
      setValeur(valeur - 1);
    } else {
      setValeur(valeur + 1);
    }
  };
  return (
    <>
      <div className="tweet-actions ">
        <div className="tweet-actions">
          <div className={classColorHover}>
            <div className={imageHover} onClick={handleClick}>
              <img  src={image} alt={alt} />
            </div>
            <p>{valeur}</p>
          </div>
        </div>
      </div>
    </>

  )
}
export default PropsAnimeHome;