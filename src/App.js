import WorkerRegister from "./pages/WorkerRegister";
import WorkerLogin from "./pages/WorkerLogin";
import WorkerResumePage from "./pages/WorkerResumePage";
import ExperiencePage from "./pages/ExperiencePage";
import Home from "./pages/Home";
import TopBar from "./components/topBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WorkerMain from "./pages/WorkerMain";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerMain from "./pages/CustomerMain";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import {useContext} from "react";
import {Context} from "./context/Context";
import NotFound from "./pages/NotFound";
import JobListing from "./pages/JobListing";
import TransactionsCustomer from "./pages/TransactionsCustomer";
import TransactionsWorker from "./pages/TransactionsWorker";

function App() {
    const {user} = useContext(Context);
    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route exact path="/" element={<Home/>}/>
                <Route path="/worker-register" element={
                    user ? <Home/> : <WorkerRegister/>}/>
                <Route path="/worker-login" element={
                    user ? <Home/> : <WorkerLogin/>}/>
                <Route path="/resume" element={
                    user ? <Home/> : <WorkerResumePage/>}/>
                <Route path="/experience" element={
                    user ? <Home/> : <ExperiencePage/>}/>
                <Route path="/customer-sign-in" element={
                    user ? <Home/> : <CustomerLogin/>}/>
                <Route path="/customer-sign-up" element={
                    user ? <Home/> : <CustomerRegister/>}/>
                <Route path="/customer-details" element={
                    user ? <Home/> : <CustomerDetails/>}/>
                <Route path="/add-job" element={
                    user ? <JobListing/> : <Home/>}/>
                <Route path="/view-transactions-customer" element={
                    user ? <TransactionsCustomer/> : <Home/>}/>
                <Route path="/view-transactions-worker" element={
                    user ? <TransactionsWorker/> : <Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
