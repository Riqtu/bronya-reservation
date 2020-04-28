import React, { useState, useEffect } from 'react'
import { AllPlacesWrapper, Card } from './AllPlaces.styles'
import { Link } from 'react-router-dom'

const AllPlaces = (props) => {
  const [errors, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [places, setPlaces] = useState({})
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://192.168.1.124:4002/api/places')
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
        <Card key={index}>
          <Link to={'/reservation/' + places.data[index]._id}>
            {places.data[index].name}
          </Link>
        </Card>
      )
    })
  return <AllPlacesWrapper>{placesCard}</AllPlacesWrapper>
}

export default AllPlaces
