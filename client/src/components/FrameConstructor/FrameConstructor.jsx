import React from 'react'
import {
  FrameConstructorWrapper,
  Table,
  Floor,
} from './FrameConstructor.styles'

import table from './../../assets/table.svg'
const FrameConstructor = (props) => {
  const tablePlace = props.places.table.map((el, index) => {
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
    <FrameConstructorWrapper>
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
