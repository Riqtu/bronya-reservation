import React, { useEffect } from 'react'
import {
  FrameConstructorWrapper,
  Table,
  Floor,
} from './FrameConstructor.styles'

import table from './../../assets/table.svg'
const FrameConstructor = (props) => {
  function showCoords(evt) {
    let rect = document.getElementById('test').getBoundingClientRect()
    let x = rect.right - evt.clientX
    let y = rect.bottom - evt.clientY
    let pixelsX = x + 30
    let screenWidthX = rect.width
    let percentageX = ((screenWidthX - pixelsX) / screenWidthX) * 100
    let pixelsY = y + 30
    let screenWidthY = rect.height
    let percentageY = ((screenWidthY - pixelsY) / screenWidthY) * 100
    if (
      percentageY > 0 &&
      percentageY < 100 &&
      percentageX > 0 &&
      percentageX < 100
    ) {
      props.setY(percentageY)
      props.setX(percentageX)
    }
  }
  const pushTable = () => {
    props.setData((prev) =>
      Object.assign({}, prev, {
        table: [...prev.table, { seats: props.id, x: props.x, y: props.y }],
      })
    )
  }
  useEffect(() => {
    window.addEventListener('mousemove', showCoords)

    return () => {
      window.removeEventListener('mousemove', showCoords)
    }
  })
  const tablePlace =
    props.places &&
    props.places.table &&
    props.places.table.map((el, index) => {
      return (
        <Table
          key={index}
          src={table}
          y={props.places.table[index].y + '%'}
          x={props.places.table[index].x + '%'}
        ></Table>
      )
    })
  return (
    <FrameConstructorWrapper id="test" onClick={pushTable}>
      <Floor wall={props.image}></Floor>
      <Table
        src={table}
        y={props.table.table[0].y + '%'}
        x={props.table.table[0].x + '%'}
      ></Table>
      {tablePlace}
    </FrameConstructorWrapper>
  )
}

export default FrameConstructor
