import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
  width: 100%;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin-top: 10px;
    margin-left: 25%;
  }
`
export const ImgConstructor = styled.img`
  width: 20px;
`
export const AuthWrapper = styled.div`
  position: absolute;
  left: auto;
  right: 30px;
  top: 30%;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    top: calc(50% - 1.3rem);
    float: left;
    transition: 0.4s;
    margin-right: 12px;
    &:hover {
      color: #83f0bc;
    }
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    left: 50px;
    top: 50%;
  }
`
export const AuthWrapperIsTrue = styled.div`
  position: absolute;
  left: auto;
  right: 30px;
  top: 30%;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    top: calc(50% - 1.3rem);
    float: left;
    transition: 0.4s;
    margin-right: 12px;
    &:hover {
      color: #83f0bc;
    }
  }
  @media screen and (max-width: 500px) {
    left: 105px;
    top: 50%;
  }
`

export const HeaderLink = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  top: calc(50% - 1.3rem);
  float: left;
  transition: 0.4s;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    color: #83f0bc;
  }
`
