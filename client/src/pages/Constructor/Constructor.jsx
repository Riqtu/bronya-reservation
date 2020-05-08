import React, { useState, useEffect, useCallback } from 'react'
import { FrameConstructor, FormTableConstructor } from '../../components'
import { ConstructorWrapper, PlaceLogo, Logo } from './Constructor.styles'
import { Link, useParams } from 'react-router-dom'

import bronyaLogo from './../../assets/logo.svg'

const Constructor = () => {
  let { idPlace } = useParams()

  const [, setErrors] = useState(false)
  const [, setIsFetching] = useState(true)

  const [id, setId] = useState(0)
  const [x, setX] = useState(18)
  const [y, setY] = useState(14)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')

  const [file, setFile] = useState({})
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [logo, setLogo] = useState({ preview: '', raw: '' })

  const [color, setColor] = useState({
    color1: '#473b7b',
    color2: '#3584a7',
    color3: '#30d2be',
  })

  const [data, setData] = useState({
    table: [],
  })
  const table = {
    table: [{ id: id, x: x, y: y }],
  }

  const handleFetch = useCallback(() => {
    idPlace &&
      fetch(process.env.REACT_APP_GETPLACES + idPlace)
        .then((res) => res.json())
        .then((data) => {
          setIsFetching(false)
          setName(data.data.name)
          setDescription(data.data.description)
          setAddress(data.data.address)
          setColor({
            color1: data.data.color.color1,
            color2: data.data.color.color2,
            color3: data.data.color.color3,
          })
          setImage({
            preview: process.env.REACT_APP_UPLOADS + data.data.map,
            rew: '',
          })
          setLogo({
            preview: process.env.REACT_APP_UPLOADS + data.data.logo,
            rew: '',
          })
          setData({ table: data.data.table })
          setIsFetching(false)
        })
        .catch((err) => setErrors(err))
  }, [idPlace])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  console.log(data)
  return (
    <ConstructorWrapper color={color}>
      {JSON.stringify(x)}

      <Link to="/">
        <Logo src={bronyaLogo} onClick={(e) => e.stopPropagation()}></Logo>
      </Link>
      <PlaceLogo logo={logo.preview}></PlaceLogo>
      <FrameConstructor
        id="test"
        table={table}
        places={data}
        path={'http://192.168.1.124:4002/' + file.path}
        image={image.preview}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        setData={setData}

        // onmousedown={(event) => showCoords(event)}
      ></FrameConstructor>
      <FormTableConstructor
        idPlace={idPlace}
        setColor={setColor}
        color={color}
        table={table}
        data={data}
        setData={setData}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        id={id}
        setId={setId}
        setImage={setImage}
        image={image}
        setLogo={setLogo}
        logo={logo}
        setFile={setFile}
        file={file}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        address={address}
        setAddress={setAddress}
      ></FormTableConstructor>
    </ConstructorWrapper>
  )
}
export default Constructor
