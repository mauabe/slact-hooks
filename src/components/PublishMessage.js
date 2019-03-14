import React,  {useState } from 'react';
import { newMessage } from '../state/actions';

function PublishMessage() {
  const [text, setText] = useState('');

  const updateText = event =>  {
    setText(event.target.value);
  }
  return (
    <div>
      <h3>Got somethign to say?</h3>
      <input />
      { ' ' }
      <button>Publish it!</button>
    </div>
  )
}

export default PublishMessage;