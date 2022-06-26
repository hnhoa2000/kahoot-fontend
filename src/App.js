import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import AddQuiz from "./components/AddQuiz.js";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addquiz" element={<AddQuiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
