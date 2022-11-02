import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Comparepage from "./Pages/Comparepage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Components/Footer";
import "./Components/websiteTheme.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="static">
        <Header />
      </div>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/compare" element={<Comparepage />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
