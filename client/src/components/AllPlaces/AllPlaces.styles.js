import styled from '@emotion/styled'

export const AllPlacesWrapper = styled.div`
  /* position: relative; */
  margin-top: -20px;
  background-color: #0f4c81;
  width: 100%;
  z-index: 1000;
  a {
    color: black;
  }
  /* min-height: fit-content; */
`

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 90px;
  background-color: white;
  margin-top: 15px;
  margin-left: 30px;
  border-radius: 15px;
  padding: 20px;
  float: left;
  transition: 0.3s;
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
export const CardLogo = styled.div`
  position: relative;
  width: 90px;
  height: 100%;
  float: left;
  margin-right: 10px;
  z-index: 2;
  background-image: url('${(props) => props.logo}');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`
export const CardText = styled.div`
  position: relative;
  width: calc(100% - 100px);
  height: 100%;
  margin-left: 100px;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 13pt;
  }
  p {
    margin: 0;
    font-size: 10pt;
  }
`

export const ButtonBar = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  width: 100%;
  text-align: center;
`
