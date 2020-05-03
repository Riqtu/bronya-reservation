import React, { useState, useEffect, useCallback } from 'react'
import {
  ReservationWrapper,
  Header,
  Logo,
  BackFrameWrapper,
  BackFloor,
  BackFrame,
  CallBar,
  Input,
} from './Reservation.styles'
import { Frame, FormReservation } from '../../components'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'

import logo from './../../assets/logo.svg'

const Reservation = (props) => {
  let { id } = useParams()
  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"))
  const [dateElement, setDateElement] = useState(
    format(new Date(), 'yyyy-MM-dd')
  )

  const [table, setTable] = useState('')
  const [tableId, setTableId] = useState('')

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETPLACES + id)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data)
        setIsFetching(false)
      })
      .catch((err) => setErrors(err))
  }, [id])

  useEffect(() => {
    handleFetch()
    const update = setInterval(handleFetch, 3000)
    return () => clearInterval(update)
  }, [handleFetch])
  return (
    <ReservationWrapper>
      <Header>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        <Input
          type="date"
          value={dateElement}
          min={format(Date.now(), 'yyyy-MM-dd')}
          onChange={(e) => setDateElement(e.target.value)}
        ></Input>
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
      <FormReservation
        handleFetch={handleFetch}
        date={date}
        setDate={setDate}
        table={table}
        tableId={tableId}
        places={places.data}
        isFetching={isFetching}
        id={id}
      />
      <Frame
        dateElement={dateElement}
        places={places.data}
        isFetching={isFetching}
        error={hasError}
        date={date}
        setDate={setDate}
        setTable={setTable}
        setTableId={setTableId}
      />
    </ReservationWrapper>
  )
}

export default Reservation
