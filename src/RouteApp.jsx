import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Container from "./UX/Container";
import Menu from "./Components/Menu/Menu";

export default function RouteApp() {
  return (
    <BrowserRouter>
     <Menu />
    <Container>
     
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
} 