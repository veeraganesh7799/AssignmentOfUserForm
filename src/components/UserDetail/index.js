import './index.css'

const UserDetail = props => {
  const {eachDetail} = props
  const {name, gender, collegeName, dateOfJoining} = eachDetail
  return (
    <tr className="table-row">
      <td className="data">{name}</td>
      <td className="data">{gender}</td>
      <td className="data">{collegeName}</td>
      <td className="data">{dateOfJoining}</td>
    </tr>
  )
}
export default UserDetail
