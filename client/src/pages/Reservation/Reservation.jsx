import React, { useState, useEffect, useCallback } from 'react'
import {
  ReservationWrapper,
  BackFrameWrapper,
  BackFloor,
  BackFrame,
  CallBar,
  Input,
} from './Reservation.styles'
import { useReservation } from '../../hooks/useReservation'

import { Frame, FormReservation, Header } from '../../components'
import { useParams, Link } from 'react-router-dom'
import { setHours, setMinutes } from 'date-fns'
import { ru } from 'date-fns/locale'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import logo from './../../assets/logo.svg'
const Reservation = (props) => {
  const reservationProps = useReservation()

  registerLocale('ru', ru)
  let { id } = useParams()

  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 10)
  )

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETPLACES + id)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data)
        setStartDate(setHours(setMinutes(new Date(), 0), data.data.start))
        setIsFetching(false)
      })
      .catch((err) => setErrors(err))
  }, [id])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <ReservationWrapper color={places.data && places.data.color}>
      <Header
        state={
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
            }}
            showTimeSelect
            timeIntervals={30}
            locale="ru"
            minTime={setHours(
              setMinutes(new Date(), 0),
              places.data ? places.data.start : 10
            )}
            maxTime={setHours(
              setMinutes(new Date(), 30),
              places.data ? places.data.end - 1 : 22
            )}
            dateFormat="dd.MM.yyyy  HH:mm"
            customInput={<Input />}
          />
        }
      ></Header>
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
        places={places.data}
        isFetching={isFetching}
        {...reservationProps}
      />
      <Frame
        dateElement={startDate}
        places={places.data}
        isFetching={isFetching}
        error={hasError}
        {...reservationProps}
      />
    </ReservationWrapper>
  )
}

export default Reservation
