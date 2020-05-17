import React, { useState, useEffect, useCallback } from 'react'
import { FrameConstructor, FormTableConstructor } from '../../components'
import { ConstructorWrapper, PlaceLogo, Logo } from './Constructor.styles'
import { Link, useParams } from 'react-router-dom'
import { useConstructor } from '../../hooks/useConstructor'

import bronyaLogo from './../../assets/logo.svg'

const Constructor = () => {
  let { idPlace } = useParams()
  const constructorProps = useConstructor()

  const [, setErrors] = useState(false)
  const [, setIsFetching] = useState(true)
  const [image, setImage] = useState({ preview: '', raw: '' })

  // const [data, setData] = useState({
  //   table: [],
  // })
  const table = {
    table: [
      { id: constructorProps.id, x: constructorProps.x, y: constructorProps.y },
    ],
  }

  const handleFetch = useCallback(() => {
    idPlace &&
      fetch(process.env.REACT_APP_GETPLACES + idPlace)
        .then((res) => res.json())
        .then((data) => {
          setIsFetching(false)
          constructorProps.setName(data.data.name)
          constructorProps.setDescription(data.data.description)
          constructorProps.setAddress(data.data.address)
          constructorProps.setStart(data.data.start)
          constructorProps.setEnd(data.data.end)
          constructorProps.setColor({
            color1: data.data.color.color1,
            color2: data.data.color.color2,
            color3: data.data.color.color3,
          })
          setImage({
            preview: process.env.REACT_APP_UPLOADS + data.data.map,
            rew: '',
          })
          constructorProps.setLogo({
            preview: process.env.REACT_APP_UPLOADS + data.data.logo,
            rew: '',
          })
          constructorProps.setData({ table: data.data.table })
          setIsFetching(false)
        })
        .catch((err) => setErrors(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idPlace])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <ConstructorWrapper color={constructorProps.color}>
      {JSON.stringify(constructorProps.x)}
      <Link to="/">
        <Logo src={bronyaLogo} onClick={(e) => e.stopPropagation()}></Logo>
      </Link>
      <PlaceLogo logo={constructorProps.logo.preview}></PlaceLogo>
      <FrameConstructor
        id="test"
        table={table}
        places={constructorProps.data}
        image={image.preview}
        setImage={setImage}
        {...constructorProps}
        // onmousedown={(event) => showCoords(event)}
      ></FrameConstructor>
      <FormTableConstructor
        idPlace={idPlace}
        table={table}
        image={image}
        setImage={setImage}
        {...constructorProps}
      ></FormTableConstructor>
    </ConstructorWrapper>
  )
}
export default Constructor
