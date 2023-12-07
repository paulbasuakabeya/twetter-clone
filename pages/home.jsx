import React from 'react';
import HeaderHome from '../components/home-header.jsx';
import EditeurHome from '../components/editor.jsx';
import TweetsHome from '../components/home-tweets.jsx';
import BodyHome from '../components/home-Body.jsx';
import CommitHome from '../components/home-commit.jsx';
import TweetCommitTwo from '../components/home-committwo.jsx';
import BodyTwoHome from '../components/home-bodytwo.jsx';


function Home() {
  return (
    <main className="timeline">
      <HeaderHome />
      <EditeurHome />
      <TweetsHome />
      <BodyHome />
      <CommitHome />
      <TweetCommitTwo />
      <BodyTwoHome />

    </main>
  );
}

export default Home;