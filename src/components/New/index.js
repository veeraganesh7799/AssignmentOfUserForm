import {Link} from 'react-router-dom'
import Header from '../Header'
import UserContext from '../../Context/UserContext'
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

const New = () => (
  <UserContext.Consumer>
    {value => {
      const {
        userNameHandler,
        userGenderHandler,
        userCollegeNameHandler,
        userDateOfJoiningHandler,
        userPercentageHandler,
        saveHandler,
        name,
        dateOfJoining,
        collegeName,
        percentage,
      } = value

      const submitForm = event => {
        event.preventDefault()
        saveHandler()
      }

      return (
        <>
          <Header />
          <div className="login-form-container">
            <h1 className="login-form-heading">Login Form</h1>
            <form className="form-container" onSubmit={submitForm}>
              <div className="input-container">
                <label className="label" htmlFor="nameInput">
                  STUDENT NAME
                </label>
                <input
                  type="text"
                  className="input-box"
                  id="nameInput"
                  value={name}
                  onChange={event => userNameHandler(event.target.value)}
                />
              </div>
              <div className="input-container-radio">
                <p className="input-label-name">Gender</p>
                <div className="input-gender-container">
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderMale"
                      name="gender"
                      value="Male"
                      onChange={event => userGenderHandler(event.target.value)}
                    />
                    <label htmlFor="genderMale">Male</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderFemale"
                      value="Female"
                      name="gender"
                      onChange={event => userGenderHandler(event.target.value)}
                    />
                    <label htmlFor="genderFemale">Female</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="genderFemale"
                      value="Others"
                      name="gender"
                      onChange={event => userGenderHandler(event.target.value)}
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
                  onChange={event => userCollegeNameHandler(event.target.value)}
                  value={collegeName}
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
                  value={dateOfJoining}
                  onChange={event =>
                    userDateOfJoiningHandler(event.target.value)
                  }
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="dateOfJoining">
                  PERCENTAGE
                </label>
                <input
                  type="number"
                  className="input-box"
                  value={percentage}
                  onChange={event => userPercentageHandler(event.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="dateOfJoining">
                  TEXT FIELD
                </label>
                <input type="text" className="input-box" />
              </div>

              <div className="buttons-container">
                <Link to="/" className="nav-link">
                  <button type="button" className="btn-back">
                    Back
                  </button>
                </Link>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      )
    }}
  </UserContext.Consumer>
)

export default New
