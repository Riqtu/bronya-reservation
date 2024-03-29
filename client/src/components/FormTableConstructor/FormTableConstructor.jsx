import React, { useEffect } from 'react'
import {
  FormConstructorWrapper,
  PrevInputs,
  ThisInputs,
  Input,
  FileInput,
  LargeInput,
  Upload,
} from './FormTableConstructor.styles'
import Button from '../Button'
const FormTableConstructor = (props) => {
  const keyPressHandler = (e) => {
    switch (e.keyCode) {
      case 65: //a
        props.setX(props.x - 1)
        break
      case 68: //d
        props.setX(props.x + 1)
        break
      case 83: //s
        props.setY(props.y + 1)
        break
      case 87: //w
        props.setY(props.y - 1)
        break
      // case 16: //shift
      //   pushTable()
      //   break
      case 187: //+
        pushTable()
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler)

    return () => {
      window.removeEventListener('keydown', keyPressHandler)
    }
  })

  const pushTable = () => {
    props.setData((prev) =>
      Object.assign({}, prev, {
        table: [...prev.table, { seats: props.id, x: props.x, y: props.y }],
      })
    )
  }

  const updateTableID = (e, index, x, y) => {
    const newData = props.data.table
    newData.splice(index, 1, { seats: e.target.value, x: x, y: y })
    props.setData({ table: newData })
  }
  const updateTableX = (e, index, id, y) => {
    const newData = props.data.table
    newData.splice(index, 1, { seats: id, x: e.target.value, y: y })
    props.setData({ table: newData })
  }
  const updateTableY = (e, index, id, x) => {
    const newData = props.data.table
    newData.splice(index, 1, { seats: id, x: x, y: e.target.value })
    props.setData({ table: newData })
  }

  const deleteTable = (index) => {
    const newData = props.data.table
    newData.splice(index, 1)
    props.setData({ table: newData })
  }

  const handleChange = (e) => {
    props.setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    })
  }
  const handleChangeLogo = (e) => {
    props.setLogo({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    })
    console.log(props.logo)
  }

  const handleUpload = async (e) => {
    e.preventDefault()

    props.setData((props.data.name = props.name))
    props.setData((props.data.address = props.address))
    props.setData((props.data.description = props.description))
    props.setData((props.data.color = props.color))

    props.setData((props.data.start = props.start))
    props.setData((props.data.end = props.end))

    props.setData(
      (props.data.logo = props.logo.preview.replace(
        process.env.REACT_APP_UPLOADS,
        ''
      ))
    )
    props.setData(
      (props.data.map = props.image.preview.replace(
        process.env.REACT_APP_UPLOADS,
        ''
      ))
    )

    const formData = new FormData()
    formData.append('body', JSON.stringify(props.data))
    formData.append('image', props.image.raw)
    formData.append('logo', props.logo.raw)

    console.log(props.data)

    const uploadData = props.idPlace
      ? fetch(process.env.REACT_APP_GETPLACES + props.idPlace, {
          method: 'PUT',
          body: formData,
        })
      : await fetch(process.env.REACT_APP_GETPLACES, {
          method: 'POST',
          body: formData,
        })

    props.idPlace
      ? uploadData
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
          .catch((err) => console.log(err))
      : uploadData
          .json()
          .then((data) => {
            console.log(data)
          })
          .catch((err) => console.log(err))
  }

  const tables =
    props.data &&
    props.data.table &&
    props.data.table.map((el, index) => {
      return (
        <div key={index}>
          <PrevInputs>
            <label>
              Мест
              <Input
                type="text"
                value={props.data.table[index].seats}
                onChange={(e) =>
                  updateTableID(
                    e,
                    index,
                    props.data.table[index].x,
                    props.data.table[index].y
                  )
                }
              />
            </label>
            <label>
              x
              <Input
                type="text"
                value={props.data.table[index].x}
                onChange={(e) =>
                  updateTableX(
                    e,
                    index,
                    props.data.table[index].id,
                    props.data.table[index].y
                  )
                }
              />
            </label>
            <label>
              y
              <Input
                type="text"
                value={props.data.table[index].y}
                onChange={(e) =>
                  updateTableY(
                    e,
                    index,
                    props.data.table[index].id,
                    props.data.table[index].x
                  )
                }
              />
            </label>
            <button type="button" onClick={() => deleteTable(index)}>
              del
            </button>
          </PrevInputs>
        </div>
      )
    })
  return (
    <FormConstructorWrapper>
      <ThisInputs>
        <label>
          Мест
          <Input
            type="text"
            value={parseInt(props.id)}
            onChange={(e) => props.setId(parseInt(e.target.value))}
          />
        </label>
        <label>
          x
          <Input
            type="text"
            value={parseInt(props.x)}
            onChange={(e) => props.setX(parseInt(e.target.value))}
          />
        </label>
        <label>
          y
          <Input
            type="text"
            value={props.y}
            onChange={(e) => props.setY(parseInt(e.target.value))}
          />
        </label>
      </ThisInputs>
      <LargeInput>
        <label>
          Название
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
        </label>
      </LargeInput>
      <LargeInput>
        <label>
          Адрес
          <input
            type="text"
            value={props.address}
            onChange={(e) => props.setAddress(e.target.value)}
          />
        </label>
      </LargeInput>
      <LargeInput>
        <label>
          Начало
          <input
            type="text"
            value={props.start}
            onChange={(e) => props.setStart(e.target.value)}
          />
        </label>
        <label>
          Конец
          <input
            type="text"
            value={props.end}
            onChange={(e) => props.setEnd(e.target.value)}
          />
        </label>
      </LargeInput>
      <LargeInput>
        <label>
          Первый цвет
          <input
            type="color"
            value={props.color.color1}
            onChange={(e) =>
              props.setColor({
                color1: e.target.value,
                color2: props.color.color2,
                color3: props.color.color3,
              })
            }
          />
        </label>
        <br />
        <label>
          Второй цвет
          <input
            type="color"
            value={props.color.color2}
            onChange={(e) =>
              props.setColor({
                color1: props.color.color1,
                color2: e.target.value,
                color3: props.color.color3,
              })
            }
          />
        </label>
        <br />
        <label>
          Третий цвет
          <input
            type="color"
            value={props.color.color3}
            onChange={(e) =>
              props.setColor({
                color1: props.color.color1,
                color2: props.color.color2,
                color3: e.target.value,
              })
            }
          />
        </label>
      </LargeInput>
      <LargeInput text>
        <label>
          Описание
          <input
            type="text"
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </label>
      </LargeInput>

      <FileInput>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="file">Загрузить карту</label>
        <input
          type="file"
          name="logo"
          id="logo"
          onChange={(e) => handleChangeLogo(e)}
        />
        <label htmlFor="logo">Загрузить лого</label>
      </FileInput>
      <Upload>
        <Button state="upload" onClick={handleUpload} text="Отправить" />
      </Upload>
      {tables}
    </FormConstructorWrapper>
  )
}

export default FormTableConstructor
