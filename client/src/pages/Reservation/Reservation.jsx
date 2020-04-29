import React, { useState, useEffect } from 'react'
import {
  ReservationWrapper,
  Header,
  Logo,
  BackFrameWrapper,
  BackFloor,
  BackFrame,
  CallBar,
} from './Reservation.styles'
import { Frame, FormReservation } from '../../components'
import { useParams, Link } from 'react-router-dom'

import logo from './../../assets/logo.svg'

const Reservation = (props) => {
  let { id } = useParams()
  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  const [date, setDate] = useState('')
  const [table, setTable] = useState('')
  const [tableId, setTableId] = useState('')

  console.log(props)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_GETPLACES + id)
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
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
      </Header>
      <CallBar>Выберите стол</CallBar>
      <BackFrameWrapper>
        <BackFrame>
          <BackFloor></BackFloor>
        </BackFrame>
        <BackFrame bottom>
          <BackFloor></BackFloor>
        </BackFrame>
      </BackFrameWrapper>
      <Frame
        places={places.data}
        isFetching={isFetching}
        error={hasError}
        date={date}
        setDate={setDate}
        setTable={setTable}
        setTableId={setTableId}
      ></Frame>
      <FormReservation
        date={date}
        setDate={setDate}
        table={table}
        tableId={tableId}
        places={places.data}
        isFetching={isFetching}
        id={id}
      ></FormReservation>
    </ReservationWrapper>
  )
}

export default Reservation
