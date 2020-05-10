import styled from '@emotion/styled'

export const AllPlacesWrapper = styled.div`
  /* position: relative; */
  margin-top: -20px;
  /* background-color: #0f4c81; */
  width: 80%;
  margin-left: 10%;
  z-index: 1000;
  a {
    color: black;
  }
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 370px);
  @media screen and (max-width: 500px) {
    display: grid;
    justify-content: center;
    margin-left: 0;
  }
  /* min-height: fit-content; */
`

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;

  margin-left: 5%;
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
  @media screen and (max-width: 500px) {
    margin-left: 0px;
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
`
export const Description = styled.p`
  margin: 0;
  font-size: 9pt;
  margin-top: 5px;
`
export const Address = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 7pt;
`

export const ButtonBar = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  width: 100%;
  text-align: center;
`
