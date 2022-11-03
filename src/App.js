import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Comparepage from "./Pages/Comparepage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import ProfilePage from "./Pages/ProfilePage";
import Laptopspage from "./Pages/Productpages/Laptopspage";
import Smartphonespage from "./Pages/Productpages/Smartphonespage";
import Computerspage from "./Pages/Productpages/Computerspage";
import "./websiteTheme.css";

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
          <Route path="/laptops" element={<Laptopspage />} />
          <Route path="/smartphones" element={<Smartphonespage />} />
          <Route path="/computers" element={<Computerspage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
