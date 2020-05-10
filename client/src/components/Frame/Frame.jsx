import React, { useState, useCallback, useEffect } from 'react'
import {
  FrameWrapper,
  Table,
  Floor,
  TableTime,
  Time,
  InfoBar,
  Line,
  Loader,
} from './Frame.styles'
import { getYear, getMonth, getDate, format, addMinutes } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import table from './../../assets/table.svg'
import loader from './../../assets/loader.svg'
import io from 'socket.io-client'

const Frame = (props) => {
  const [active, setActive] = useState({ i: 0, active: false })
  const [data, setData] = useState({})
  const [, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [tableId, setTableId] = useState('')

  const handleFetch = useCallback((id) => {
    fetch(process.env.REACT_APP_GETRESERVATIONS + 'table/' + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsFetching(false)
        console.log(data.data)
      })
      .catch((err) => setErrors(err))
  }, [])

  const handleSocket = useCallback(() => {
    const socket = io.connect(process.env.REACT_APP_ENDPOINT)

    socket.on('message', (data) => {
      console.log(data)
      if (data.action === 'update' && tableId === data.id) {
        console.log(tableId)
        handleFetch(data.id)
        socket.emit('message', 'Update place')
      }
    })
    socket.emit('message', 'Hello Server')
  }, [handleFetch, tableId])

  useEffect(() => {
    // handleFetch()
    handleSocket()
  }, [handleFetch, handleSocket])

  const generate = (start, end, tableIndex, tableId) => {
    let arr = []
    for (let i = start; i < end; i++) {
      const thisDate = new Date(
        getYear(new Date(props.dateElement)),
        getMonth(new Date(props.dateElement)),
        getDate(new Date(props.dateElement)),
        i,
        0,
        0
      )
      arr.push(
        format(thisDate, "yyyy-MM-dd'T'HH:mm"),
        format(addMinutes(thisDate, 30), "yyyy-MM-dd'T'HH:mm")
      )
    }

    if (data) {
      for (let index = 0; index < data.length; index++) {
        const find = arr.indexOf(
          data[index] &&
            format(new Date(data[index].date), "yyyy-MM-dd'T'HH:mm")
        )
        const findNext = arr.indexOf(
          data[index + 1] &&
            format(new Date(data[index + 1].date), "yyyy-MM-dd'T'HH:mm")
        )
        if (find !== -1) {
          arr[find] = {
            date:
              data[index] &&
              format(new Date(data[index].date), "yyyy-MM-dd'T'HH:mm"),
            res: true,
          }
          if (find + 1 !== findNext)
            arr[find + 1] = {
              date:
                data[index] &&
                format(
                  addMinutes(new Date(data[index].date), 30),
                  "yyyy-MM-dd'T'HH:mm"
                ),
              res: true,
            }
        }
      }
    }

    console.log(props.date)

    let retrurnArr = []

    arr.map((el, index) => {
      if (el && el.res === true) {
        retrurnArr.push(
          <Time key={index} disabled active={active.active}>
            {format(new Date(el.date), 'HH:mm')}
          </Time>
        )
      } else {
        retrurnArr.push(
          <Time
            key={index}
            active={active.active}
            onClick={(e) => {
              props.setDate(format(new Date(el), "yyyy-MM-dd'T'HH:mm"))
              props.setTable(tableIndex)
              props.setTableId(tableId)
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {format(new Date(el), 'HH:mm')}
          </Time>
        )
      }
      return null
    })

    return retrurnArr
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
            {!isFetching && data ? (
              generate(
                10,
                22,
                index,
                props.places.table[index]._id,
                props.places.table[index].guest
              )
            ) : (
              <Loader wall={loader} />
            )}
          </TableTime>
          <Table
            src={table}
            y={props.places.table[index].y + '%'}
            x={props.places.table[index].x + '%'}
            onClick={(e) => {
              setIsFetching(true)
              setActive({ i: index, active: true })
              handleFetch(props.places.table[index]._id)
              setTableId(props.places.table[index]._id)
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
      <FrameWrapper
        onClick={() => {
          setIsFetching(true)
          setActive({ i: 0, active: false })
        }}
      >
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
