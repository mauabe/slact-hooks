import React from 'react';
import { useAppContext } from './hooks';

function MessageBoard() {
  const {state: { messages }} = useAppContext();
  return (
    <div>
      {
        messages.map(messageItem => {
          const { id, text, timestamp } = messageItem;
          return (
            <div key={id}>
              <h6>{new Date(timestamp).toLocaleString()}</h6>
              <p>{text}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default MessageBoard;