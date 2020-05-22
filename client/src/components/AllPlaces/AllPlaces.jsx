import React, { useState, useEffect, useCallback } from 'react'
import {
  AllPlacesWrapper,
  Card,
  CardLogo,
  CardText,
  ButtonBar,
  Address,
  Description,
  AdminButtons,
  Like,
  LikeDiv,
} from './AllPlaces.styles'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import { useStores } from './../../hooks/useStores'
import { useCookies } from 'react-cookie'

const AllPlaces = (props) => {
  const { authStore } = useStores()
  const [cookies] = useCookies(['token'])

  const [errors, setErrors] = useState(false)
  const [, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})

  const [disabled, setDisabled] = useState()

  const handleFetch = useCallback(
    (path) => {
      fetch(path)
        .then((res) => res.json())
        .then((res) => {
          setPlaces(res)
          setIsFetching(false)
        })
        .catch((err) => {
          setErrors(err)
          console.log(errors)
        })
    },
    [errors]
  )

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

  const handleUpdateLike = useCallback(
    (el) => {
      const find = authStore.like.indexOf(el._id)
      if (find === -1) {
        authStore.setLike([...authStore.like, el._id])
      } else {
        authStore.setLike(authStore.like.filter((item) => item !== el._id))
        setDisabled(el._id)
      }
      fetch(process.env.REACT_APP_USER + authStore.id, {
        method: 'PUT',
        body: JSON.stringify({ likes: authStore.like }),
        headers: {
          Authorization: cookies.token,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data, cookies.token))

      handleFetch()
    },
    [handleFetch, cookies.token, authStore]
  )

  useEffect(() => {
    handleFetch(props.path)
  }, [handleFetch, props.path, authStore.like])

  // useEffect(() => {
  //   if (authStore.auth && authStore.role === 'superadmin') {
  //     console.log(authStore.data.auth)
  //   }
  // }, [authStore])

  const placesCard =
    places.data &&
    places.data.map((el, index) => {
      return (
        <Card key={index} disabled={disabled === el._id}>
          {authStore.auth && authStore.role === 'superadmin' && (
            <AdminButtons>
              <Button
                state="deleteAdmin"
                onClick={() => {
                  handleDelete(el._id && el._id)
                }}
              ></Button>
              <Link to={'/constructor/' + el._id}>
                <Button state="constructorAdmin"></Button>
              </Link>
            </AdminButtons>
          )}
          {authStore.auth && (
            <Like
              liked={authStore.like && authStore.like.indexOf(el._id) !== -1}
              onClick={() => {
                handleUpdateLike(el)
              }}
            >
              <LikeDiv
                liked={authStore.like && authStore.like.indexOf(el._id) !== -1}
              ></LikeDiv>
            </Like>
          )}
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
