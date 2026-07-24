import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Track from "./Pages/Track";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:id" element={<Track />} />
    </Routes>
  );
}

export default App;