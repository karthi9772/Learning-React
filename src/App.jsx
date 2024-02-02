import Contact from "./components/Contact"
import Home from "./components/Home"
import Menu from "./components/Menu"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>
            Page Not Found
          </h1>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App