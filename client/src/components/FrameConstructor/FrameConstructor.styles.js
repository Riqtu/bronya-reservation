import styled from '@emotion/styled'
import { wall, floor } from './../../constants'

export const FrameConstructorWrapper = styled.div`
  position: absolute;
  width: calc(600px * 1.4);
  height: calc(432px * 1.4);
  left: 30px;
  top: calc(
    50% - ((432px * 1.4) / 2)
  ); /* transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg); */
  @media screen and (max-width: 500px) {
    left: calc(50% - ((600px / 1.5) / 2));
    width: calc(600px / 1.5);
    height: calc(432px / 1.5);
    text-align: center;
  }
`

export const Floor = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  left: 15%;
  background-color: ${floor};
  background-image: url('${props => props.wall}');
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) perspective(500px);
`
export const Wall = styled.div`
  position: absolute;
  width: 40%;
  height: 15%;
  left: 20%;
  background-color: ${wall};
  display: grid;
  justify-content: center;
  align-content: center;
  color: black;
  text-transform: uppercase;
`

export const Table = styled.img`
  width: 10%;
  position: absolute;
  left: ${props => props.x};
  top: ${props => props.y};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    top: calc(${props => props.y} - 10px);
    transform: scale(1.1);
  }
`
