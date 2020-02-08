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
            margin-top: -1.55555rem;
      }
      .chat__navigation__toggle{
              /* flex: 1 1 400px; */

                  flex: 1 1 200px;
                  text-align: center;
                  flex-wrap: wrap;


      }
      .navigation__toggle__content{
            display: none;
            &.open{
                height: 100vh;
                position: relative; 
                display: block;
                padding: 2rem;
                text-align: left;
                font-family: 'Fira-Mono-Bold';
                color: #ffffff;
                background-color:#673AB7 ;
                border-right: 1px solid #000000;
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            }
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
         width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        top: 90vh;
        left: 40vw;
      }
      .button__content{
        color: #FFF;
        background: linear-gradient(-150deg, #00b89e9c 0%, #0152b5 97%), url(../static/assets/banner.png) repeat center;
        border-radius: 50%;
        background-size: cover;
        display: block;
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
          clip-path: circle(50% at 50% 50%);
       }

       .menu__toggle{
              width: 100%;
              height: auto;
              position: relative;
              top: 0;
              left: 0;
              cursor: pointer;
              .nav__icon{
                  background: url(../static/assets/toggle__open.png) center center;
                  background-size: cover;
                  width: 100%;
                  max-width: 2rem;
                  position: absolute;
                  left: 130px;
                  top: 40px;
                &.open{
                  left: 200px;
                  background: url(../static/assets/toggle__closed.png) center center;
                }
              }


            }

            .text__component{
                 padding: 2rem; 
                 color: #fff;
                 display: block;
                 justify-content: flex-start;
                 align-items: center;
                 background-color: #0A51A8;
                 clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
            }
            .chips{
              text-align: left;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start; 
              margin-left: 14px;
            }
            .message_align{
              text-align: right;
              justify-content: flex-end;
              align-items: flex-end; 
              margin-right: 14px;
            }
            .text__chat__wrapper{
               margin: 0 auto;
               display: flex;
               width: 100%;
               justify-content: center;
               align-items: center;
            }

            .form-input{
              font-size: 18px;
              background: rgba(255, 255, 255, 0);
              color: #000;
              outline: none;
              padding: 1rem;
              border: none;
              border-bottom: 1px solid #000000;
              width: 100%;
              justify-content: center;
              align-items: center;
              max-width: 80%;
                &:active, &:focus, &:focus-within{
                  background: rgba(255, 255, 255, 0);
                  outline: none;
                  border-bottom: 1px solid #000000;
                }
            }
            .button-submit-me-form {
              font-family: inherit;
              font-size: 0.8em;
              padding: 1em;
              margin-top: 2vh;
              cursor: pointer;
              background-color: #43A047;
              color: #fff;
              border: 0.2em solid #ffffff;
              outline: none;
              font-weight: 600;
              &:hover{
                background-color: #00796B;
                border-color: 0.2em solid #fff ;
              }
            }
           
`;

export default Cards;
