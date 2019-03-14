import React, { useReducer, useState } from 'react';
import reducer, {initialState } from '../state/reducer';


function App(){
  const [state, dispatch ] = useReducer(reducer, initialState);



  console.log('state', state);
    return (
      <div className="App">
        <h2>slactHooks</h2>
      </div>
    );

}

export default App;
