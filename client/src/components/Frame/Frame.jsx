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
  Seats,
} from './Frame.styles'
import {
  getYear,
  getMonth,
  getDate,
  format,
  addMinutes,
  addHours,
} from 'date-fns'
import { toast } from 'react-toastify'
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
  const [disabledTable, setDisabledTable] = useState([])

  const handleFetch = useCallback((id) => {
    fetch(process.env.REACT_APP_GETRESERVATIONS + 'table/' + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsFetching(false)
      })
      .catch((err) => setErrors(err))
  }, [])

  const handleFetchTables = useCallback(() => {
    setDisabledTable([])
    fetch(
      process.env.REACT_APP_GETRESERVATIONS +
        'place/' +
        props.id +
        '/' +
        format(addHours(props.dateElement, -3), "yyyy-MM-dd'T'HH:mm:00.000'Z'")
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setDisabledTable(data.data)
        }
      })
      .catch((err) => setErrors(err))
  }, [props.id, props.dateElement])

  const handleSocket = useCallback(() => {
    const socket = io.connect(process.env.REACT_APP_ENDPOINT)

    socket.on('message', (data) => {
      console.log(data)
      if (data.action === 'update' && tableId === data.id) {
        console.log(tableId)
        handleFetch(data.id)
        handleFetchTables()

        socket.emit('message', 'Update place')
      }
    })
    socket.emit('message', 'Hello Server')
  }, [handleFetch, tableId, handleFetchTables])

  useEffect(() => {
    handleSocket()
  }, [handleFetch, handleSocket])

  useEffect(() => {
    handleFetchTables()
  }, [handleFetchTables])

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
            format(new Date(data[index].date[0]), "yyyy-MM-dd'T'HH:mm")
        )
        const findNext = arr.indexOf(
          data[index + 1] &&
            format(new Date(data[index + 1].date[0]), "yyyy-MM-dd'T'HH:mm")
        )
        if (find !== -1) {
          arr[find] = {
            date:
              data[index] &&
              format(new Date(data[index].date[0]), "yyyy-MM-dd'T'HH:mm"),
            res: true,
          }
          if (find + 1 !== findNext)
            arr[find + 1] = {
              date:
                data[index] &&
                format(
                  addMinutes(new Date(data[index].date[0]), 30),
                  "yyyy-MM-dd'T'HH:mm"
                ),
              res: true,
            }
        }
      }
    }

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
              toast.success(
                'Выбрана дата: ' + format(new Date(el), 'yyyy-MM-dd в HH:mm'),
                { position: 'bottom-center' }
              )
              props.setDate(format(new Date(el), "yyyy-MM-dd'T'HH:mm"))
              props.setTable('№' + tableIndex)
              props.setTableId(tableId)
              props.setMedia(true)
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
      const find = disabledTable.indexOf(el._id)
      let opacity = true
      if (find === -1) opacity = false
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
              {props.test}
              <Seats>МЕСТ {props.places.table[index].seats}</Seats>
            </InfoBar>
            <Line></Line>
            {!isFetching && data ? (
              generate(
                props.places.start,
                props.places.end,
                index,
                props.places.table[index]._id
              )
            ) : (
              <Loader wall={loader} />
            )}
          </TableTime>
          <Table
            dis={opacity}
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
