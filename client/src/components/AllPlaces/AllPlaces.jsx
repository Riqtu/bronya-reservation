import React, { useState, useEffect } from 'react'
import {
  AllPlacesWrapper,
  Card,
  CardLogo,
  CardText,
  ButtonBar,
} from './AllPlaces.styles'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

const AllPlaces = (props) => {
  const [errors, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_GETPLACES)
      res
        .json()
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
    }
    fetchData()
  }, [errors, isFetching])
  const placesCard =
    places.data &&
    places.data.map((el, index) => {
      return (
        <Link to={'/reservation/' + places.data[index]._id} key={index}>
          <Card>
            <CardLogo
              logo={process.env.REACT_APP_UPLOADS + places.data[index].logo}
            ></CardLogo>
            <CardText>
              <h1>{places.data[index].name}</h1>
              <p>{places.data[index].description}</p>
              <ButtonBar>
                <Button text="забронировать" state="allPlaces" />
              </ButtonBar>
            </CardText>
          </Card>
        </Link>
      )
    })
  return <AllPlacesWrapper>{placesCard}</AllPlacesWrapper>
}

export default AllPlaces
