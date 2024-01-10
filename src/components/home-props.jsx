/*function PropsAnimeHome({ image, increment, alt, funct,  }) {
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-actions">
          <div className="tweet-action " >
            <img onClick={funct} src={image} alt={alt} />
            <p>{increment}</p>
          </div>

        </div>
      </div>
    </>

  )
}
export default PropsAnimeHome;*/
function PropsAnimeHome({ image, increment, alt, classColorHover, imageHover }) {
  return (
      <>
          <div className="tweet-actions">
              <div className="tweet-actions">
                  <div className={classColorHover}>
                      <div className={imageHover}>
                          <img src={image} alt={alt} />
                      </div>
                      <p>{increment}</p>
                  </div>
              </div>
          </div>
      </>

  )
}
export default PropsAnimeHome;