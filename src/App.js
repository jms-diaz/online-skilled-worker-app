import Register from "./pages/Register";
import Login from "./pages/Login";
import ResumePage from "./pages/ResumePage";
import ExperiencePage from "./pages/ExperiencePage";
import Home from "./pages/Home";
import TopBar from "./components/topBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerMain from "./pages/CustomerMain";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import {useContext} from "react";
import {Context} from "./context/Context";
import NotFound from "./pages/NotFound";

function App() {
    const {user} = useContext(Context);
    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route exact path="/" element={<Home/>}/>
                <Route path="/worker-register" element={
                    user ? <Home/> : <Register/>}/>
                <Route path="/worker-login" element={
                    user ? <Home/> : <Login/>}/>
                <Route path="/resume" element={
                    user ? <Home/> : <ResumePage/>}/>
                <Route path="/experience" element={
                    user ? <Home/> : <ExperiencePage/>}/>
                <Route path="/customer-sign-in" element={
                    user ? <Home/> : <CustomerLogin/>}/>
                <Route path="/customer-sign-up" element={
                    user ? <Home/> : <CustomerRegister/>}/>
                <Route path="/customer-details" element={
                    user ? <Home/> : <CustomerDetails/>}/>
                <Route path="/jobs" element={
                    user ? <Main/> : <Home/>}/>
                <Route path="/workers" element={
                    user ? <CustomerMain/> : <Home props={user}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
