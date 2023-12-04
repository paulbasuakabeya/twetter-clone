
function TweetCommit () {
return(
    <section className="tweet">
        <div className="tweet-avatar">
            <img src="src\Icons\Icons\Twitter.svg" alt="" />
        </div>
        <div className="tweet-content">
        <div className="tweet-title">
               <h4 className="tweet-title-author">Twitter</h4>
          <img src="src\Icons\Icons\Verified.svg" alt="verified" />
          <p className="tweet-title-details">@Twitter.Oct 29</p>
               </div> 
               <div className="tweet-text">
                <p>BIG NEWS lol jk still Twitter</p>
          </div>
          <div className="tweet-actions">
              <div className="tweet-action">
                    <img src="src\Icons\Icons\Reply.svg" alt="reply" /> 
                   <p>6.8K</p>
                 </div>
                 <div className="tweet-action">
                 <img src="src\Icons\Icons\Retweet.svg" alt="retweet" />
                 <p>36.6K</p>
           </div>
           <div className="tweet-action">
                     <img src="src\Icons\Icons\React.svg" alt="react" /> 
           <p>267.1K</p>
     </div>
           <div className="tweet-action">
           <img src="src\Icons\Icons\Share.svg" alt="share" />
           </div>
           </div>
        </div>
    </section>

)

}

export default TweetCommit