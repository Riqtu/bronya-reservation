import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { green, darkGreen } from './../../constants'
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

export const ButtonWrapper = styled.button(props => {
  switch (props.state) {
    case 'start':
      return start
    default:
      return defaultState
  }
}, stateForAll)
