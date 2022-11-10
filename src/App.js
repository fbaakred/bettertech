import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Comparepage from "./Pages/Comparepage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import ProfilePage from "./Pages/ProfilePage";
import Productspage from "./Pages/Productpages/Productspage";
import Resultspage from "./Pages/Productpages/Resultspage";
import "./websiteTheme.css";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/compare" element={<Comparepage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/laptops" element={<Productspage type="laptops" />} />
            <Route path="/smartphones" element={<Productspage type="smartphones"/>} />
            <Route path="/computers" element={<Productspage type="computers"/>} />
            <Route path="/results" element={<Resultspage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
