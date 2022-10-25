import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <div>
      <div>Header</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
