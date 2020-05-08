import styled from '@emotion/styled'

const color1 = (props) => props.color.color1
const color2 = (props) => props.color.color2
const color3 = (props) => props.color.color3

export const ConstructorWrapper = styled.div`
  background-image: linear-gradient(
    -50deg,
    ${color1} 0%,
    ${color2} 51%,
    ${color3} 120%
  );
  width: 100%;
  height: 100vh;
  min-height: fit-content;
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
  margin: 30px;
  float: left;
  z-index: 100;
`
