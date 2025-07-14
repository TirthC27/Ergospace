import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./tirth_user_workspace/pages/LoginRegForm";
import AdminPage from "./tirth_user_workspace/pages/AdminPage";
import UserPage from "./meet_user_workspace/pages/Find_your_Space_Pages/Find_your_Space";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
          <Route path="/admin/*" element={<AdminPage />} /> 
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
