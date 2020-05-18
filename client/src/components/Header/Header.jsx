import React, { useState } from 'react'
import {
  HeaderWrapper,
  Logo,
  AuthWrapper,
  HeaderLink,
  ImgConstructor,
} from './Header.styles'
import { Registration, Authorization, Button } from '../../components'
import { Link } from 'react-router-dom'
import { useStores } from './../../hooks/useStores'
import localStorage from 'mobx-localstorage'
import { useCookies } from 'react-cookie'

import logo from './../../assets/logo.svg'
import constructor from './../../assets/constructor.svg'

const Header = (props) => {
  const { authStore } = useStores()
  const [cookies, removeCookie] = useCookies(['token'])
  const [auth, setAuth] = useState(false)
  const [reg, setReg] = useState(false)

  console.log(cookies)
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} alt=""></Logo>
        </Link>
        {props.state}
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
          <AuthWrapper>
            <Link to={'/profile/' + authStore.id}>{authStore.name}</Link>
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
          </AuthWrapper>
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
    </React.Fragment>
  )
}

export default Header
