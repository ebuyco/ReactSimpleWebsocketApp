import React, { useState }  from 'react';
import Cards from './styles/Cards';


const MainComponent = () => {
      const [toggleVisible, setToggleHandler] = useState(false);
      const [addClass, removeClass] = useState('');

      const setClickHandler = () => {
              setToggleHandler(!toggleVisible);
              removeClass(addClass === '' ? 'active' : '');
      }

      const [menuVisible, setMenuHandler] = useState(false);
      const [classMenu, removeMenu] = useState('');


      const menuHandler = () => {
            setMenuHandler(!menuVisible);
            removeMenu(classMenu === '' ? 'open' : '' )
      }

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
                                 UserName
                              </h5>
                      </div>

                      <div className="card__chat__wrapper">
                              <div className={`chat__navigation__toggle ${classMenu}`}>
                                <div
                                className="menu__toggle"
                                onClick={menuHandler}
                                >
                                    <img
                                    className="nav__icon"
                                    alt="icon__nav"/>
                                </div>
                                 <div
                                 className="navigation__toggle__content"
                                 >
                                      <h4>Test1</h4>
                                 </div>
                              </div>
                              <div className="chat__main__content">
                                        <div className="chat__main__content__area">
                                                <h4>Test1</h4>
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
