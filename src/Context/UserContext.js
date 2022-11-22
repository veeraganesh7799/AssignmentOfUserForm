import React from 'react'

const UserContext = React.createContext({
  userList: [],
  userNameHandler: () => {},
  userGenderHandler: () => {},
  userCollegeNameHandler: () => {},
  userDateOfJoiningHandler: () => {},
  userPercentageHandler: () => {},
  saveHandler: () => {},
  updateHandler: () => {},
  name: '',
  gender: '',
  collegeName: '',
  dateOfJoining: '',
  percentage: '',
})
export default UserContext
