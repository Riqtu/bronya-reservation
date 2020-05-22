import React, { useState } from 'react'
import {
  HeaderWrapper,
  Logo,
  AuthWrapper,
  HeaderLink,
  ImgConstructor,
  AuthWrapperIsTrue,
} from './Header.styles'
import { Registration, Authorization, Button } from '../../components'
import { Link } from 'react-router-dom'
import { useStores } from './../../hooks/useStores'
import { useCookies } from 'react-cookie'

import logo from './../../assets/logo.svg'
import settings from './../../assets/settings.svg'

import constructor from './../../assets/constructor.svg'
import ProfileSetting from '../ProfileSetting/ProfileSetting'

const Header = (props) => {
  const { authStore } = useStores()
  const [cookies, removeCookie] = useCookies(['token'])
  const [auth, setAuth] = useState(false)
  const [reg, setReg] = useState(false)
  const [setting, setSetting] = useState(false)

  console.log(cookies)
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} alt=""></Logo>
        </Link>
        {props.state}
        {props.admin}
        {!authStore.auth ? (
          <AuthWrapper>
            <HeaderLink
              onClick={() => {
                setReg(true)
              }}
            >
              Регистрация
            </HeaderLink>

            <HeaderLink
              onClick={() => {
                setAuth(true)
              }}
            >
              Авторизация
            </HeaderLink>
          </AuthWrapper>
        ) : (
          <AuthWrapperIsTrue>
            <Link to={'/profile/' + authStore.id}>{authStore.name}</Link>

            <HeaderLink
              onClick={() => {
                setSetting(true)
              }}
            >
              <ImgConstructor src={settings} alt="" />
            </HeaderLink>
            {authStore.auth && authStore.role === 'superadmin' && (
              <Link to="/constructor">
                <ImgConstructor src={constructor} alt="" />
              </Link>
            )}
            <Button
              state="exit"
              onClick={() => {
                authStore.clearAll()
                removeCookie('token', { path: '/' })
              }}
            ></Button>
          </AuthWrapperIsTrue>
        )}
      </HeaderWrapper>
      <Registration
        active={reg}
        setActive={setReg}
        setAuth={setAuth}
        auth={auth}
      />
      <Authorization
        active={auth}
        setActive={setAuth}
        setReg={setReg}
        reg={reg}
      />
      <ProfileSetting active={setting} setActive={setSetting} />
    </React.Fragment>
  )
}

export default Header
