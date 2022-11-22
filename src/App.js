import {Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {v4} from 'uuid'
import New from './components/New'
import StudentData from './components/StudentData'
import Update from './components/Update'
import UserContext from './Context/UserContext'

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

const App = () => {
  const getLocalItems = JSON.parse(localStorage.getItem('updateFormDetails'))
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [collegeName, setCollegeName] = useState(
    collegeNamesList[0].collegeName,
  )
  const [dateOfJoining, setDateOfJoining] = useState('')
  const [percentage, setPercentage] = useState('')
  const [userList, setUserList] = useState(
    getLocalItems !== null ? getLocalItems : [],
  )

  const userNameHandler = value => {
    setName(value)
  }

  const userGenderHandler = value => {
    setGender(value)
  }

  const userCollegeNameHandler = value => {
    setCollegeName(value)
  }

  const userDateOfJoiningHandler = value => {
    setDateOfJoining(value)
  }

  const userPercentageHandler = value => {
    setPercentage(value)
  }

  const saveHandler = () => {
    setUserList([
      ...userList,
      {
        id: v4(),
        name,
        gender,
        collegeName,
        dateOfJoining,
        percentage,
      },
    ])
    setName('')
    setGender('')
    setDateOfJoining('')
  }

  useEffect(() => {
    localStorage.setItem('updateFormDetails', JSON.stringify(userList))
  })

  const updateHandler = (
    id,
    updateGender,
    updateDateOfJoining,
    updatePercentage,
    updateCollegeName,
  ) => {
    const result = userList.map(each => {
      if (each.name === id) {
        return {
          ...each,
          gender: updateGender,
          collegeName: updateCollegeName,
          dateOfJoining: updateDateOfJoining,
          percentage: updatePercentage,
        }
      }
      return each
    })
    setUserList(result)
  }
  console.log(userList)

  return (
    <>
      <UserContext.Provider
        value={{
          userList,
          name,
          gender,
          collegeName,
          dateOfJoining,
          percentage,
          userNameHandler,
          userCollegeNameHandler,
          userGenderHandler,
          userDateOfJoiningHandler,
          userPercentageHandler,
          saveHandler,
          updateHandler,
        }}
      >
        <Switch>
          <Route exact path="/login-form" component={New} />
          <Route exact path="/" component={StudentData} />
          <Route exact path="/update-form" component={Update} />
        </Switch>
      </UserContext.Provider>
    </>
  )
}

export default App
