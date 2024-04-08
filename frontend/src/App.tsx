
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/dashboard" element={<LandingPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
