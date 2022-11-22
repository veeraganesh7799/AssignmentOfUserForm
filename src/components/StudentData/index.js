import Header from '../Header'
import UserContext from '../../Context/UserContext'
import './index.css'
import UserDetail from '../UserDetail'

const StudentData = () => (
  <UserContext.Consumer>
    {value => {
      const {userList} = value
      return (
        <>
          <Header />
          <table className="table">
            <tr className="table-row-header">
              <td className="data-heading">Name</td>
              <td className="data-heading">Gender</td>
              <td className="data-heading">College Name</td>
              <td className="data-heading">Date Of Joining</td>
            </tr>

            {userList.map(each => (
              <UserDetail key={each.id} eachDetail={each} />
            ))}
          </table>
        </>
      )
    }}
  </UserContext.Consumer>
)

export default StudentData
