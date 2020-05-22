import styled from '@emotion/styled'
import { wall, floor, green, darkGreen } from './../../constants'

export const FrameWrapper = styled.div`
  position: absolute;
  width: calc(600px * 1.4);
  height: calc(432px * 1.4);
  left: 5%;
  top: 20%;
  /* transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg); */
  @media screen and (max-width: 500px) {
    left: calc(50% - ((600px / 1.6) / 2));
    width: calc(600px / 1.6);
    height: calc(432px / 1.6);
    text-align: center;
    top: 45%;
    overflow: hidden;
  }
  z-index: 0;
`

export const Floor = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  left: 15%;
  background-color: ${floor};
  background-image: url('${(props) => props.wall}');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);


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
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  transition: 0.3s;
  opacity: ${(props) => (props.dis ? '0.5' : '1')};
  cursor: pointer;
  &:hover {
    top: calc(${(props) => props.y} - 10px);
    transform: scale(1.1);
  }
`

export const TableTime = styled.div`
  position: absolute;
  width: 240px;
  /* height: 157px; */
  min-height: 100px;
  overflow-y: auto;
  background-color: white;
  left: calc(${(props) => props.x} + 40px);
  top: calc(
    ${(props) => props.y} -
      ${(props) => (props.active && props.i === props.index ? '90px' : '60px')}
  );
  z-index: 10;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  visibility: ${(props) =>
    props.active && props.i === props.index ? 'visible' : 'hidden'};
  border-radius: 20px;
  opacity: ${(props) => (props.active && props.i === props.index ? '1' : '0')};
  transition: 0.3s;
  padding: 10px;

  @media screen and (max-width: 500px) {
    width: 77%;
    left: 9%;
    top: 12px;
  }
`
export const InfoBar = styled.div`
  position: relative;
  width: calc(100% - 10px);
  /* background-color: blue; */
  height: 20px;
  margin: 5px;
  font-size: 12pt;
  text-align: left;
  color: black;
`
export const Seats = styled.div`
  position: absolute;
  left: auto;
  right: 0;
  top: 0;
`

export const Line = styled.div`
  position: relative;
  width: calc(100% - 10px);
  background-color: black;
  height: 1px;
  margin: 5px;
  opacity: 0.2;
`

export const Time = styled.button`
  position: relative;
  float: left;
  background-color: ${green};
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${darkGreen};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 5px rgba(0, 0, 0, 0.23);
  }
  &:focus {
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 5px rgba(0, 0, 0, 0.23);

    background-color: ${darkGreen};
  }
  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 5px rgba(0, 0, 0, 0.23);

    background-color: ${wall};
  }
  animation: ${(props) => (props.active ? '0.7s start ease forwards' : '')};
  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 500px) {
    width: 47px;
    height: 27px;
  }
`

export const Loader = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  background-image: url('${(props) => props.wall}');
  height: 200px; 
  background-position: center;
  background-repeat: no-repeat;

`
