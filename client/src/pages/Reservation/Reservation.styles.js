import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { css } from '@emotion/core'

import { floor } from './../../constants'
import { flash } from './../../animations.styles'

const color1 = (props) =>
  props.color && props.color.color1 ? props.color.color1 : '#473b7b'
const color2 = (props) => (props.color ? props.color.color2 : '#3584a7')
const color3 = (props) => (props.color ? props.color.color3 : '#30d2be')

const flow = keyframes`
  0%, 100%{
    transform:  translateY(0%)
  }
  50%{
    transform:  translateY(4%)
  }
`
export const ReservationWrapper = styled.div`
  background-image: linear-gradient(
    -50deg,
    ${color1} 0%,
    ${color2} 51%,
    ${color3} 120%
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
  height: 100vh;
  color: white;
  @media screen and (min-width: 700px) {
    min-height: 780px;
  }
  @media screen and (min-width: 500px) {
    min-height: 670px;
  }
`
export const Logo = styled.img`
  margin: 30px;
  float: left;
  @media screen and (max-width: 500px) {
    width: 50%;
    margin: 15px;
    float: none;
  }
`
export const Header = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
`
export const CallBar = styled.div`
  position: absolute;
  top: 140px;
  left: 30px;
  text-transform: uppercase;
  font-size: 20pt;
  @media screen and (max-width: 500px) {
    left: 0;
    top: 220px;
    text-align: center;
    width: 100%;
  }
`
export const BackFrameWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0;
  @media screen and (min-width: 700px) {
    min-height: 780px;
  }
`
export const BackFrame = styled.div`
  position: absolute;
  width: calc(600px * 1.4);
  height: calc(432px * 1.4);
  left: 5%;
  top: ${(props) => (props.bottom ? '76%' : '-40%')};
  opacity: 0.3;
  animation: ${flow} 9s infinite ease-in-out;

  @media screen and (min-width: 1700px) {
    width: calc(600px * 1.66);
    height: calc(432px * 1.66);
  }
  @media screen and (max-width: 1385px) {
    width: calc(600px * 1.2);
    height: calc(432px * 1.2);
  }
  @media screen and (max-width: 1245px) {
    width: calc(600px * 0.9);
    height: calc(432px * 0.9);
  }
  @media screen and (max-width: 920px) {
    left: calc(50% - ((600px) / 2));
    width: calc(600px);
    height: calc(432px);
    text-align: center;
    top: ${(props) => (props.bottom ? '76%' : '-10%')};
  }
  @media screen and (max-width: 500px) {
    left: calc(50% - ((600px / 1.5) / 2));
    width: calc(600px / 1.5);
    height: calc(432px / 1.5);
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    top: ${(props) => (props.bottom ? '76%' : '-20%')};
  }
`

export const BackFloor = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  left: 15%;
  background-color: ${floor};
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) perspective(500px);
`

const inputState = css`
  position: relative;
  width: 200px;
  height: 50px;
  background-color: white;
  border: none;
  padding-right: 10px;
  margin: 0;
  margin-top: calc(50% - 65px);
  transition: 0.3s;
  border-radius: 7px;
  text-align: center;
  font-size: 12pt;
  font-family: 'Montserrat', sans-serif;
  /* float: left; */
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &:focus {
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    margin-left: calc(50vw - 110px);
    margin-top: 60px;
    top: -15px;
  }
`

export const Input = styled.input((props) => {
  return inputState
})

export const AdminButtons = styled.div`
  position: absolute;
  left: 28px;
  top: 113px;
  z-index: 3;
  @media screen and (max-width: 500px) {
    position: absolute;
    left: 42%;
    top: 107px;
    z-index: 3;
  }
`
