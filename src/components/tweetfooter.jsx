function TweetFooter() {
    return (
        <section className="tweet">
          <div className="tweet-avatar">
              <img src="src\Icons\Icons\Twitter.svg" alt="avatar" />
          </div>
            <div className="tweet-content">
                <div className="tweet-title">
                    <h4 className="tweet-title-author">Twitter</h4>
                    <img src="src\Icons\Icons\Verified.svg" alt="verified" />
                    <p className="tweet-title-details">@Twitter.Oct 4</p>
                </div>
                <div className="tweet-text">
                    <p>hello literally everyone</p>
                </div>
            </div>
        </section>
    )
}


export default TweetFooter