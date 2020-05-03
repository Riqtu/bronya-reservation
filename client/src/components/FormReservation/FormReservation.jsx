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
} from './FormReservation.styles'
import InputMask from 'react-input-mask'
import { format } from 'date-fns'

import namePick from './../../assets/form_name.svg'
import phonePick from './../../assets/form_phone.svg'
import calendar from './../../assets/form_calendar.svg'
import guests from './../../assets/form_guests.svg'
import table from './../../assets/form_table.svg'
import check from './../../assets/check.svg'

import Button from '../Button'

const FormReservation = (props) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isUpload, setIsUpload] = useState(false)

  const handleUpload = async (e) => {
    e.preventDefault()
    const data = {
      guestName: name,
      phone: phone,
      date: props.date,
      tableId: props.tableId,
    }

    console.log(data)

    const uploadData = await fetch(process.env.REACT_APP_ADDGUEST + props.id, {
      method: 'PUT',
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
  }

  return (
    <FormReservationWrapper>
      {!props.isFetching && props.places && (
        <Logo logo={process.env.REACT_APP_UPLOADS + props.places.logo}></Logo>
      )}
      <InputLine>
        <Label back={namePick} />
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
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
          <h2>Ждем тебя! 🐱</h2>
        </UploadText>
      </Upload>
    </FormReservationWrapper>
  )
}

export default FormReservation
