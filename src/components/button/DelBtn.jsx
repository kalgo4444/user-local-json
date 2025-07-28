import { api } from '@/api'
import React from 'react'

const DelBtn = ({ id }) => {
  const handleDelete = (id) => {
    api.delete(`/students/${id}`)
  }
  return (
    <button
      onClick={() => handleDelete(id)}
      className="cursor-pointer bg-main hover:bg-main-active active:bg-main-active duration-200 px-3 py-1.5 rounded-2xl"
    >
      Delete
    </button>
  )
}

export default DelBtn
