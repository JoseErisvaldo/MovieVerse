import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
} 