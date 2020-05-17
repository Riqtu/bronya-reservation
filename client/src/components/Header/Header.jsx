import React, { useState, useEffect } from 'react'
import { HeaderWrapper, Logo, AuthWrapper } from './Header.styles'
import { Registration, Authorization, Button } from '../../components'
import { Link } from 'react-router-dom'
import { useStores } from './../../hooks/useStores'
import localStorage from 'mobx-localstorage'
import { useCookies } from 'react-cookie'

import logo from './../../assets/logo.svg'
const Header = (props) => {
  const { authStore } = useStores()
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [auth, setAuth] = useState(false)
  const [reg, setReg] = useState(false)

  const [isAuth, setIsAuth] = useState(authStore.auth)

  useEffect(() => {
    setIsAuth(authStore.auth)
  }, [authStore])

  console.log(cookies)
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} alt=""></Logo>
        </Link>
        {props.state}
        {!isAuth ? (
          <AuthWrapper>
            <Link
              to=""
              onClick={() => {
                setReg(true)
              }}
            >
              Регистрация
            </Link>

            <Link
              to=""
              onClick={() => {
                setAuth(true)
              }}
            >
              Авторизация
            </Link>
          </AuthWrapper>
        ) : (
          <AuthWrapper>
            <Link to="">{authStore.name}</Link>
            <Button
              text="Х"
              state="exit"
              onClick={() => {
                localStorage.setItem('authStore', '')

                removeCookie('token', { path: '/' })
                setIsAuth(false)
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
        setIsAuth={setIsAuth}
      />
    </React.Fragment>
  )
}

export default Header
