import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Comparepage from "./Pages/Comparepage";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/compare" element={<Comparepage />} />
      </Routes>
    </div>
  );
}

export default App;
