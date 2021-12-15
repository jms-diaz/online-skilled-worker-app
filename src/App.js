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
    const user = false;
    const employer = false;

    console.log(user && employer);
  return (
      <Router>
          <TopBar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={
                  user ? <Home /> : <Register />} />
              <Route exact path="/login" element={
                  user ? <Home /> : <Login />} />
              <Route exact path="/resume" element={
                  user ? <Home /> : <ResumePage />} />
              <Route exact path="/experience" element={
                  user ? <Home /> : <WorkExperiencePage />} />
              <Route exact path="/employer-sign-in" element={
                  user ? <Home /> : <EmployerLogin />} />
              <Route exact path="/employer-sign-up" element={
                  user ? <Home /> : <EmployerRegister />} />
              <Route exact path="/jobs" element={<Main />} />
              <Route exact path="/workers" element={
                  (user && employer) ? <EmployerMain /> : <Home />} />
          </Routes>
      </Router>
  );
}

export default App;
