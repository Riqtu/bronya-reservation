import React, { useState } from 'react'
import { HeaderWrapper, Logo, AuthWrapper, HeaderLink } from './Header.styles'
import { Registration, Authorization, Button } from '../../components'
import { Link } from 'react-router-dom'
import { useStores } from './../../hooks/useStores'
import localStorage from 'mobx-localstorage'
import { useCookies } from 'react-cookie'

import logo from './../../assets/logo.svg'
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
            <Link to="">{authStore.name}</Link>
            <Button
              text="Х"
              state="exit"
              onClick={() => {
                authStore.setAuth(false)
                authStore.setPhone('')
                authStore.setRole('')
                authStore.setToken('')
                authStore.setName('')
                localStorage.setItem('authStore', '')
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
