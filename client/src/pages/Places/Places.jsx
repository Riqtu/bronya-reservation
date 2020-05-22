import React from 'react'
import { PlacesWrapper } from './Places.styles'
import { Header, AllPlaces } from '../../components'
const Places = () => (
  <PlacesWrapper>
    <Header></Header>
    <AllPlaces path={process.env.REACT_APP_GETPLACES}></AllPlaces>
  </PlacesWrapper>
)

export default Places
