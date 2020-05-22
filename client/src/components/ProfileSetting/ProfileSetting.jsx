import React, { useState } from 'react'
import {
  ProfileSettingWrapper,
  Form,
  Img,
  Logo,
  Input,
} from './ProfileSetting.styles'
import Button from '../Button'
import authImg from '../../assets/man.svg'
import { BarLoader } from 'react-spinners'
import { useStores } from './../../hooks/useStores'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'

const ProfileSetting = (props) => {
  const { authStore } = useStores()
  const [cookies] = useCookies(['token'])

  const [credentials, setCredentials] = useState({
    name: authStore.name,
    phone: authStore.phone,
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setCredentials(
      Object.assign({}, credentials, {
        [e.target.name]: e.target.value,
      })
    )
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)

      console.log(credentials)
      const result = await fetch(process.env.REACT_APP_USER + authStore.id, {
        method: 'PUT',
        body: JSON.stringify(credentials),
        headers: {
          //   'Content-Type': 'application/json',
          Authorization: cookies.token,
        },
      })

      const data = await result.json()
      console.log(data)
      if (!result.ok) {
        toast.error(data.message)
      } else {
        toast.success('Успешные изменения!')
        authStore.setName(credentials.name)
        authStore.setPhone(credentials.phone)
        props.setActive(false)
      }
      setLoading(false)
    } catch (e) {
      toast.error('Ошибка изменений!')
      setLoading(false)
    }
  }

  return (
    <ProfileSettingWrapper
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
          <Logo>Настройка профиля</Logo>
        </div>
        <Input
          type="text"
          placeholder="Имя"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
        <Input
          type="phone"
          placeholder="Телефон"
          name="phone"
          value={credentials.phone}
          onChange={handleChange}
        />
        <Button
          type="submit"
          state="form"
          style={{ height: 50 }}
          disabled={loading}
          text={loading ? <BarLoader width={62} /> : 'Изменить'}
          onClick={handleSubmit}
        />
      </Form>
    </ProfileSettingWrapper>
  )
}

export default ProfileSetting
