import React, { useState, useEffect, useCallback } from 'react'
import {
  RestoratorWrapper,
  Tables,
  Info,
  Input,
  InputHeader,
} from './Restorator.styles'
import { TimeCard, Button, Header } from '../../components'
import { useParams } from 'react-router-dom'
import { useStores } from './../../hooks/useStores'
import DatePicker, { registerLocale } from 'react-datepicker'
import { setHours, setMinutes } from 'date-fns'
import { ru } from 'date-fns/locale'

const Restorator = (props) => {
  let { id } = useParams()
  registerLocale('ru', ru)
  const { authStore } = useStores()
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 10)
  )
  const [, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [place, setPlace] = useState({})

  const [infoActive, setInfoActive] = useState({
    active: false,
    emptyTable: true,
  })
  const [infoCoord, setInfoCoord] = useState({ x: 20, y: 20 })
  const [inputName, setInputName] = useState('')
  const [inputUpload, setInputUpload] = useState({})
  const [inputDelete, setInputDelete] = useState('')

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETPLACES + id)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data.data)
        setIsFetching(false)
      })
      .catch((err) => {
        setErrors(err)
      })
  }, [id])

  const handleDelete = useCallback((id) => {
    fetch(process.env.REACT_APP_GETRESERVATIONS + id, {
      method: 'DELETE',
      body: id,
    })
      .then((res) => res.json())
      .catch((err) => setErrors(err))
  }, [])

  const handleUpload = useCallback(async () => {
    const data = {
      guestName: inputName,
      phone: 'restorator',
      date: inputUpload.date,
      tableId: inputUpload.tableId,
    }
    console.log(data)
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
  }, [inputName, inputUpload.date, inputUpload.tableId])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  const cards =
    place.table &&
    place.table.map((el, index) => {
      return (
        <TimeCard
          tableId={el._id}
          key={index}
          tableIndex={index}
          start={place.start}
          end={place.end}
          date={startDate}
          setInfoActive={setInfoActive}
          setInfoCoord={setInfoCoord}
          setInputUpload={setInputUpload}
          setInputDelete={setInputDelete}
          setInputName={setInputName}
        ></TimeCard>
      )
    })

  const whatInfo = () => {
    if (infoActive.emptyTable)
      return (
        <Button
          text="Добавить"
          state="restoratorAdd"
          onClick={(e) => {
            e.stopPropagation()
            console.log(inputUpload)
            handleUpload(inputUpload)
            setInfoActive((infoActive.active = false))
          }}
        />
      )
    else
      return (
        <Button
          text="Удалить"
          state="restoratorDelete"
          onClick={(e) => {
            e.stopPropagation()
            handleDelete(inputDelete)
            setInfoActive((infoActive.active = false))
          }}
        />
      )
  }

  if (!isFetching)
    return (
      <React.Fragment>
        <RestoratorWrapper onClick={() => setInfoActive({ active: false })}>
          <Header
            state={
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date)
                }}
                locale="ru"
                dateFormat="dd.MM.yyyy"
                customInput={<InputHeader />}
              />
            }
          />
          <Tables>{cards}</Tables>
          {/* <div>.</div> */}
          {authStore.auth &&
            (authStore.role === 'superadmin' ||
              authStore.role === 'restorator') && (
              <Info active={infoActive.active} x={infoCoord.x} y={infoCoord.y}>
                <Input
                  type="text"
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value)
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                {whatInfo()}
              </Info>
            )}
        </RestoratorWrapper>
      </React.Fragment>
    )
  else return <div></div>
}

export default Restorator
