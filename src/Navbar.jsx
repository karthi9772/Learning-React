import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/menu">Menu</Link>

    </div>
  )
}

export default Navbar