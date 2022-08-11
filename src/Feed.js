import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
        message="WOW this dummy works"
        timestamp="This is a dummy timestamp"
        username="sssssangha"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
        message="WOW this dummy works"
        timestamp="This is a dummy timestamp"
        username="sssssangha"
      />
    </div>
  );
}

export default Feed;
