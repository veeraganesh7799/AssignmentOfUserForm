import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/" className="link">
      <p className="nav-link">Student Data</p>
    </Link>
    <Link to="/login-form" className="link">
      <p className="nav-link">New</p>
    </Link>
    <Link to="/update-form" className="link">
      <p className="nav-link">Update</p>
    </Link>
  </nav>
)

export default Header
