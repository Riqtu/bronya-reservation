import styled from '@emotion/styled'
import { wall, green, darkGreen, blue } from './../../constants'

export const TimeCardWrapper = styled.div`
  position: relative;
  width: 240px;
  min-height: 100px;
  overflow-y: auto;
  background-color: white;
  z-index: 10;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  transition: 0.3s;
  padding: 10px;
  float: left;
  margin: 30px;
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
  background-color: ${(props) => (props.empty ? green : blue)};
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.empty ? darkGreen : blue + 'DD')};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => (props.empty ? darkGreen : blue + 'DD')};
  }
  &:disabled {
    background-color: ${wall};
  }
  animation: 0.7s start ease forwards;
  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
