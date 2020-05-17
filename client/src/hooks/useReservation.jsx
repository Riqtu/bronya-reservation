import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

export const useReservation = () => {
  let { id } = useParams()
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd'T'hh:mm"))
  const [table, setTable] = useState('')
  const [tableId, setTableId] = useState('')

  return { id, date, setDate, table, setTable, tableId, setTableId }
}
