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
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import table from './../../assets/table.svg'
import loader from './../../assets/loader.svg'

const Frame = (props) => {
  const [active, setActive] = useState({ i: 0, active: false })

  const times = (start, end, tableIndex, tableId, guest) => {
    let arr = []
    for (let i = start; i < end; i++) {
      arr.push(
        new Date(
          getYear(new Date(props.dateElement)),
          getMonth(new Date(props.dateElement)),
          getDate(new Date(props.dateElement)),
          i,
          0,
          0
        ),
        new Date(
          getYear(new Date(props.dateElement)),
          getMonth(new Date(props.dateElement)),
          getDate(new Date(props.dateElement)),
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
            format(new Date(guest[index].date), "yyyy-MM-dd'T'HH:mm") ===
              format(el, "yyyy-MM-dd'T'HH:mm")
          ) {
            skip = true
            skipCounter = 0
            match = true
            newArr.push(
              <Time key={index} disabled>
                {format(el, 'HH:mm')}
              </Time>
            )
          }
        }
        !match &&
          newArr.push(
            <Time
              key={index}
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
            format(new Date(guest[index].date), "yyyy-MM-dd'T'HH:mm") ===
              format(el, "yyyy-MM-dd'T'HH:mm")
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
        <React.Fragment key={index}>
          <TableTime
            y={props.places.table[index].y + '%'}
            x={props.places.table[index].x + '%'}
            active={active.active}
            i={active.i}
            index={index}
          >
            <InfoBar
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              СТОЛ {index}
            </InfoBar>
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
            onClick={(e) => {
              setActive({ i: index, active: true })
              e.preventDefault()
              e.stopPropagation()
            }}
          ></Table>
        </React.Fragment>
      )
    })
  return props.places ? (
    <React.Fragment>
      <FrameWrapper>
        <Floor
          onClick={() => setActive({ i: 0, active: false })}
          wall={
            process.env.REACT_APP_UPLOADS +
            (!props.isFetching && props.places.map)
          }
        ></Floor>
      </FrameWrapper>
      <FrameWrapper onClick={() => setActive({ i: 0, active: false })}>
        {tablePlace}
      </FrameWrapper>
    </React.Fragment>
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
