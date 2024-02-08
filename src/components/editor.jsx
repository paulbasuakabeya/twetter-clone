
import { useNavigate } from "react-router-dom";
function Editor() {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate("/profile");
  }
  return (
    <section className="tweet-editor">
      <img className="avatar" src="src\images\profile-photo.png" alt="profile-photo" />
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="What's happening" type="text" />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <button><img src="src\Icons\Icons\Media.svg" alt="media" /></button>
            <button><img src="src\Icons\Icons\Gif.svg" alt="gif" /></button>
            <button><img src="src\Icons\Icons\Poll.svg" alt="poll" /></button>
            <button><img src="src\Icons\Icons\Emoji.svg" alt="Emoji" /></button>
            <button><img src="src\Icons\Icons\Schedule.svg" alt="schedule" /></button>
          </div>
          <button className="button">Tweet</button>
        </div>
      </div>
    </section>
  )

}
export default Editor;