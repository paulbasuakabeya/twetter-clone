import FooterAccueil from "../components/footerAccueil"
function TweetAccueil() {
    return (
        <>
            <div>
                <img src="src\Icons\Icons\Twitter.svg" alt="avatar" />
            </div>
            <br />
            <div className="tweet-title">
                <img src="src\Icons\Icons\Home.svg" alt="" />
                <p>Home</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src\Icons\Icons\Group3.png" alt="" />
                <p>Explore</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src/Icons/Icons/Notifications-Fill.svg" alt="" />
                <p>Notifications</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src/Icons/Icons/Messages.svg" alt="" />
                <p>Messages</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src/Icons/Icons/Bookmarks-Fill.svg" alt="" />
                <p>Bookmarks</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src/Icons/Icons/Lists-Fill.svg" alt="" />
                <p> Lists</p>
            </div>
            <br />
            <div className="tweet-title">
                <img src="src/Icons/Icons/Profile-Fill.svg" alt="" />
                <p>Profile</p>
            </div>
            <br />

            <br />
            <button className="button-accueil">Tweet</button>
            <br />
            <FooterAccueil />
        </>
    )
}
export default TweetAccueil