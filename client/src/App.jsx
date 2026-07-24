import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Track";
import Track from "../src/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:id" element={<Track />} />
    </Routes>
  );
}

export default App;