
import { useState } from 'react'
import PropsHomeTitle from "./home-propsTitle"
import PropsAnimeHome from "./home-props"

function TweetsHome() {
  const [count, setCount] = useState(57)
  const [rebour, setRebour] = useState(144)
  const [coeur, setCoeur] = useState(184)
  return (
    <section className="tweets">
      <section className="tweet">
        <img className="tweet-avatar" src="src\images\tweet-profile-photo.png" alt="tweet-phto" />
        <div className="tweet-content">
          <PropsHomeTitle title="CNN" details="@CNN" times="7m" />
          <div className="tweet-text">
            <p >President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p>
          </div>
          <div className="tweet-actions">
            <PropsAnimeHome imageHover="messageImage" classColorHover="tweet-action message" funct={() => setCount((count) => count + 1)} image="src\Icons\Icons\Reply.svg" alt="apply" increment={count} />

            <PropsAnimeHome imageHover="partageImage" classColorHover="tweet-action partage" funct={() => setRebour((rebour) => rebour + 1)} image="src\Icons\Icons\Retweet.svg" alt="retweet" increment={rebour} />

            <PropsAnimeHome imageHover="likeImage" classColorHover="tweet-action like" funct={() => setCoeur((coeur) => coeur + 1)} image="src\Icons\Icons\React.svg" alt="react" increment={coeur} />
            <PropsAnimeHome imageHover="telechargerImage" classColorHover="tweet-action telecharger" image="src\Icons\Icons\Share.svg" alt="share" />
          </div>
        </div>
      </section>
    </section>
  )
}


export default TweetsHome
