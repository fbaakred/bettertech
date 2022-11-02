import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/websiteTheme.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="static">
        <Header />
      </div>
      <div className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
