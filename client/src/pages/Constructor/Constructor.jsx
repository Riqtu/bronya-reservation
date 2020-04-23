import React, { useState } from 'react'
import { FrameConstructor, FormTableConstructor } from '../../components'
import { ConstructorWrapper } from './Constructor.styles'

const Constructor = () => {
  const [id, setId] = useState(0)
  const [x, setX] = useState(18)
  const [y, setY] = useState(14)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState({})
  const [image, setImage] = useState({ preview: '', raw: '' })

  const [data, setData] = useState({
    name: name,
    description: 'TestDescription',
    table: [],
  })
  const table = {
    table: [{ id: id, x: x, y: y }],
  }

  console.log(data)
  return (
    <ConstructorWrapper>
      {JSON.stringify(data)}
      {JSON.stringify(file.path)}

      <FrameConstructor
        table={table}
        places={data}
        path={'http://192.168.1.124:4002/' + file.path}
        image={image.preview}
      ></FrameConstructor>
      <FormTableConstructor
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
        setFile={setFile}
        file={file}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      ></FormTableConstructor>
    </ConstructorWrapper>
  )
}
export default Constructor
