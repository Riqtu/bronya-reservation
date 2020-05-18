import React from 'react'
import { ProfileWrapper } from './Profile.styles'
import { Header, AllPlaces } from '../../components'
import { useStores } from '../../hooks/useStores'

const Profile = () => {
  const { authStore } = useStores()
  console.log(process.env.REACT_APP_GETPLACES + 'users/' + authStore.id)
  return (
    <ProfileWrapper>
      <Header></Header>
      <AllPlaces
        path={process.env.REACT_APP_GETPLACES + 'users/' + authStore.id}
      ></AllPlaces>
    </ProfileWrapper>
  )
}

export default Profile
