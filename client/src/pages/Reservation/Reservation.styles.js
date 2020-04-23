import styled from '@emotion/styled'

export const ReservationWrapper = styled.div`
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
  height: 100vh;
  min-height: fit-content;
  color: white;
`
export const Logo = styled.img`
  margin: 30px;
  float: left;
`
export const Header = styled.header`
  position: relative;
  height: 150px;
  z-index: 2;
`
