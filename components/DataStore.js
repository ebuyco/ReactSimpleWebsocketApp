import React, { createContext, useReducer } from 'react';

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


const DataStore = (props) => {
        
        const reducerHook = useReducer(reducer, initState);
      return(
          <CTX.Provider value={reducerHook}>
              {props.children}
          </CTX.Provider>
      )
}

export default DataStore;