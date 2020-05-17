import { useState } from 'react'

export const useConstructor = () => {
  const [id, setId] = useState(0)
  const [x, setX] = useState(18)
  const [y, setY] = useState(14)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [start, setStart] = useState(10)
  const [end, setEnd] = useState(22)

  const [file, setFile] = useState({})
  // const [image, setImage] = useState({ preview: '', raw: '' })
  const [logo, setLogo] = useState({ preview: '', raw: '' })

  const [color, setColor] = useState({
    color1: '#473b7b',
    color2: '#3584a7',
    color3: '#30d2be',
  })
  const [data, setData] = useState({
    table: [],
  })

  return {
    id,
    setId,
    x,
    setX,
    y,
    setY,
    name,
    setName,
    description,
    setDescription,
    address,
    setAddress,
    start,
    setStart,
    end,
    setEnd,
    file,
    setFile,
    // image,
    // setImage,
    logo,
    setLogo,
    color,
    setColor,
    data,
    setData,
  }
}
