import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdBtn = ({ id }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/student/${id}`)}
      className="cursor-pointer bg-main hover:bg-main-active active:bg-main-active duration-200 px-3 py-1.5 rounded-2xl"
    >
      Update
    </button>
  )
}

export default UpdBtn
