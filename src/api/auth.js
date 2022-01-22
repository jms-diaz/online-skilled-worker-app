import axios from "axios";

export const loginWorker = async (userCredentials, dispatch, setError) => {
    dispatch({type: "LOGIN_START"});

    try {
        const res = await axios.post("/users/login-worker", userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        res.data && window.location.replace('/jobs')
    } catch (err) {
        setError(true);
        dispatch({type: "LOGIN_FAIL", payload: err});
    }
}

export const registerWorker = async (userCredentials, setError) => {
    try {
        const res = await axios.post("/users/register-worker", userCredentials);
        console.log(res);
        localStorage.setItem("user_id", res.data.user_id);
        res.data && window.location.replace('/resume');
    } catch (e) {
        setError(true);
    }
}

export const loginCustomer = async (userCredentials, dispatch, setError) => {
    dispatch({type: "LOGIN_START"});

    try {
        const res = await axios.post("/users/login-customer", userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        res.data && window.location.replace('/workers');
    } catch (err) {
        setError(true);
        dispatch({type: "LOGIN_FAIL", payload: err});
    }
}

export const registerCustomer = async (userCredentials, setError) => {
    try {
        const res = await axios.post("/users/register-customer", userCredentials);
        localStorage.setItem("user_id", JSON.stringify(res.data.user_id));
        res.data && window.location.replace('/customer-details');
    } catch (e) {
        setError(true);
    }
}

export const loginAdmin = async (adminCredentials, dispatch, setError) => {
    dispatch({type: "LOGIN_START"});

    try {
        const res = await axios.post("/users/login-admin", adminCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        res.data && window.location.replace('/dashboard');
    } catch (err) {
        setError(true);
        dispatch({type: "LOGIN_FAIL", payload: err});
    }
}

export const getProfilePhoto = async() => {
    try {
       
    } catch (err) {

    }
}

export const uploadPhoto = async (data) => {
    try {
        await axios.post("/upload", data);
    } catch (err) {
        console.log(err);
    }
}
