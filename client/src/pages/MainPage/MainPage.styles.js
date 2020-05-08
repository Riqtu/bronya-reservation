import styled from '@emotion/styled'
import { flash } from './../../animations.styles'

export const MainPageWrapper = styled.section`
  background-image: linear-gradient(
    -50deg,
    #473b7b 0%,
    #3584a7 51%,
    #30d2be 120%
  );
  overflow-x: hidden;
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

export const Header = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin: 15px;
  }
`

export const Link = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  top: calc(50% - 1.3rem);
  float: left;
  transition: 0.4s;
  margin-right: 12px;
  &:hover {
    color: #83f0bc;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    top: 15px;
  }
`

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
  background-image: ;
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
