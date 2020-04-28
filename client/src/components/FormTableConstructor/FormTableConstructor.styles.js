import styled from '@emotion/styled'
import { floor, green } from '../../constants'

export const FormConstructorWrapper = styled.form`
  position: absolute;
  width: 500px;
  border-radius: 10px;
  background-color: white;
  left: auto;
  right: 30px;
  top: 10%;
`
export const Input = styled.input`
  margin: 10px 20px;
  width: 38px;
  height: 25px;
  padding-left: -4px;
  text-align: center;
  border-radius: 5px;
  background-color: ${floor};
  border: none;
`
export const LargeInput = styled.div`
  text-align: center;
  margin-top: 10px;
  input {
    margin: 10px 20px;
    width: ${(props) => (props.text ? '220px' : '100px')};
    height: ${(props) => (props.text ? '60px' : '25px')};
    padding-left: -4px;
    text-align: center;
    border-radius: 5px;
    background-color: ${floor};
    border: none;
  }
`
export const ThisInputs = styled.div`
  position: relative;
  width: calc(100%- 30px);
  background-color: ${green};
  padding: 5px 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
`
export const PrevInputs = styled.div`
  position: relative;
  width: calc(100%- 30px);
  background-color: white;
  padding: 5px 15px;
  text-align: center;
  border-radius: 10px;
`
export const FileInput = styled.div`
  width: 100%;
  height: 90px;
  text-align: center;
  padding-bottom: 0;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  label {
    margin: 20px;
    position: relative;
    top: 30px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    background-color: ${floor};
    border: none;
    transition: 0.3s;
    cursor: pointer;
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
  }
`

export const Upload = styled.div`
  width: 100%;
  text-align: center;
`
