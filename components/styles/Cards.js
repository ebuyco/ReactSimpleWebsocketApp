import styled from 'styled-components';


const Cards = styled.div`
      width: 100%;
      height: auto;
      font-family: 'Josefin-Sans-Regular';
      .card__component{
          display: none;
          &.active{
                display: block;
                width: 100%;
                max-width: 80%;
                background-color: #FFFFFF;
                box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
                margin: 0 auto;
                margin-top: 10vh;
                border-radius: .25rem;
          }
      }
      .card__text__chat{
        font-family: 'Fira-Mono-Regular';
        text-align: center;
        color: ${props => props.theme.white};
        padding-top: 5rem;
      }
      .card__text__chat__receive{
          text-align: center;
          color: ${props => props.theme.white};
          padding-bottom: 5rem;
      }
      .card__chat__wrapper{
            display: flex;
            width: 100%;
            margin: 0 auto;
           margin-top: -2rem;
      }
      .chat__navigation__toggle{
              /* flex: 1 1 400px; */
              flex: 1 1 250px;
              text-align: center;
              flex-wrap: wrap;
              background-color:#673AB7 ;
              border-right: 1px solid #000000;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)
      }
      .navigation__toggle__content{
            padding: 2rem;
            text-align: left;
            font-family: 'Fira-Mono-Bold';
            color: #ffffff;
      }
      .chat__main__content{
              flex: 10 5 400px;
              text-align: center;
              flex-wrap: wrap;

      }
      .chat__main__content__area{
            padding: 2rem;
            text-align: right;
            font-family: 'Fira-Mono-Bold';
            color: #000000;
      }
      .button__messenger{
        position: fixed;
        display: flex;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        top: 80vh;
      }
      .button__content{
        color: #FFF;
        background: linear-gradient(-150deg, #00b89e9c 0%, #0152b5 97%), url(../static/assets/banner.png) repeat center;
        border-radius: 50%;
        background-size: cover;
        display: block;
        position: relative;
        width: 55px;
        height: 55px;
        line-height: 52px;
        font-size: 1.6rem;
        text-decoration: none;
        text-align: center;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        &:hover, &:active, &:focus,  &:focus-within, &:visited{
          background: linear-gradient(-150deg,#71e2d29c 0%,#0466de 97%);
        }
      }
      .icon__messenger{
           width: 100%;
          max-width: 2rem;
          height: auto;
          position: absolute;
          margin: 0 auto;
          top: 10px;
          right: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
       }

       .header__profile{
          background: linear-gradient(-150deg,#064e449c 20%,#00bcd4a6 97%),url(../static/assets/profile.jpg) center center;
          background-size: cover;
          width: 100%;
          height: auto;
          position: relative;
          top: 0;
       }
       .avatar__image{
          width: 100%;
          max-width: 7rem;
          height: auto;
          margin: 0 auto;
          position: absolute;
          top: 3rem;
          text-align: center;
          left: 45vw;
          z-index: 1;
       }

       .menu__toggle{
              width: 100%;
              height: auto;
              max-width: 2rem;
              position: absolute;
              left: 22rem;
              top: 20rem;
              background-size: cover;
                &.open{
                  background: url(../static/assets/toggle__open.png) center center;
                }
                &.close{
                  background: url(../static/assets/toggle__closed.png) center center;
                }
            }
`;

export default Cards;
