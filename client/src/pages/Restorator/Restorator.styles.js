import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const RestoratorWrapper = styled.div`
  background-image: linear-gradient(
    -50deg,
    #473b7b 0%,
    #3584a7 51%,
    #30d2be 120%
  );
  overflow-x: hidden;
  background-size: 200% 100%;
  width: 100%;
  min-height: 100vh;
  color: white;
`
export const Tables = styled.div`
  position: relative;
  width: 80%;
  /* left: 0; */
  margin-left: 0%;
  margin-top: 1%;
  z-index: 0;
`
export const Input = styled.input`
  position: relative;
  text-align: center;
  height: 40px;
  width: 100%;
  padding: 0;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: white;
  border: none;
  transition: 0.3s;
  font-size: 0.9rem;
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
`
export const Info = styled.div`
  position: absolute;
  width: 190px;
  min-height: 60px;
  background-color: white;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: 0.3s, top 0s, left 0s;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  left: ${(props) => props.x + 'px'};
  top: ${(props) => props.y - 70 + 'px'};
  z-index: 100;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
`

export const PlaceLogo = styled.div`
  position: absolute;
  width: 250px;
  height: 100px;
  background-color: white;
  background-image: url('${(props) => props.logo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  left: 25%;
  top: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`
export const Logo = styled.img`
  position: absolute;
  margin: 30px;
  float: left;
  z-index: 100;
`
export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 140px;
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
  z-index: 1000;
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
    margin-left: 15px;
    top: -15px;
  }
`
export const InputHeader = styled.input((props) => {
  return inputState
})
