import Squid from "./squid";
import RightSideProps from "./right-sideProps"
function RightsiderPg() {
  return (
    < >
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
        <RightSideProps imageRight="src\Icons\Tweet-Profile-Phot- icons.svg" titleAthor="The New York Times" titleTail="@nytimes" buttonFollow />
        <br />

        <RightSideProps imageRight="src/Icons/Icons/Profile-Photo.png" titleAthor="CNN" titleTail="@CNN" />

        <br />
        <RightSideProps imageRight="src\Icons\Icons\image 1.png" titleAthor="Twitter" titleTail="@Twitter" />


        <h3 className="show-more"> Show more</h3>
      </section>
      <div>
        <p className="tweet-title-details">Term of Service Privacy Policy Cookie Policy</p>
        <p className="tweet-title-details">Imprint Ads info More.. @2021 Twitter.Inc.</p>
      </div>
    </>
  )
}
export default RightsiderPg;