import styled from '@emotion/styled'
import { flash } from './../../animations.styles'

import allBack from './../../assets/main-back-partners.svg'
import shield from './../../assets/shield.svg'

export const MainPageWrapper = styled.section`
  background-image: linear-gradient(
    -50deg,
    #473b7b 0%,
    #3584a7 51%,
    #30d2be 120%
  );
  overflow-x: hidden;
  overflow-y: hidden;

  background-size: 200% 100%;
  animation: 15s background-animation ease infinite,
    0.5s ${flash} ease-in-out forwards;
  @keyframes background-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  width: 100%;
  /* height: 150vh; */
  /* min-height: fit-content; */
  color: white;
`
export const MainSection = styled.section``

export const Text = styled.p`
  position: relative;
  width: 40%;
  margin-top: 10%;
  margin-left: 30px;
  font-size: 1.4rem;
  z-index: 2;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    width: 80%;
    margin-top: 5%;
    margin-left: 15px;
  }
`

export const BackFrames = styled.img`
  position: relative;
  width: 100%;
  min-width: 700px;
  left: 0;
  margin-top: -32%;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin-top: -50%;
  }
`

export const All = styled.section`
  position: relative;
  margin-top: -5px;
  padding-top: 60px;
  height: fit-content;
  width: 100%;
  min-height: 300px;
  background-color: #0f4c81;

  width: 100%;
  background-image: url(${allBack});
  background-size: 100%;
  background-position-y: 5%;
  background-repeat: no-repeat;
  padding-bottom: calc(200px);
  @media screen and (max-width: 500px) {
    background-size: 150%;
  }
`

export const WhatBlock = styled.section`
  position: relative;
  /* margin: 50px; */
  margin-top: 200px;
  left: calc(50% - 300px);
  height: fit-content;
  width: 600px;
  min-height: 200px;
  @media screen and (max-width: 500px) {
    width: 100%;
    left: 0;
    margin-bottom: 40px;
    margin-top: 100px;
  }
`
export const WhatBlockH1 = styled.h1`
  width: 60%;
  font-size: 17pt;
  text-transform: uppercase;
  color: white;
  float: left;
  padding-top: 0;
  margin: 0;
  @media screen and (max-width: 500px) {
    float: none;
    width: 90%;
    margin-left: 5%;
  }
`
export const WhatBlockP = styled.p`
  width: 60%;
  font-size: 12pt;
  color: white;
  float: left;
  padding-top: 10px;
  margin-top: 0;
  @media screen and (max-width: 500px) {
    float: none;
    width: 90%;
    margin-left: 5%;
  }
`

export const WhatBlockImage = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  left: auto;
  right: 0;
  background-image: url(${shield});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 500px) {
    left: 30%;
    right: auto;
  }
`

export const Partners = styled.h1`
  position: relative;
  margin-top: 0;
  padding: 0px 30px;
  margin-top: 0;
  padding-bottom: 0;
  font-size: 35pt;
  text-transform: uppercase;
  text-align: center;
  padding: 0;
  margin-left: 0;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
    padding: 15px;
  }
`
export const FooterLayer = styled.img`
  position: relative;
  width: 100%;
  min-width: 700px;
  left: 0;
  background-color: transparent;
  margin-top: -43%;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin-top: -50%;
  }
`
export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #0b192a;
  padding: 30px;
  @media screen and (max-width: 500px) {
    height: 120px;
  }
`

export const FooterImg = styled.img`
  width: 150px;
  opacity: 0.7;
  float: left;
  margin-right: 20px;
  margin-top: 5px;
  @media screen and (max-width: 500px) {
    float: none;
    margin-left: calc(50% - 100px);
  }
`
export const FooterText = styled.p`
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    width: 85%;
    font-size: 10pt;
    text-align: center;
  }
`
