function RightSideProps({ titleAthor, titleTail, imageRight }) {
  return (
    <>
      <div className="tweet-editor-buttons">
        <div className="tweet">
          <img src={imageRight} alt="avatar" />
          <div>
            <div className="tweet-title">
              <h4 className="tweet-title-author">{titleAthor}</h4>
              <img src="src\Icons\Icons\Verified.svg" alt="verified" />
            </div>
            <p className="tweet-title-details">{titleTail}</p>
          </div>
        </div>
        <button className="button-follow">Follow</button>
      </div>
    </>
  )
}
export default RightSideProps