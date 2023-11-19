import React from 'react'
import Head from 'next/head'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - Legitimate Scholarly Crocodile</title>
          <meta
            property="og:title"
            content="Login - Legitimate Scholarly Crocodile"
          />
        </Head>
        <img alt="image" src="/bez%20nazwy-1500w.png" className="login-image" />
        <div className="login-container1">
          <img
            alt="image"
            src="/bez%20nazwy-1500w.png"
            className="login-image1"
          />
          <div className="login-container2">
            <span className="login-text">
              <span className="login-text01">
                Drugie i najświeższe wieści ze świata
              </span>
              <br></br>
            </span>
            <span className="login-text03">Dołącz do nas już dziś</span>
            <button type="button" className="login-button button">
              <img
                src="/google-icon-200h.png"
                alt="image"
                className="login-image2"
              />
              <span className="login-text04">Zarejestruj się przez Google</span>
            </button>
            <div className="login-container3">
              <div className="login-separator"></div>
              <span className="login-text05">lub</span>
              <div className="login-separator1"></div>
            </div>
            <button type="button" className="login-button1 button">
              <span className="login-text06">
                <span className="login-text07">Utwórz konto</span>
                <br></br>
              </span>
            </button>
            <span className="login-text09">Masz już konto?</span>
            <button type="button" className="login-button2 button">
              Zaloguj się  
            </button>
          </div>
        </div>
        <footer className="login-footer">
          <div className="login-container4">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="login-image3"
            />
            <nav className="login-nav">
              <span className="login-text10">O firmie</span>
              <span className="login-text11">Polityka prywatności</span>
              <span className="login-text12">
                Polityka dotycząca plików cookie
              </span>
              <span className="login-text13">
                <span className="login-text14">Informacje o reklamach</span>
                <br></br>
              </span>
            </nav>
          </div>
          <div className="login-separator2"></div>
          <span className="login-text16">
            © 2021 teleportHQ, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .login-image {
            flex: 1;
            width: 100%;
            height: 100%;
            display: none;
            align-self: center;
            object-fit: cover;
          }
          .login-container1 {
            width: 100%;
            height: 664px;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .login-image1 {
            flex: 1;
            width: 100%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
          .login-container2 {
            flex: 1;
            width: 200px;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .login-text {
            color: rgb(255, 255, 255);
            font-size: 50px;
            align-self: flex-start;
            font-family: 'Arial Black';
            text-decoration: inherit;
          }
          .login-text03 {
            color: rgb(255, 255, 255);
            font-size: 25px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Arial Black';
          }
          .login-button {
            width: 270px;
            height: 44px;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            border-radius: 15px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .login-image2 {
            width: 20px;
            height: 20px;
            align-self: center;
            object-fit: cover;
          }
          .login-text04 {
            font-size: 16px;
            align-self: center;
            font-family: 'Lato';
            font-weight: 700;
            line-height: 1.15;
            margin-left: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .login-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: 5px;
            align-items: flex-start;
            margin-bottom: 5px;
            flex-direction: row;
          }
          .login-separator {
            flex: 0 0 auto;
            width: 120px;
            height: 0px;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: 0px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .login-text05 {
            color: rgb(255, 255, 255);
            margin-top: 0px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 0px;
          }
          .login-separator1 {
            flex: 0 0 auto;
            width: 120px;
            height: 0px;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: 0px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .login-button1 {
            width: 270px;
            height: 44px;
            align-self: flex-start;
            margin-top: 0px;
            border-radius: 15px;
            background-color: #0099ff;
          }
          .login-text06 {
            color: rgb(255, 255, 255);
            font-family: 'Arial Black';
          }
          .login-text07 {
            font-family: 'Lato';
            font-weight: 700;
          }
          .login-text09 {
            color: rgb(255, 255, 255);
            align-self: flex-start;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Lato';
            font-weight: 700;
          }
          .login-button2 {
            color: rgb(0, 153, 255);
            width: 270px;
            height: 44px;
            align-self: flex-start;
            margin-top: 25px;
            font-family: 'Lato';
            font-weight: 700;
            border-color: #ffffff;
            border-radius: 15px;
            background-color: transparent;
          }
          .login-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .login-container4 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .login-image3 {
            height: 2rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .login-nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .login-text10 {
            color: rgb(225, 225, 225);
            margin-left: 0px;
          }
          .login-text11 {
            color: rgb(225, 225, 225);
            margin-left: var(--dl-space-space-unit);
          }
          .login-text12 {
            color: rgb(225, 225, 225);
            margin-left: var(--dl-space-space-unit);
          }
          .login-text13 {
            color: rgb(225, 225, 225);
            margin-left: var(--dl-space-space-unit);
          }
          .login-separator2 {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .login-text16 {
            color: #e1e1e1;
          }
          @media (max-width: 1600px) {
            .login-image {
              flex: 0;
              width: 100%;
            }
            .login-image1 {
              flex: 0;
              width: 100%;
            }
            .login-text {
              color: rgb(255, 255, 255);
              font-size: 60px;
              font-family: Arial Black;
              text-decoration: inherit;
            }
            .login-text01 {
              color: rgb(255, 255, 255);
              font-size: 60px;
              font-family: Arial Black;
              text-decoration: inherit;
            }
            .login-button2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 1200px) {
            .login-text {
              color: rgb(255, 255, 255);
            }
            .login-text01 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 991px) {
            .login-image {
              width: 100px;
              height: 100px;
              display: flex;
              align-self: flex-start;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .login-image1 {
              width: auto;
              height: auto;
              display: none;
              align-self: center;
            }
            .login-container2 {
              margin-left: var(--dl-space-space-twounits);
            }
            .login-text {
              color: rgb(255, 255, 255);
            }
            .login-text01 {
              color: #ffffff;
            }
          }
          @media (max-width: 767px) {
            .login-text {
              color: rgb(255, 255, 255);
            }
            .login-text01 {
              color: #ffffff;
            }
            .login-container3 {
              flex: 0;
              height: 17px;
            }
            .login-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .login-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-text16 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .login-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-footer {
              padding: var(--dl-space-space-unit);
            }
            .login-text10 {
              color: rgb(225, 225, 225);
              font-size: 16px;
            }
            .login-text11 {
              color: rgb(225, 225, 225);
              font-size: 16px;
            }
            .login-text12 {
              color: rgb(225, 225, 225);
              font-size: 16px;
            }
            .login-text13 {
              color: rgb(225, 225, 225);
            }
            .login-text14 {
              font-size: 16px;
            }
            .login-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .login-text16 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Login
