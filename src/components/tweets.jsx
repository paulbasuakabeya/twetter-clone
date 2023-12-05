function TweetsMain() {
  return (
    <section className="tweets">
      <section className="tweet">
        <img className="tweet-avatar" src="src\images\tweet-profile-photo.png" alt="tweet-phto" />
        <div className="tweet-content">
          <div className="tweet-title">
            <h4 className="tweet-title-author">CNN</h4>
            <img src="src\Icons\Icons\Verified.svg" alt="verified" />
            <p className="tweet-title-details">@CNN.7m</p>
          </div>
          <div className="tweet-text">
            <p >President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p>
          </div>
          <div className="tweet-actions">
            <div className="tweet-action">
              <img src="src\Icons\Icons\Reply.svg" alt="reply" />
              <p>57</p>
            </div>
            <div className="tweet-action">
              <img src="src\Icons\Icons\Retweet.svg" alt="retweet" />
              <p>144</p>
            </div>
            <div className="tweet-action">
              <img src="src\Icons\Icons\React.svg" alt="react" />
              <p>184</p>
            </div>
            <div className="tweet-action">
              <img src="src\Icons\Icons\Share.svg" alt="share" />
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}


export default TweetsMain
