import styled from '@emotion/styled'

export const AllPlacesWrapper = styled.div`
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
`

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
`
