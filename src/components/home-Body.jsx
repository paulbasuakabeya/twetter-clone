
import { useState } from 'react'
import PropsHomeTitle from "./home-propsTitle";
import PropsAnimeHome from "./home-props";
function BodyHome() {
  const [count, setCount] = useState(19)
  const [rebour, setRebour] = useState(48)
  const [coeur, setCoeur] = useState(482)
  return (
    <section className="tweet">
      <div className="tweet-avatar">
        <img src="src\Icons\Tweet-Profile-Phot- icons.svg" alt="avatar" />
      </div>
      <div className="tweet-content">
        <PropsHomeTitle title="The New York Times" details="@nytimes" times="2h" />
        <div className="tweet-text">
          <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
        </div>
        <div className="tweet-image">
          <img src="src\images\tweet-image.png" alt="tweet-image" />
        </div>
        <div className="tweet-actions">
          <PropsAnimeHome imageHover="messageImage" classColorHover="tweet-action message" funct={() => setCount((count) => count + 1)} image="src\Icons\Icons\Reply.svg" alt="apply" increment={count} />

          <PropsAnimeHome imageHover="partageImage" classColorHover="tweet-action partage" funct={() => setRebour((rebour) => rebour + 1)} image="src\Icons\Icons\Retweet.svg" alt="retweet" increment={rebour} />

          <PropsAnimeHome imageHover="likeImage" classColorHover="tweet-action like" funct={() => setCoeur((coeur) => coeur + 1)} image="src\Icons\Icons\React.svg" alt="react" increment={coeur} />
          <PropsAnimeHome imageHover="telechargerImage" classColorHover="tweet-action telecharger" image="src\Icons\Icons\Share.svg" alt="share" />

        </div>
      </div>
    </section>
  )
}

export default BodyHome;