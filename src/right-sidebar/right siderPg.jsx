import Squid from "./squid";
import RightSideProps from "./right-sideProps"
function RightsiderPg() {
  return (
    
    <div className=" text-center gap-y-1.5 ">
      
      <section className="bg-gray-700 mx-8 h-8 px-8 rounded-lg mt-2.5">
        <div className="flex justify-start items-start mx-8 gap-2.5" >
          <img className="" src="src/Icons/Icons/Search.svg" alt="" />
          <input className="bg-gray-700 gray-700 resize-none border-none outline-none" placeholder="search tweeter" type="text" />
        </div>
      </section>
      <br />
      <section className="bg-gray-700 mx-8 px-8 rounded-lg w-5/6">
        <div className="flex items-center justify-between">
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
      <section className="bg-gray-700 mx-8 px-8 rounded-lg w-5/6">
        <h3>Who to follow</h3>
        <RightSideProps imageRight="src\Icons\Tweet-Profile-Phot- icons.svg" titleAthor="New" titleTail="@nytimes" buttonFollow />
        <br />

        <RightSideProps imageRight="src/Icons/Icons/Profile-Photo.png" titleAthor="CNN" titleTail="@CNN" />

        <br />
        <RightSideProps imageRight="src\Icons\Icons\image 1.png" titleAthor="Twitter" titleTail="@Twitter" />


        <h3 className="show-more"> Show more</h3>
      </section>
      <div>
        <p className="text-gray-500">Term of Service Privacy Policy Cookie Policy</p>
        <p className="text-gray-500">Imprint Ads info More.. @2021 Twitter.Inc.</p>
      </div>
      </div>
    
  )
}
export default RightsiderPg;