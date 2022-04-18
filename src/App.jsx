import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toast } from "./components";
import { SignIn, SignUp } from "./pages";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Toast position="top-right" />
    </div>
  );
}

export default App;
