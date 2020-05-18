import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { green, darkGreen, red } from './../../constants'

import edit from './../../assets/edit.svg'
import deleteImg from './../../assets/delete.svg'
import exitImg from './../../assets/exit.svg'

const start = css`
  background-color: ${green};
  border: none;
  color: white;
  width: 100px;
  /* margin-bottom: 3rem; */
  padding: 1rem;
  border-radius: 10px;
  min-width: fit-content;
  transition: 0.3s;
  font-size: 0.9rem;
  margin-left: 30px;
  z-index: 2;
  position: relative;
  &:hover {
    background-color: ${darkGreen};
  }
`

const upload = css`
  margin-bottom: 20px;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${darkGreen};
  }
`

const submit = css`
  margin-top: 10px;
  position: relative;
  text-align: center;
  height: 50px;
  width: 60%;
  margin-left: 20%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${darkGreen};
  }
`
const form = css`
  background-color: ${green};
  border: none;
  color: white;
  margin: 20px 20%;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  transition: 0.14s;
  font-size: 12pt;
`
const exit = css`
  background-color: ${red};
  background-image: url(${exitImg});
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-top: -5px;
  border-radius: 10px;
  transition: 0.14s;
  font-size: 12pt;
  width: 30px;
  height: 30px;
`
const deleteAdmin = css`
  background-color: ${red};
  background-image: url(${deleteImg});
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-top: -5px;
  border-radius: 8px;
  transition: 0.14s;
  font-size: 8pt;
  margin: 3px;
  height: 21px;
  width: 28px;
`
const constructorAdmin = css`
  background-color: ${green};
  background-image: url(${edit});
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-top: -5px;
  border-radius: 8px;
  transition: 0.14s;
  font-size: 8pt;
  margin: 3px;
  height: 21px;
  width: 28px;
`

const allPlaces = css`
  /* margin-bottom: 20px; */
  position: relative;
  padding: 6px;
  border-radius: 5px;
  background-color: ${green};
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 8pt;
  cursor: pointer;
  &:hover {
    background-color: ${darkGreen};
  }
`
const restoratorAdd = css`
  position: relative;
  text-align: center;
  height: 40px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${green};
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${darkGreen};
  }
`
const restoratorDelete = css`
  position: relative;
  text-align: center;
  height: 40px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${red};
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${red + 'DD'};
  }
`

const defaultState = css``

const stateForAll = css`
  font-family: 'Montserrat';
  cursor: pointer;
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
  &:disabled {
    cursor: default;
    opacity: 0.4;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  }
`

export const ButtonWrapper = styled.button((props) => {
  switch (props.state) {
    case 'start':
      return start
    case 'upload':
      return upload
    case 'submit':
      return submit
    case 'allPlaces':
      return allPlaces
    case 'restoratorAdd':
      return restoratorAdd
    case 'restoratorDelete':
      return restoratorDelete
    case 'form':
      return form
    case 'exit':
      return exit
    case 'deleteAdmin':
      return deleteAdmin
    case 'constructorAdmin':
      return constructorAdmin
    default:
      return defaultState
  }
}, stateForAll)
