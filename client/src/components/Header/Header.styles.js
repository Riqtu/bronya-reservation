import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;

  @media screen and (max-width: 500px) {
    width: 50%;
    margin: 15px;
  }
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
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    top: 15px;
  }
`
