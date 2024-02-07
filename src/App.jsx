import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignForm from "./components/SignForm";
import Toggle from "./components/Toggle/Toggle";
import Count from "./components/Count/Count";
export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-form" element={<SignForm />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/count" element={<Count />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
