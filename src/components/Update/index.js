import {useState} from 'react'
import UserContext from '../../Context/UserContext'
import Header from '../Header'
import './index.css'

const collegeNamesList = [
  {id: 1, collegeName: 'Rack School'},
  {id: 2, collegeName: 'Roe School'},
  {id: 3, collegeName: 'James School'},
  {id: 4, collegeName: 'Abhi School'},
  {id: 5, collegeName: 'Ambika School'},
  {id: 6, collegeName: 'Creems School'},
  {id: 7, collegeName: 'Rock School'},
  {id: 8, collegeName: 'Sent School'},
  {id: 9, collegeName: 'Ravi School'},
  {id: 10, collegeName: 'Bhavi School'},
]
const Update = () => {
  const [updateCollegeName, setUpdateCollegeName] = useState(
    collegeNamesList[0].collegeName,
  )
  const [updateGender, setUpdateGender] = useState('')
  const [updateDateOfJoining, setUpdateDateOfJoining] = useState('')
  const [updatePercentage, setUpdatePercentage] = useState('')
  const [user, setUser] = useState('')
  return (
    <UserContext.Consumer>
      {value => {
        const {userList, updateHandler} = value

        const updateForm = event => {
          event.preventDefault()
          updateHandler(
            user,
            updateGender,
            updateDateOfJoining,
            updatePercentage,
            updateCollegeName,
          )
        }

        return (
          <>
            <Header />
            <select
              className="input-box-container"
              onChange={e => {
                setUser(e.target.value)
              }}
              value={user}
            >
              {userList.map(each => (
                <option key={each.id} value={each.name}>
                  {each.name}
                </option>
              ))}
            </select>
            <form className="form-user-container" onSubmit={updateForm}>
              <div className="input-container-radio">
                <p className="input-label-name">Gender</p>
                <div className="input-gender-container">
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderMale"
                      name="gender"
                      value="Male"
                      onChange={event => setUpdateGender(event.target.value)}
                    />
                    <label htmlFor="genderMale">Male</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderFemale"
                      value="Female"
                      name="gender"
                      onChange={event => setUpdateGender(event.target.value)}
                    />
                    <label htmlFor="genderFemale">Female</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderFemale"
                      value="Others"
                      name="gender"
                      onChange={event => setUpdateGender(event.target.value)}
                    />
                    <label htmlFor="genderFemale">Others</label>
                  </div>
                </div>
              </div>
              <div className="input-container">
                <label className="label" htmlFor="studentList">
                  COLLEGE NAME
                </label>
                <select
                  className="input-box"
                  id="studentList"
                  onChange={event => setUpdateCollegeName(event.target.value)}
                  value={updateCollegeName}
                >
                  {collegeNamesList.map(each => (
                    <option key={each.id} value={each.collegeName}>
                      {each.collegeName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-container">
                <label className="label" htmlFor="dateOfJoining">
                  DATE OF JOINING
                </label>
                <input
                  type="date"
                  className="input-box"
                  value={updateDateOfJoining}
                  onChange={event => setUpdateDateOfJoining(event.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="dateOfJoining">
                  PERCENTAGE
                </label>
                <input
                  type="number"
                  className="input-box"
                  value={updatePercentage}
                  onChange={event => setUpdatePercentage(event.target.value)}
                />
              </div>
              <button type="submit" className="btn-update">
                Update
              </button>
            </form>
          </>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Update
