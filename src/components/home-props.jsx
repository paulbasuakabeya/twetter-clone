function PropsAnimeHome({ image, increment, alt, funct }) {
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-actions">
          <div className="tweet-action">
            <img className="image" onClick={funct} src={image} alt={alt} />
            <p>{increment}</p>
          </div>

        </div>
      </div>
    </>

  )
}
export default PropsAnimeHome;