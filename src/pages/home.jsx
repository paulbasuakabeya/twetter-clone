import React from 'react';
import HeaderHome from '../components/header.jsx';
import Happening from '../components/editor.jsx';
import TweetsMain from '../components/tweets.jsx';
import TheNewYorkTimes from '../components/tweetBody.jsx';
import TweetCommit from '../components/tweetcommit.jsx';
import TweetCommitTwo from '../components/tweetcommittwo.jsx';
// import TweetBodyTwo from '../components/tweetbodytwo.jsx'
import TweetFooter from '../components/tweetfooter.jsx';

function Home() {
  return (
    <main className="timeline">
      <HeaderHome />
      <Happening />
      <TweetsMain />
      <TheNewYorkTimes />
      <TweetCommit />
      <TweetCommitTwo />
      {/* <TweetBodyTwo /> */}
      <TweetFooter/>
    </main>
  );
}

export default Home;