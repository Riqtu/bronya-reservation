import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { floor } from './../../constants'
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
    #473b7b 0%,
    #3584a7 51%,
    #30d2be 120%
  );
  overflow-x: hidden;
  background-size: 200% 100%;
  animation: 15s background-animation ease infinite;
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
  /* min-height: fit-content; */
  color: white;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;
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
`
export const BackFrameWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0;
`
export const BackFrame = styled.div`
  position: absolute;
  width: calc(600px * 1.4);
  height: calc(432px * 1.4);
  left: 5%;
  top: ${(props) => (props.bottom ? '76%' : '-40%')};
  opacity: 0.3;
  animation: ${flow} 9s infinite ease-in-out;

  @media screen and (max-width: 500px) {
    left: calc(50% - ((600px / 1.5) / 2));
    width: calc(600px / 1.5);
    height: calc(432px / 1.5);
    text-align: center;
  }
`

export const BackFloor = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  left: 15%;
  background-color: ${floor};
  background-image: url('${(props) => props.wall}');
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) perspective(500px);

`
