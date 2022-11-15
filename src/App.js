import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Comparepage from "./Pages/Comparepage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import ProfilePage from "./Pages/ProfilePage";
import Productspage from "./Pages/Productpages/Productspage";
import Resultspage from "./Pages/Productpages/Resultspage";
import PageNotFound from "./Pages/PageNotFound";
import "./websiteTheme.css";
import { RecoilRoot } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import DetailedProductPage from "./Pages/DetailedProductPage/DetailedProductPage";

const App = () => {

  const [user] = useAuthState(auth);

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
            {user && <Route path="/profile" element={<ProfilePage />} />}
            <Route path="/laptops" element={<Productspage type="laptops" />} />
            <Route path="/laptops/:productId" element={<DetailedProductPage type="laptops"/>}></Route>
            <Route path="/smartphones" element={<Productspage type="smartphones"/>} />
            <Route path="/computers" element={<Productspage type="computers"/>} />
            <Route path="/results" element={<Resultspage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
