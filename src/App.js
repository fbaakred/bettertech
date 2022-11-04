import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Comparepage from "./Pages/Comparepage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import ProfilePage from "./Pages/ProfilePage";
import "./websiteTheme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/compare" element={<Comparepage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
