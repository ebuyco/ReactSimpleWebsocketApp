import React from 'react';
import CardStyle from './styles/CardStyles';


const MainComponent = () => {


  return(
        <CardStyle>
              <div className="card__component">
                      <h5 className="card__text__chat">
                            This is component text
                      </h5>
                      <h5 className="card__text__chat__receive">
                          This is component text 2
                      </h5>
              </div>
        </CardStyle>
  )
}



export default MainComponent;
