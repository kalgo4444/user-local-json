import React from 'react'
import { api } from '@/api'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [_, setReload] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    api.post('/students', data).then(() => {
      setReload((p) => !p)
      e.target.reset()
      navigate('/')
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-xl w-full my-10 mx-auto flex flex-col p-2 border border-gray-200 shadow-2xs rounded-2xl"
      >
        <h2 className="text-center text-2xl">Add Student Info</h2>
        <input
          required
          className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
          type="text"
          placeholder="First name"
          name="fname"
        />
        <input
          required
          className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
          type="text"
          placeholder="Last name"
          name="lname"
        />
        <input
          required
          className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
          type="number"
          placeholder="Phone Number"
          name="phone"
        />
        <input
          required
          className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
          type="text"
          placeholder="Address"
          name="address"
        />
        <input
          required
          className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
          type="date"
          name="birthdate"
        />
        <div className="flex items-center justify-evenly my-4">
          <label htmlFor="male" className="text-lg flex items-center gap-3">
            <span>Male</span>
            <input type="radio" required id="male" name="gender" value="male" />
          </label>
          <label htmlFor="female" className="text-lg flex items-center gap-3">
            <span>Female</span>
            <input
              type="radio"
              required
              id="female"
              name="gender"
              value="female"
            />
          </label>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="w-1/2 h-12 text-lg mt-3 border border-gray-300 block mx-auto rounded-2xl hover:border-main active:border-main-active duration-200 cursor-pointer">
            Add Student
          </button>
        </div>
      </form>
    </>
  )
}

export default React.memo(Form)
