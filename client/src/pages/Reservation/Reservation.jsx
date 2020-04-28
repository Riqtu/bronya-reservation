import React, { useState, useEffect } from 'react'
import { ReservationWrapper, Header, Logo } from './Reservation.styles'
import { Frame, FormReservation } from '../../components'
import { useParams } from 'react-router-dom'
import logo from './../../assets/logo.svg'

const Reservation = (props) => {
  let { id } = useParams()
  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  console.log(props)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://192.168.1.124:4002/api/places/' + id)
      res
        .json()
        .then((res) => {
          setPlaces(res)
          setIsFetching(false)
          console.log(res)
        })
        .catch((err) => setErrors(err))
    }
    fetchData()
  }, [id])

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
      <FormReservation
        places={places.data}
        isFetching={isFetching}
      ></FormReservation>
    </ReservationWrapper>
  )
}

export default Reservation
