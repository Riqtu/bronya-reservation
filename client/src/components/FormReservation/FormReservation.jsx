import React, { useState } from 'react'
import {
  FormReservationWrapper,
  Logo,
  InputLine,
  Label,
  Input,
  SmallInput,
  PhoneInput,
  Upload,
  UploadLogo,
  UploadText,
  NameInput,
} from './FormReservation.styles'
import InputMask from 'react-input-mask'
import { format, addMinutes } from 'date-fns'
import { useStores } from './../../hooks/useStores'
import { autorun } from 'mobx'

import namePick from './../../assets/form_name.svg'
import phonePick from './../../assets/form_phone.svg'
import calendar from './../../assets/form_calendar.svg'
import guests from './../../assets/form_guests.svg'
import table from './../../assets/form_table.svg'
import check from './../../assets/check.svg'
import loader from './../../assets/loader.svg'

import Button from '../Button'
import { useEffect } from 'react'

const FormReservation = (props) => {
  const { authStore } = useStores()

  const [name, setName] = useState(authStore.name && authStore.name)
  const [phone, setPhone] = useState()
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidName, setIsValidName] = useState(true)
  const [isUpload, setIsUpload] = useState(false)

  const handleUpload = async (e) => {
    e.preventDefault()
    const data = {
      guestName: name,
      phone: phone,
      date: [props.date, addMinutes(new Date(props.date), 30)],
      tableId: props.tableId,
      placeId: props.id,
    }
    console.log(data.phone.replace(/[^0-9]/gim, '').replace(/^7/, ''))
    console.log(data)

    if (name !== '' && phone !== '') {
      const uploadData = await fetch(process.env.REACT_APP_ADDGUEST, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      uploadData
        .json()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err))

      props.handleFetch()
      setIsUpload(true)
    } else if (name === '' || phone === '') {
      if (name === '') {
        setIsValidName(false)
      }
      if (phone === '') {
        setIsValidPhone(false)
      }
    }
  }

  useEffect(() => {
    autorun(() => {
      setName(authStore.name)
      setPhone(authStore.phone)
    })
  }, [authStore.name, authStore.phone])
  return (
    <FormReservationWrapper
      mediaPhone={props.media}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {!props.isFetching && props.places ? (
        <Logo logo={process.env.REACT_APP_UPLOADS + props.places.logo}></Logo>
      ) : (
        <Logo logo={loader}></Logo>
      )}
      <InputLine>
        <Label back={namePick} />
        <NameInput
          type="text"
          placeholder="Имя"
          value={name}
          isValidName={isValidName}
          onChange={(e) => {
            setName(e.target.value)
            setIsValidName(true)
          }}
        ></NameInput>
      </InputLine>
      <InputLine>
        <Label back={phonePick} />

        <InputMask
          mask="+7 (999) 999-99-99"
          type="tel"
          placeholder="Телефон"
          value={phone}
          isValidPhone={isValidPhone}
          onChange={(e) => {
            setPhone(e.target.value)
            setIsValidPhone(true)
          }}
        >
          {(inputProps) => <PhoneInput {...inputProps} disableUnderline />}
        </InputMask>
      </InputLine>
      <InputLine>
        <Label back={calendar} />
        <Input
          type="text"
          placeholder="Дата"
          value={format(new Date(props.date), 'dd.MM.yyyy в HH:mm')}
          onChange={(e) => props.setDate(e.target.value)}
          readOnly
        ></Input>
      </InputLine>
      <InputLine>
        <Label back={guests} />
        <SmallInput type="text" placeholder="" second></SmallInput>
        <Label back={table} small />
        <SmallInput
          type="text"
          value={props.table}
          readOnly
          second
        ></SmallInput>
      </InputLine>
      <Button state="submit" text="Записаться" onClick={handleUpload}></Button>
      <Upload isUpload={isUpload}>
        <UploadLogo back={check}></UploadLogo>
        <UploadText>
          <h1>Забронировано!</h1>
          <p>
            Заведение: <b>'{props.places && props.places.name}'</b> <br />
            Дата: <b>{format(new Date(props.date), ' dd.MM.yyyy')}</b>
            <br />
            Время: <b>{format(new Date(props.date), ' HH:mm')}</b>
            <br />
            Адрес: <b>{props.places && props.places.address}</b>
          </p>
          <h2>
            Ждем тебя!{' '}
            <span role="img" aria-label="cat">
              🐱
            </span>
          </h2>
        </UploadText>
      </Upload>
    </FormReservationWrapper>
  )
}

export default FormReservation
