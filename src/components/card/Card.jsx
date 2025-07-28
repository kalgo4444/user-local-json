import DelBtn from '../button/DelBtn'
import UpdBtn from '../button/UpdBtn'

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((student) => (
          <article
            className="card bg-white border border-gray-300 shadow-2xs rounded-2xl text-center px-0.5 duration-300"
            key={student.id}
          >
            <div className="px-5 py-4">
              <h2 className="text-xl font-semibold">
                {student.fname} {student.lname}
              </h2>
              <div className="flex items-center justify-evenly gap-3">
                <ul className="text-left mt-10">
                  <li>Phone:</li>
                  <li>Address:</li>
                  <li>Gender:</li>
                  <li>Birthdate:</li>
                </ul>
                <ul className="text-left mt-10">
                  <li>{student.phone}</li>
                  <li>{student.address}</li>
                  <li>{student.gender}</li>
                  <li>{student.birthdate}</li>
                </ul>
              </div>
            </div>
            <div className="px-5 py-3 flex items-center justify-end gap-4">
              <UpdBtn id={student.id} />
              <DelBtn id={student.id} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Card
