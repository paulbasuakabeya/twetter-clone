

import PropsHomeTitle from "./home-propsTitle";
import PropsHome from "./home-propsTwo";

function CommitHome() {
  return (
    <section className="tweet">
      <div className="tweet-avatar">
        <img src="src\Icons\Icons\image 1.png" alt="" />
      </div>
      <div className="tweet-content">
        <PropsHomeTitle title="Twitter" details="@nytimes" times="Oct 29" />
        <div className="tweet-text">
          <p>BIG NEWS lol jk still Twitter</p>
        </div>
        <div className="tweet-actions">
          <PropsHome imageTwo="src\Icons\Icons\Reply.svg" altTwo="reply" incrementTwo="118.7" convertir="K" />
          <PropsHome imageTwo="src\Icons\Icons\Retweet.svg" altTwo="retweet" incrementTwo="785.7" convertir="K" />
          <PropsHome imageTwo="src\Icons\Icons\React.svg" altTwo="react" incrementTwo="3.3" convertir="M" />
          <PropsHome imageTwo="src\Icons\Icons\Share.svg" altTwo="share" />

        </div>
      </div>
    </section>

  )

}

export default CommitHome;