import React, { useState, useCallback, useEffect } from 'react'
import { TimeCardWrapper, Time, InfoBar, Line } from './TimeCard.styles'
import { getYear, getMonth, getDate, format, addMinutes } from 'date-fns'
import io from 'socket.io-client'

const TimeCard = (props) => {
  const [data, setData] = useState({})
  const [, setErrors] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  const handleFetch = useCallback(() => {
    fetch(process.env.REACT_APP_GETRESERVATIONS + 'table/' + props.tableId)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsFetching(false)
      })
      .catch((err) => setErrors(err))
  }, [props.tableId])

  const handleSocket = useCallback(() => {
    const socket = io.connect(process.env.REACT_APP_ENDPOINT)

    socket.on('message', (data) => {
      console.log(data)
      if (data.action === 'update' && props.tableId === data.id) {
        console.log(props.tableId)
        handleFetch(data.id)
        socket.emit('message', 'Update place')
      }
    })
    socket.emit('message', 'Hello Server')
  }, [handleFetch, props.tableId])

  useEffect(() => {
    handleFetch()
    handleSocket()
  }, [handleFetch, handleSocket])

  const generate = (start, end, tableIndex, tableId) => {
    let arr = []
    for (let i = start; i < end; i++) {
      const thisDate = new Date(
        getYear(new Date()),
        getMonth(new Date()),
        getDate(new Date()),
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
        console.log(find, findNext)
        if (find !== -1) {
          arr[find] = {
            date:
              data[index] &&
              format(new Date(data[index].date[0]), "yyyy-MM-dd'T'HH:mm"),
            res: true,
            name: data[index].guestName,
            id: data[index]._id,
            tableId: data[index].tableId,
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
              name: data[index].guestName,
              id: data[index]._id,
              tableId: data[index].tableId,
              next: true,
            }
        }
      }
    }

    let retrurnArr = []

    arr.map((el, index) => {
      if (el && el.res === true) {
        retrurnArr.push(
          <Time
            key={index}
            disabled={el.next}
            onClick={(e) => {
              e.stopPropagation()

              showInfo(e, el.name)
              props.setInputDelete(el.id)
              props.setInputName(el.name)
              props.setInfoActive({ active: true, emptyTable: false })
            }}
          >
            {format(new Date(el.date), 'HH:mm')}
          </Time>
        )
      } else {
        retrurnArr.push(
          <Time
            empty
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              showInfo(e)
              props.setInputName('')
              props.setInputUpload({
                name: el.guestName,
                date: format(new Date(el), "yyyy-MM-dd'T'HH:mm"),
                tableId: tableId,
              })
              props.setInfoActive({ active: true, emptyTable: true })
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

  const showInfo = (evt) => {
    let x = evt.pageX
    let y = evt.pageY
    props.setInfoCoord({ x: x, y: y })
  }
  if (!isFetching)
    return (
      <TimeCardWrapper
        onClick={() => props.setInfoActive({ active: false, emptyTable: true })}
      >
        <InfoBar>СТОЛ {props.tableIndex}</InfoBar>
        <Line></Line>
        {generate(10, 20, props.tableIndex, props.tableId)}
        {/* <Info active={infoActive} x={infoCoord.x} y={infoCoord.y}></Info> */}
      </TimeCardWrapper>
    )
  else return <div></div>
}

export default TimeCard
