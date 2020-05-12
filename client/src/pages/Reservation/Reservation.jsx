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
import { format, setHours, setMinutes } from 'date-fns'
import { ru } from 'date-fns/locale'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import logo from './../../assets/logo.svg'
const Reservation = (props) => {
  registerLocale('ru', ru)
  let { id } = useParams()

  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd'T'hh:mm"))

  const [table, setTable] = useState('')
  const [tableId, setTableId] = useState('')

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 10)
  )

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
  }, [handleFetch])
  return (
    <ReservationWrapper color={places.data && places.data.color}>
      <Header>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        {/* <Input
          type="date"
          value={
            format(Date.now(), 'yyyy-MM-dd') <= dateElement
              ? dateElement
              : format(Date.now(), 'yyyy-MM-dd')
          }
          min={format(Date.now(), 'yyyy-MM-dd')}
          onChange={(e) => setDateElement(e.target.value)}
        ></Input> */}
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date)
          }}
          showTimeSelect
          timeIntervals={30}
          locale="ru"
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 30), 21)}
          dateFormat="dd.MM.yyyy  HH:mm"
          customInput={<Input />}
        />
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
        dateElement={startDate}
        places={places.data}
        isFetching={isFetching}
        error={hasError}
        date={date}
        setDate={setDate}
        setTable={setTable}
        setTableId={setTableId}
        id={id}
      />
    </ReservationWrapper>
  )
}

export default Reservation
