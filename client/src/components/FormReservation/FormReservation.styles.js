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
`

export const InputLine = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
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
const notValid = css`
  background-color: #d84353;
  opacity: 0.5;
`
export const PhoneInput = styled.input((props) => {
  return props.isValidPhone ? inputState : [inputState, notValid]
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
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 13pt;

    text-align: left;
    line-height: 1.5;
    text-transform: uppercase;
  }
  h2 {
    font-size: 18pt;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
  }
  /* background-color: blue; */
`
