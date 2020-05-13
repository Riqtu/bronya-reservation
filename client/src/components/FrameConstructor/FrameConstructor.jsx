import React, { useEffect } from 'react'
import {
  FrameConstructorWrapper,
  Table,
  Floor,
} from './FrameConstructor.styles'

import table from './../../assets/table.svg'
const FrameConstructor = (props) => {
  function showCoords(evt) {
    var rect = document.getElementById('test').getBoundingClientRect()
    var x = rect.right - evt.clientX
    var y = rect.bottom - evt.clientY
    var pixelsX = x + 30
    var screenWidthX = rect.width
    var percentageX = ((screenWidthX - pixelsX) / screenWidthX) * 100
    var pixelsY = y + 30
    var screenWidthY = rect.height
    var percentageY = ((screenWidthY - pixelsY) / screenWidthY) * 100
    // alert('Left: ' + x + ', Top: ' + x)
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
