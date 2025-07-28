import { api } from '@/api'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Student = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const [_, setReload] = React.useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    api.get(`/students/${id}`).then((res) => {
      setFname(res.data?.fname)
      setLname(res.data?.lname)
      setPhone(res.data?.phone)
      setAddress(res.data?.address)
      setBirthdate(res.data?.birthdate)
    })
  }, [])

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = Object.fromEntries(formData)
    console.log(obj)

    api
      .put(`/students/${id}`, obj)
      .then(() => {
        setReload((p) => !p)
        e.target.reset()
        navigate('/')
      })
      .catch((err) => console.error(err))
      .then(() => console.log('done'))
  }

  return (
    <section className="my-10">
      <div className="container">
        <form
          onSubmit={handleUpdateSubmit}
          className="my-10 mx-auto bg-white max-w-xl w-full flex flex-col p-2 border border-gray-200 shadow-2xs rounded-2xl"
        >
          <h2 className="text-center text-2xl">Add Student Info</h2>
          <input
            onChange={(e) => setFname(e.target.value)}
            value={fname}
            className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
            type="text"
            placeholder="First name"
            name="fname"
          />
          <input
            onChange={(e) => setLname(e.target.value)}
            value={lname}
            className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
            type="text"
            placeholder="Last name"
            name="lname"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
            type="number"
            placeholder="Phone Number"
            name="phone"
          />
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
            type="text"
            placeholder="Address"
            name="address"
          />
          <input
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
            className="h-12 text-lg mt-3 border border-gray-300 outline-0 indent-5"
            type="date"
            name="birthdate"
          />
          <div className="flex items-center justify-evenly my-4">
            <label htmlFor="male" className="text-lg flex items-center gap-3">
              <span>Male</span>
              <input
                type="radio"
                required
                id="male"
                name="gender"
                value="male"
              />
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
              Update Student
            </button>
            <button
              className="w-1/2 h-12 text-lg mt-3 border border-gray-300 block mx-auto rounded-2xl hover:border-main active:border-main-active duration-200 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default React.memo(Student)
