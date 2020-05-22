import React, { useState } from 'react'

import { useCookies } from 'react-cookie'
import { BarLoader } from 'react-spinners'
import { toast } from 'react-toastify'

import {
  AuthorizationWrapper,
  Form,
  Img,
  Logo,
  Line,
  Change,
  Input,
} from './Authorization.styles'

import { useStores } from './../../hooks/useStores'

import Button from '../Button'
import authImg from '../../assets/logoBlack.svg'

const Authorization = (props) => {
  const { authStore } = useStores()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [, setCookie] = useCookies()

  const validate = () => {
    const { email, password } = credentials

    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email || !emailCheck.test(email)) {
      toast.error('Введите корректный email!')
      return false
    } else if (!password) {
      toast.error('Введите пароль!')
      return false
    }

    return true
  }

  const handleChange = (e) => {
    setCredentials(
      Object.assign({}, credentials, {
        [e.target.name]: e.target.value.trim(),
      })
    )
  }

  const handleSubmit = async () => {
    const isValid = validate()

    if (isValid) {
      try {
        setLoading(true)

        const result = await fetch(process.env.REACT_APP_LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        })

        const data = await result.json()
        console.log(data)
        if (!result.ok) {
          toast.error(data.message)
        } else {
          toast.success('Успешная авторизация!')
          authStore.setAuth(true)
          authStore.setName(data.data.name)
          authStore.setRole(data.data.role)
          authStore.setPhone(data.data.phone)
          authStore.setToken(data.token)
          authStore.setId(data.data._id)
          authStore.setLike(data.data.likes)

          setCookie('token', data.token)
          props.setActive(false)
        }
        setLoading(false)
      } catch (e) {
        toast.error('Ошибка авторизации!')
        setLoading(false)
      }
    }
  }

  return (
    <AuthorizationWrapper
      active={props.active}
      onClick={() => props.setActive(false)}
    >
      <Form
        active={props.active}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <Img src={authImg} alt="authImg" />
        <div>
          <Logo>Авторизация</Logo>
          <Line />
          <Change
            onClick={() => {
              props.setReg(true)
              props.setActive(false)
            }}
            href="#"
          >
            Регистрация
          </Change>
        </div>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Пароль"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          state="form"
          style={{ height: 50 }}
          disabled={loading}
          text={loading ? <BarLoader width={62} /> : 'Войти'}
          onClick={handleSubmit}
        />
      </Form>
    </AuthorizationWrapper>
  )
}

export default Authorization
