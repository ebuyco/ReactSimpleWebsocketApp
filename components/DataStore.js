import React, { createContext, useReducer } from 'react';
import io from 'socket.io-client';

export const CTX = createContext();

const initState = {
        general: [
            {from: 'tata', msg: 'hello'},
            {from: 'tata1', msg: 'hello2'},
            {from: 'tata2', msg: 'hello3'},
        ],
        topic2: [
          {from: 'tata', msg: 'hello'},
          {from: 'tata1', msg: 'hello2'},
          {from: 'tata2', msg: 'hello3'},
        ]
}

const reducer = (state, action) => {
      const [ from, msg, topic ] = action.payload;
      switch(action.type){
            case 'RECEIVE_MESSAGE':
              return {
                    ...state,
                    [topic]: [
                        ...state[topic],
                        {
                            from,
                            msg
                        }
                    ]
              }
            default:
               return state
      }
}



let socket;

function sendChatAction(value){
  socket.emit('chat message', value);
}



const DataStore = (props) => {
  const [allChats, dispatch] = useReducer(reducer, initState);

        if (!socket){
            socket = io(':8081');
            socket.on('chat message', function(msg){
               dispatch({
                 type: 'RECEIVE_MESSAGE',
                 payload: msg
               });
               console.log({msg});
            })
        }

        const user = 'ernie' + Math.random(100).toFixed(2);

      return(
          <CTX.Provider value={{allChats, sendChatAction, user}}>
              {props.children}
          </CTX.Provider>
      )
}

export default DataStore;
