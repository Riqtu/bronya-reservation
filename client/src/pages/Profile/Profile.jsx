import React, { useState, useEffect, useCallback } from 'react'
import {
  ProfileWrapper,
  ReservationsWrapper,
  Card,
  CardLogo,
  CardText,
  Description,
  Text,
} from './Profile.styles'
import { Header, AllPlaces, AllReservations } from '../../components'
import { useStores } from './../../hooks/useStores'

const Profile = () => {
  const { authStore } = useStores()

  return (
    <ProfileWrapper>
      <Header></Header>
      <Text>Забронированные места</Text>
      <AllReservations></AllReservations>
      <Text>Любимые места</Text>

      <AllPlaces
        path={process.env.REACT_APP_GETPLACES + 'users/' + authStore.id}
      ></AllPlaces>
    </ProfileWrapper>
  )
}

export default Profile
