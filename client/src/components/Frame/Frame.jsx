import React from 'react'
import { FrameWrapper, Table, Floor } from './Frame.styles'

import table from './../../assets/table.svg'

const Frame = (props) => {
  const tablePlace =
    !props.isFetching &&
    props.places &&
    props.places.table &&
    props.places.table.map((el, index) => {
      return (
        <Table
          src={table}
          y={props.places.table[index].y + '%'}
          x={props.places.table[index].x + '%'}
        ></Table>
      )
    })
  return props.places ? (
    <FrameWrapper>
      <Floor
        wall={
          'http://localhost:4002/' + (!props.isFetching && props.places.map)
        }
      ></Floor>
      {tablePlace}
    </FrameWrapper>
  ) : (
    <FrameWrapper>Loading...</FrameWrapper>
  )
}

export default Frame
