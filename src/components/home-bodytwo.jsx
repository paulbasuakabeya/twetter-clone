/*function BodyTwoHome() {
      return (
            <section className="tweet">
                  <div className="tweet-avatar">
                        <img src="src\Icons\Icons\image 1.png" alt="avatar" />
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
                        <div className="tweet-image">
                              <img src="src\images\tweet-image.png" alt="tweet-image" />
                        </div>
                        <div className="tweet-actions">
                              <div className="tweet-action">
                                    <img src="src\Icons\Icons\Reply.svg" alt="reply" />
                                    <p>118.7K</p>
                              </div>
                              <div className="tweet-action">
                                    <img src="src\Icons\Icons\Retweet.svg" alt="retweet" />
                                    <p>785.4K</p>
                              </div>
                              <div className="tweet-action">
                                    <img src="src\Icons\Icons\React.svg" alt="react" />
                                    <p>3.3M</p>
                              </div>
                              <div className="tweet-action">
                                    <img src="src\Icons\Icons\Share.svg" alt="share" />
                              </div>
                        </div>
                        <div>

                        </div>
                  </div>
            </section>
      )
}

export default BodyTwoHome;*/
import PropsHome from "./home-propsTwo";

function BodyTwoHome() {
  return (
    <section className="tweet">
      <div className="tweet-avatar">
        <img src="src\Icons\Icons\image 1.png" alt="avatar" />
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
        <div className="tweet-image">
          <img src="src\images\tweet-image.png" alt="tweet-image" />
        </div>
        <div className="tweet-actions">
          <PropsHome classColorHovertwo="flex items-center gap-5  message" imageHovertwo="messageImage" imageTwo="src\Icons\Icons\Reply.svg" altTwo="reply" incrementTwo="118.7" convertir="K" />

          <PropsHome classColorHovertwo="flex items-center gap-5  partage" imageHovertwo="partageImage" imageTwo="src\Icons\Icons\Retweet.svg" altTwo="retweet" incrementTwo="785.7" convertir="K" />
          <PropsHome classColorHovertwo="flex items-center gap-5  like" imageHovertwo="likeImage" imageTwo="src\Icons\Icons\React.svg" altTwo="react" incrementTwo="3.3" convertir="M" />

          <PropsHome imageTwo="src\Icons\Icons\Share.svg" altTwo="share" />
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default BodyTwoHome;