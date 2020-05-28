import React, { useState, useEffect, useCallback } from 'react'
import {
  AllReservationsWrapper,
  CardText,
  CardLogo,
  Card,
  Description,
  NotFound,
} from './AllReservations.styles'
import { Button } from '../../components'

import { useStores } from './../../hooks/useStores'
import { useCookies } from 'react-cookie'
import { format } from 'date-fns'

const AllReservations = (props) => {
  const { authStore } = useStores()
  const [cookies] = useCookies(['token'])
  const [hasError, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})
  const [disabled, setDisabled] = useState()

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETRESERVATIONS + 'phone/' + authStore.phone)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data)
        console.log('data', data)
        setIsFetching(false)
      })
      .catch((err) => setErrors(err))
  }, [])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  const handleDelete = useCallback(
    (el) => {
      fetch(process.env.REACT_APP_GETRESERVATIONS + el, {
        method: 'DELETE',
        headers: {
          Authorization: cookies.token,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data, cookies.token))
      handleFetch()
    },
    [handleFetch, cookies.token]
  )

  const reservations =
    places.res && places.res.length !== 0 ? (
      places.res.map((el, index) => {
        return (
          <Card key={index} disabled={disabled === el._id}>
            <CardLogo logo={process.env.REACT_APP_UPLOADS + el.placeId.logo} />
            <CardText>
              <h1>{el.placeId.name}</h1>
              <Description>
                Дата: <b>{format(new Date(el.date[0]), 'dd.MM.yyyy')}</b> <br />
                Время: <b>{format(new Date(el.date[0]), 'HH:mm')}</b>
                <br />
                Стол: <b>{el.tableIndex}</b> <br />
                Адрес: <b>{el.placeId.address}</b>
              </Description>

              <Button
                text="Отменить"
                state="allReservations"
                onClick={() => {
                  handleDelete(el._id)
                  setDisabled(el._id)
                }}
              ></Button>
            </CardText>
          </Card>
        )
      })
    ) : (
      <NotFound>Вы еще ничего не забронировали =(</NotFound>
    )
  return <AllReservationsWrapper>{reservations}</AllReservationsWrapper>
}

export default AllReservations
