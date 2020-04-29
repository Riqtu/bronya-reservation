import React, { useState } from 'react'
import {
  FormReservationWrapper,
  Logo,
  InputLine,
  Label,
  Input,
  SmallInput,
} from './FormReservation.styles'

import namePick from './../../assets/form_name.svg'
import phonePick from './../../assets/form_phone.svg'
import calendar from './../../assets/form_calendar.svg'
import guests from './../../assets/form_guests.svg'
import table from './../../assets/form_table.svg'
import Button from '../Button'

const FormReservation = (props) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

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
  }

  return (
    <FormReservationWrapper>
      <Logo
        logo={
          process.env.REACT_APP_UPLOADS +
          (!props.isFetching && props.places.logo)
        }
      ></Logo>
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
        <Input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></Input>
      </InputLine>
      <InputLine>
        <Label back={calendar} />
        <Input
          type="text"
          placeholder="Дата"
          value={props.date}
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
    </FormReservationWrapper>
  )
}

export default FormReservation
