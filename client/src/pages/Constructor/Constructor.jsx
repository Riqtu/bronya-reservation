import React, { useState } from 'react'
import { FrameConstructor, FormTableConstructor } from '../../components'
import { ConstructorWrapper, PlaceLogo, Logo } from './Constructor.styles'
import { Link } from 'react-router-dom'

import bronyaLogo from './../../assets/logo.svg'

const Constructor = () => {
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
    description: 'TestDescription',
    table: [],
  })
  const table = {
    table: [{ id: id, x: x, y: y }],
  }

  console.log(data)
  return (
    <ConstructorWrapper color={color}>
      {JSON.stringify(data)}
      {JSON.stringify(file.path)}
      <Link to="/">
        <Logo src={bronyaLogo}></Logo>
      </Link>
      <PlaceLogo logo={logo.preview}></PlaceLogo>
      <FrameConstructor
        table={table}
        places={data}
        path={'http://192.168.1.124:4002/' + file.path}
        image={image.preview}
      ></FrameConstructor>
      <FormTableConstructor
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
