import React from 'react'
import {
  FormReservationWrapper,
  Logo,
  InputLine,
  Label,
  Input,
  SmallInput,
} from './FormReservation.styles'

import name from './../../assets/form_name.svg'
import phone from './../../assets/form_phone.svg'
import calendar from './../../assets/form_calendar.svg'
import guests from './../../assets/form_guests.svg'
import table from './../../assets/form_table.svg'
import Button from '../Button'

const FormReservation = (props) => (
  <FormReservationWrapper>
    <Logo
      logo={
        'http://192.168.1.124:4002/' + (!props.isFetching && props.places.logo)
      }
    ></Logo>
    <InputLine>
      <Label back={name} />
      <Input type="text" placeholder="Имя"></Input>
    </InputLine>
    <InputLine>
      <Label back={phone} />
      <Input type="text" placeholder="Телефон"></Input>
    </InputLine>
    <InputLine>
      <Label back={calendar} />
      <Input type="text" placeholder="Дата"></Input>
    </InputLine>
    <InputLine>
      <Label back={guests} />
      <SmallInput type="text" placeholder="" second></SmallInput>
      <Label back={table} small />
      <SmallInput type="text" placeholder="" second></SmallInput>
    </InputLine>
    <Button state="submit" text="Записаться"></Button>
  </FormReservationWrapper>
)

export default FormReservation
