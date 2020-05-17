import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { BarLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import {
  RegistrationWrapper,
  Form,
  Img,
  Logo,
  Line,
  Change,
  Input,
} from './Registration.styles'

import reg from '../../assets/logoBlack.svg'
import Button from '../Button'

const Registration = (props) => {
  const [phoneNumber, setPhoneNumber] = useState()
  const [credentials, setCredentials] = useState({
    email: '',
    name: '',
    password: '',
    phone: phoneNumber,
    role: 'user',
  })
  const [loading, setLoading] = useState(false)
  const [, setCookie] = useCookies()

  const validate = () => {
    const { email, name, password, phone } = credentials
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email || !emailCheck.test(email)) {
      toast.error('Введите корректный email!')
      return false
    } else if (!name) {
      toast.error('Введите имя!')
      return false
    } else if (!phoneNumber) {
      toast.error('Введите телефон!' + phoneNumber)
      return false
    } else if (password.length < 8) {
      toast.error('Длина пароля должна быть не меньше 8 символов!')
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
    credentials.phone = phoneNumber
    console.log(credentials)

    if (isValid) {
      try {
        setLoading(true)

        const result = await fetch(process.env.REACT_APP_SIGNUP, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        })

        const data = await result.json()

        if (!result.ok) {
          toast.error(data.message)
        } else {
          toast.success('Успешная регистрация!')
          setCookie('token', data.token)
          props.setActive(false)
        }
        setLoading(false)
      } catch (e) {
        toast.error('Ошибка регистрации!')
        setLoading(false)
      }
    }
  }

  return (
    <RegistrationWrapper
      active={props.active}
      onClick={() => props.setActive(false)}
      auth={props.auth}
    >
      <Form
        active={props.active}
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      >
        <Img src={reg} alt="authImg" />
        <div>
          <Logo>Регистрация</Logo>
          <Line />
          <Change
            onClick={() => {
              props.setAuth(true)
              props.setActive(false)
            }}
            href="#"
          >
            Авторизация
          </Change>
        </div>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Имя"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
        <InputMask
          mask="+7 (999) 999-99-99"
          type="tel"
          placeholder="Телефон"
          value={credentials.phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
          // onChange={handleChange}
        >
          {(inputProps) => <Input {...inputProps} />}
        </InputMask>
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
          text={loading ? <BarLoader width={62} /> : 'Зарегистрироваться'}
          onClick={handleSubmit}
        />
      </Form>
    </RegistrationWrapper>
  )
}

export default Registration
