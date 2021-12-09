import Register from "./pages/Register";
import Login from "./pages/Login";
import ResumePage from "./pages/ResumePage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import Home from "./pages/Home";
import EmployerRegister from "./pages/EmployerRegister";
import EmployerLogin from "./pages/EmployerLogin";
import TopBar from "./components/topBar";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Main from "./pages/Main";
import EmployerMain from "./pages/EmployerMain";

function App() {
  return (
      <Router>
          <TopBar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/resume" element={<ResumePage />} />
              <Route exact path="/experience" element={<WorkExperiencePage />} />
              <Route exact path="/employer-sign-in" element={<EmployerLogin />} />
              <Route exact path="/employer-sign-up" element={<EmployerRegister />} />
              <Route exact path="/jobs" element={<Main />} />
              <Route exact path="/workers" element={<EmployerMain />} />
          </Routes>
      </Router>
  );
}

export default App;
