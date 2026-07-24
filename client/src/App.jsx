import { Routes, Route } from "react-router-dom";
import Track from "../src/Pages/Track";
import Home from "../src/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:id" element={<Track />} />
    </Routes>
  );
}

export default App;