
import Squid from "./squid"
function TweetProfile() {
  return (
    <>
      <br />
      <section className="search-tweeter">
        <div className="tweet-title">
          <img className="search-tweeter" src="src/Icons/Icons/Search.svg" alt="" />
          <input className="search-tweeter" placeholder="search tweeter" type="text" />
        </div>
      </section>


      <br />
      <section className="search-tweeter">
        <div className="tweet-editor-buttons">
          <h4>Trends for you</h4>
          <img src="src/Icons/Icons/Settings.svg" alt="" />
        </div>
        <br />
        <Squid />
        <Squid />
        <Squid />
        <Squid />
        <div>
          <h3 className="show-more"> Show more</h3>
        </div>
      </section>
      <br />
      <section className="search-tweeter">
        <h3>Who to follow</h3>
        <div className="tweet-editor-buttons">
          <div className="tweet">
            <img src="src\Icons\Tweet-Profile-Phot- icons.svg" alt="avatar" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">The New York Times</h4>
                <img src="src\Icons\Icons\Verified.svg" alt="verified" />
              </div>
              <p className="tweet-title-details">@nytimes</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <br />
        <div className="tweet-editor-buttons">
          <div className="tweet">
            <img className="tweet-avatar" src="src/Icons/Icons/Profile-Photo.png" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">CNN</h4>
                <img src="src\Icons\Icons\Verified.svg" alt="verified" />
              </div>
              <p className="tweet-title-details">@CNN</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <br />
        <div className="tweet-editor-buttons">
          <div className="tweet">

            <img src="src\Icons\Icons\image 1.png" alt="avatar" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">Twitter</h4>
                <img src="src\Icons\Icons\Verified.svg" alt="verified" />
              </div>
              <p className="tweet-title-details">@Twitter</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <h3 className="show-more"> Show more</h3>
      </section>
      <br />
      <div className="cookie">
        <p className="tweet-title-details">Term of Service Privacy Policy Cookie Policy</p>
        <p className="tweet-title-details">Imprint Ads info More.. @2021 Twitter.Inc.</p>
      </div>
    </>
  )
}
export default TweetProfile