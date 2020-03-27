import styled from '@emotion/styled'

export const MainPageWrapper = styled.section`
  background-image: linear-gradient(
    -50deg,
    #473b7b 0%,
    #3584a7 51%,
    #30d2be 120%
  );
  overflow-x: hidden;
  background-size: 200% 100%;
  animation: 15s background-animation ease infinite;
  @keyframes background-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  width: 100%;
  /* height: 150vh; */
  min-height: fit-content;
  color: white;
`
export const MainSection = styled.section``

export const Header = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;
`

export const Link = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  top: calc(50% - 1.3rem);
  float: left;
  transition: 0.4s;
  margin-right: 12px;
  &:hover {
    color: #83f0bc;
  }
`

export const Text = styled.p`
  position: relative;
  width: 40%;
  margin-top: 10%;
  margin-left: 30px;
  font-size: 1.4rem;
  z-index: 2;
`

export const BackFrames = styled.img`
  position: relative;
  width: 100%;
  min-width: 700px;
  left: 0;
  margin-top: -32%;
`

export const All = styled.section`
  position: relative;
  margin-top: -5px;
  height: 100px;
  width: 100%;
  background-color: #0f4c81;
`
