import React, { useState, useContext }  from 'react';
import Cards from './styles/Cards';
import { CTX } from './DataStore';

const MainComponent = () => {
      const [toggleVisible, setToggleHandler] = useState(false);
      const [addClass, removeClass] = useState('');

      const setClickHandler = () => {
              setToggleHandler(!toggleVisible);
              removeClass(addClass === '' ? 'active' : '');
      }

      const [menuVisible, setMenuHandler] = useState(false);
      const [classMenu, removeMenu] = useState('open');


      const menuHandler = () => {
            setMenuHandler(!menuVisible);
            removeMenu(classMenu === '' ? 'open' : '' )
      }

      const {allChats, sendChatAction, user} =  useContext(CTX);
      console.log({allChats});

      const topics = Object.keys(allChats);

      const [activeTopic, changeActiveTopic ] = useState(topics[0]);
      const [textValue, changeTextValue] = useState('');

  return(
        <>
          <Cards>
              <div className={`card__component ${addClass}`}>
                      <img src="../static/assets/av1.png" className="avatar__image" alt="avatar"/>
                      <div className="header__profile">
                              <h4 className="card__text__chat">
                                   SimpleReact Socket.io
                              </h4>
                              <h5 className="card__text__chat__receive">
                                 {activeTopic}
                              </h5>
                      </div>

                      <div className="card__chat__wrapper">
                              <div className="chat__navigation__toggle">
                                    <div
                                      className="menu__toggle"
                                      onClick={menuHandler}
                                      >
                                          <img
                                          className={`nav__icon ${classMenu}`}
                                          src="../static/assets/toggle__closed.png"
                                            alt="icon__nav"/>
                                      </div>
                                 <div
                                 className={`navigation__toggle__content ${classMenu}`}
                                 >
                                      <ul>
                                            {
                                                topics.map(topic => (
                                                    <li 
                                                    key={topic}
                                                    onClick={(e) => changeActiveTopic(e.target.innerText)}
                                                    >
                                                          <h5>{topic}</h5>
                                                    </li>
                                                ))
                                            }
                                      </ul>
                                 </div>
                              </div>
                              <div className="chat__main__content">
                                        <div className="chat__main__content__area">
                                              {
                                                  allChats[activeTopic].map((chat, i) => (
                                                    <div
                                                    className="text__component"
                                                    key={i}
                                                    >
                                                      <label
                                                      className="chips"
                                                      >{chat.from}</label>
                                                        <h4 className="message_align">{chat.msg}</h4>
                                                    </div>
                                                ))
                                              }
                                        </div>
                                        <div className="text__chat__wrapper">
                                            <input type='text'
                                              className='form-input'
                                              placeholder='Chat Me'
                                              label="Chat Me"
                                              value={textValue}
                                              onChange={(e) => changeTextValue(e.target.value)}
                                              />
                                               <button
                                                  className='button-submit-me-form'
                                                  type='submit'
                                                  onClick={() => {
                                                    sendChatAction({
                                                      from: user,
                                                      msg: textValue,
                                                      topic: activeTopic
                                                    });
                                                    changeTextValue('');
                                                  }}
                                                  >Send</button>

                                        </div>
                              </div>
                      </div>
              </div>
              <div
              className="button__messenger"
                onClick={setClickHandler}
              >
                      <div
                      className="button__content"
                      >
                            <img className="icon__messenger"
                            alt="messenger__icon"
                            src="../static/assets/telegram.png"
                            />
                      </div>
              </div>
           </Cards>
        </>
  )
}



export default MainComponent;
