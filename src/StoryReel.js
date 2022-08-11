import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return <div className="storyReel">
    <Story image="https://images.unsplash.com/photo-1659132394880-d55f55b3a794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" profileSrc="https://avatars.githubusercontent.com/u/24712956?v=4" title="Sonny Sangha" />
    <Story image="https://images.unsplash.com/photo-1658509756778-cf30246a13a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" profileSrc="https://avatars.githubusercontent.com/u/8461930?v=4" title="Rafeh Qazi" />
    <Story image="https://images.unsplash.com/photo-1658040884309-11942866e2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" profileSrc={require('./resources/images/frankie.jpg')} title="Frankie" />
    <Story image="https://images.unsplash.com/photo-1657779074835-86103ce63841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" profileSrc="https://avatars.githubusercontent.com/u/15029138?v=4" title="Aaron Bernath" />
    <Story image="https://images.unsplash.com/photo-1648383597079-5d1aedcbbc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" profileSrc="https://avatars.githubusercontent.com/u/6589966?v=4" title="Naz" />
  </div>;
}

export default StoryReel;
