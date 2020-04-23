import React, { useState, useEffect } from 'react'
import { ReservationWrapper, Header, Logo } from './Reservation.styles'
import { Frame } from '../../components'

import logo from './../../assets/logo.svg'

const Reservation = (props) => {
  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  console.log(props)
  async function fetchData() {
    const res = await fetch('http://192.168.1.124:4002/api/places/' + props.id)
    res
      .json()
      .then((res) => {
        setPlaces(res)
        setIsFetching(false)
        console.log(res)
      })
      .catch((err) => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ReservationWrapper>
      <Header>
        <Logo src={logo}></Logo>
      </Header>
      <Frame
        places={places.data}
        isFetching={isFetching}
        error={hasError}
      ></Frame>
    </ReservationWrapper>
  )
}

export default Reservation
