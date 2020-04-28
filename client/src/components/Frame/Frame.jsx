import React, { useState } from 'react'
import {
  FrameWrapper,
  Table,
  Floor,
  TableTime,
  Time,
  InfoBar,
  Line,
} from './Frame.styles'
import { getYear, getMonth, getDate, format } from 'date-fns'
import table from './../../assets/table.svg'

const Frame = (props) => {
  const [active, setActive] = useState({ i: 0, active: false })

  const times = (start, end) => {
    let arr = []
    for (let i = start; i < end; i++) {
      arr.push(
        new Date(
          getYear(Date.now()),
          getMonth(Date.now()),
          getDate(Date.now()),
          i,
          0,
          0
        ),
        new Date(
          getYear(Date.now()),
          getMonth(Date.now()),
          getDate(Date.now()),
          i,
          30,
          0
        )
      )
    }

    return arr.map((el, index) => {
      return (
        <React.Fragment key={index}>
          <Time>{format(el, 'HH:mm')}</Time>
        </React.Fragment>
      )
    })
  }

  const tablePlace =
    !props.isFetching &&
    props.places &&
    props.places.table &&
    props.places.table.map((el, index) => {
      return (
        <div key={index}>
          <TableTime
            y={props.places.table[index].y + '%'}
            x={props.places.table[index].x + '%'}
            active={active.active}
            i={active.i}
            index={index}
          >
            <InfoBar>СТОЛ 2</InfoBar>
            <Line></Line>
            {times(10, 22)}
          </TableTime>
          <Table
            src={table}
            y={props.places.table[index].y + '%'}
            x={props.places.table[index].x + '%'}
            onClick={() => setActive({ i: index, active: true })}
          ></Table>
        </div>
      )
    })
  return props.places ? (
    <FrameWrapper>
      <Floor
        onClick={() => setActive({ i: 0, active: false })}
        wall={
          'http://192.168.1.124:4002/' + (!props.isFetching && props.places.map)
        }
      ></Floor>
      {tablePlace}
    </FrameWrapper>
  ) : (
    <FrameWrapper>Loading...</FrameWrapper>
  )
}

export default Frame
