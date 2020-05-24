import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { green } from './../../constants'

export const FormReservationWrapper = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: 50px;
  bottom: 50px;
  width: 300px;
  min-height: 250px;
  min-width: 300px;
  padding: 45px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  @media screen and (min-width: 1700px) {
    right: 10%;
    bottom: 15%;
  }
  /* @media screen and (max-width: 1052px) {
    width: 200px;
    min-width: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
  } */
  @media screen and (min-width: 700px) {
    /* position: fixed; */
    top: 150px;
    bottom: auto;
  }
  @media screen and (min-width: 500px) and (min-width: 650px) {
    min-height: 530px;
  }
  @media screen and (max-width: 920px) {
    display: ${(props) => (props.mediaPhone ? 'block' : 'none')};
    z-index: 100;
    left: calc(50% - 195px);
    right: auto;
    margin: 0;
    top: 200px;
  }

  @media screen and (max-width: 500px) {
    display: ${(props) => (props.mediaPhone ? 'block' : 'none')};
    z-index: 100;
    left: 10%;
    right: 0;
    top: 40px;
    bottom: auto;
    width: 55%;
    min-width: 55%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  margin-bottom: 30px;
  background-image: url('${(props) => props.logo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: blue; */
  @media screen and (max-width: 500px) {
    width: 50%;
    left: 25%;
  }
`

export const InputLine = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    height: 25px;
  }
`

export const Label = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url('${(props) => props.back}');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: ${(props) => (props.small ? '20px' : '40px')};
  margin-left: ${(props) => (props.small ? '20px' : '0px')};

  float: left;
  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
    margin-right: ${(props) => (props.small ? '20px' : '20px')};
  }
`

const inputState = css`
  position: relative;
  width: calc(100% - 90px);
  height: 50px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  border-radius: 7px;
  text-align: center;
  font-size: 12pt;
  text-transform: uppercase;
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
    height: 25px;
    width: calc(100% - 45px);
  }
  @media screen and (max-width: 700px) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const notValid = css`
  background-color: #ffaab3;
  opacity: 0.5;
`
export const PhoneInput = styled.input((props) => {
  return props.isValidPhone ? inputState : [inputState, notValid]
})

export const NameInput = styled.input((props) => {
  return props.isValidName ? inputState : [inputState, notValid]
})

export const Input = styled.input((props) => {
  return inputState
})

export const SmallInput = styled.input`
  position: relative;
  width: 60px;
  height: 50px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  border-radius: 7px;
  text-align: center;
  font-size: 12pt;
  float: left;
  margin-left: ${(props) => (props.second ? '0px' : '40px')};
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
  /* @media screen and (max-width: 1052px) {
    height: 25px;
    width: 45px;
  } */

  @media screen and (max-width: 700px) {
    height: 25px;
    width: 47px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const Upload = styled.section`
  border-radius: 15px;

  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  background-color: ${green};
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
  overflow-x: hidden;
  background-size: 200% 200%;
  animation: 4s background-animation ease infinite;
  @keyframes background-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  transition: 0.4s;
  visibility: ${(props) => (props.isUpload ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isUpload ? '1' : '0')};
  padding: 25px;
`
export const UploadLogo = styled.section`
  position: relative;
  width: 100%;
  height: 40%;
  background-image: url('${(props) => props.back}');
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`
export const UploadText = styled.section`
  position: relative;
  width: 100%;
  height: 40%;
  h1 {
    font-size: 20pt;
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    @media screen and (max-width: 700px) {
      font-size: 15pt;
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 13pt;

    text-align: left;
    line-height: 1.5;
    text-transform: uppercase;
    @media screen and (max-width: 700px) {
      font-size: 10pt;
    }
  }
  h2 {
    font-size: 18pt;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    @media screen and (max-width: 700px) {
      font-size: 13pt;
    }
  }
  /* background-color: blue; */
`
