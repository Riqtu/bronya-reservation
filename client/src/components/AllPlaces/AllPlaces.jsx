import React, { useState, useEffect, useCallback } from 'react'
import {
  AllPlacesWrapper,
  Card,
  CardLogo,
  CardText,
  ButtonBar,
  Address,
  Description,
} from './AllPlaces.styles'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import { useStores } from './../../hooks/useStores'
import { useCookies } from 'react-cookie'

const AllPlaces = (props) => {
  const { authStore } = useStores()
  const [cookies] = useCookies(['token'])

  const [errors, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})
  const [deleted, setDeleted] = useState()

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETPLACES)
      .then((res) => res.json())
      .then((res) => {
        setPlaces(res)
        setIsFetching(false)
        console.log(res)
        console.log(isFetching)
      })
      .catch((err) => {
        setErrors(err)
        console.log(errors)
      })
  }, [errors, isFetching])

  const handleDelete = useCallback(
    (el) => {
      fetch(process.env.REACT_APP_GETPLACES + el, {
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

  useEffect(() => {
    handleFetch()
  }, [handleFetch])
  const placesCard =
    places.data &&
    places.data.map((el, index) => {
      return (
        <Card key={index}>
          {authStore.role === 'superadmin' && (
            <Button
              state="exit"
              onClick={() => {
                handleDelete(el._id)
              }}
            ></Button>
          )}
          <Link to={'/constructor/' + el._id}>
            <Button state="exit" text="<"></Button>
          </Link>
          <CardLogo
            logo={process.env.REACT_APP_UPLOADS + places.data[index].logo}
          ></CardLogo>
          <CardText>
            <h1>{places.data[index].name}</h1>
            <Description>{places.data[index].description}</Description>
            <Address>{places.data[index].address}</Address>
            <ButtonBar>
              <Link to={'/reservation/' + places.data[index]._id} key={index}>
                <Button text="забронировать" state="allPlaces" />
              </Link>
            </ButtonBar>
          </CardText>
        </Card>
      )
    })
  return <AllPlacesWrapper>{placesCard}</AllPlacesWrapper>
}

export default AllPlaces
