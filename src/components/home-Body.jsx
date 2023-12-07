
function BodyHome() {
  return (
    <section className="tweet">
      <div className="tweet-avatar">
        <img src="src\Icons\Tweet-Profile-Phot- icons.svg" alt="avatar" />
      </div>
      <div className="tweet-content">
        <div className="tweet-title">
          <h4 className="tweet-title-author">The New York Times</h4>
          <img src="src\Icons\Icons\Verified.svg" alt="verified" />
          <p className="tweet-title-details">@nytimes.2h</p>
        </div>
        <div className="tweet-text">
          <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
        </div>
        <div className="tweet-image">
          <img src="src\images\tweet-image.png" alt="tweet-image" />
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <img src="src\Icons\Icons\Reply.svg" alt="reply" />
            <p>19</p>
          </div>
          <div className="tweet-action">
            <img src="src\Icons\Icons\Retweet.svg" alt="retweet" />
            <p>48</p>
          </div>
          <div className="tweet-action">
            <img src="src\Icons\Icons\React.svg" alt="react" />
            <p>482</p>
          </div>
          <div className="tweet-action">
            <img src="src\Icons\Icons\Share.svg" alt="share" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodyHome;