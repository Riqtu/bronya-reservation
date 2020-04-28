import styled from '@emotion/styled'

export const FormReservationWrapper = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: 50px;
  bottom: 50px;
  width: 300px;
  min-height: 250px;
  min-width: 300px;
  padding: 45px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  margin-bottom: 30px;
  background-image: url('${(props) => props.logo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: blue; */
`

export const InputLine = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
`

export const Label = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url('${(props) => props.back}');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: ${(props) => (props.small ? '20px' : '40px')};
  margin-left: ${(props) => (props.small ? '20px' : '0px')};

  float: left;
`

export const Input = styled.input`
  position: relative;
  width: calc(100% - 90px);
  height: 50px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  border-radius: 7px;
  text-align: center;
  font-size: 12pt;
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

export const SmallInput = styled.input`
  position: relative;
  width: 60px;
  height: 50px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  border-radius: 7px;
  text-align: center;
  font-size: 12pt;
  float: left;
  margin-left: ${(props) => (props.second ? '0px' : '40px')};
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
