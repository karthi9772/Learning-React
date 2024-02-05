import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const App = () => {
  const [userName, SetUserName] = useState("karthi");

  return (
    <div>
      <AppContext.Provider value={{ userName, SetUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
