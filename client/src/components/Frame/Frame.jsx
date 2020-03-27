import React from 'react'
import { FrameWrapper, Table, Floor, Wall } from './Frame.styles'

import table from './../../assets/table.svg'

const Frame = () => (
  <FrameWrapper>
    <Floor>
      <Wall>Бар</Wall>
    </Floor>
    <Table src={table} y="41%"></Table>
    <Table src={table} y="48%" x="10%"></Table>
    <Table src={table} y="9%" x="46%"></Table>
  </FrameWrapper>
)

export default Frame
