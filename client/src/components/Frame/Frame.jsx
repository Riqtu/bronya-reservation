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
import loader from './../../assets/loader.svg'

const Frame = (props) => {
  const [active, setActive] = useState({ i: 0, active: false })

  const times = (start, end, tableIndex, tableId, guest) => {
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
    let skip = false
    let skipCounter = 0
    return arr.map((el, index) => {
      const newArr = []
      if (!skip) {
        let match = false
        for (let index = 0; index < arr.length; index++) {
          if (
            guest[index] &&
            format(new Date(guest[index].date), 'HH:mm') === format(el, 'HH:mm')
          ) {
            skip = true
            skipCounter = 0
            match = true
            newArr.push(
              <Time key={guest[index].name} disabled>
                {format(el, 'HH:mm')}
              </Time>
            )
          }
        }
        !match &&
          newArr.push(
            <Time
              key={tableId}
              onClick={() => {
                props.setDate(format(el, "yyyy-MM-dd'T'HH:mm"))
                props.setTable(tableIndex)
                props.setTableId(tableId)
              }}
            >
              {format(el, 'HH:mm')}
            </Time>
          )
        return newArr
      } else {
        newArr.push(
          <Time key={index} disabled>
            {format(el, 'HH:mm')}
          </Time>
        )
        for (let index = 0; index < arr.length; index++) {
          if (
            guest[index] &&
            format(new Date(guest[index].date), 'HH:mm') === format(el, 'HH:mm')
          ) {
            skipCounter--
          }
        }
        if (skipCounter === 0) {
          skip = false
          skipCounter = 0
        }
        skipCounter++

        return newArr
      }
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
            <InfoBar>СТОЛ {index}</InfoBar>
            <Line></Line>
            {times(
              10,
              22,
              index,
              props.places.table[index]._id,
              props.places.table[index].guest
            )}
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
          process.env.REACT_APP_UPLOADS +
          (!props.isFetching && props.places.map)
        }
      ></Floor>
      {tablePlace}
    </FrameWrapper>
  ) : (
    <FrameWrapper>
      <Floor
        onClick={() => setActive({ i: 0, active: false })}
        wall={loader}
      ></Floor>
    </FrameWrapper>
  )
}

export default Frame
