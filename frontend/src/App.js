import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrow from "./components/Borrow";
import Explore from "./components/Explore";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}
