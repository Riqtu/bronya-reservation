import React, { useState, useEffect, useCallback } from 'react'
import {
  RestoratorWrapper,
  Tables,
  Info,
  Input,
  Logo,
  PlaceLogo,
  Header,
} from './Restorator.styles'
import { TimeCard, Button } from '../../components'
import { useParams, Link } from 'react-router-dom'

import bronyaLogo from './../../assets/logo.svg'

const Restorator = (props) => {
  let { id } = useParams()

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

    console.log(1)
  }, [handleFetch])

  const cards =
    place.table &&
    place.table.map((el, index) => {
      return (
        <TimeCard
          tableId={el._id}
          key={index}
          tableIndex={index}
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
      <RestoratorWrapper onClick={() => setInfoActive({ active: false })}>
        <Header>
          <Link to="/">
            <Logo src={bronyaLogo} onClick={(e) => e.stopPropagation()}></Logo>
          </Link>
          <PlaceLogo
            logo={process.env.REACT_APP_UPLOADS + place.logo}
          ></PlaceLogo>
        </Header>
        <Tables>{cards}</Tables>
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
      </RestoratorWrapper>
    )
  else return <div></div>
}

export default Restorator
