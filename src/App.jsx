import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import AddFolder from "./pages/AddFolder";
import Trash from "./pages/Trash";
import Starred from "./pages/Starred";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/" element={<Home />} />
          <Route path="/add-folder" element={<AddFolder />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/starred" element={<Starred />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
