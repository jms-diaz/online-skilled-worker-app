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
        localStorage.setItem("user_id", JSON.stringify(res.data.user_id));
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

export const postCustomerDetails = async (customerDetails, setError, coordinates) => {
    try {
        customerDetails = {
            ...customerDetails.values,
            user_id: JSON.parse(localStorage.getItem("user_id")),
            latitude: coordinates[0],
            longitude: coordinates[1]
        };
        localStorage.setItem("coordinates",coordinates);
        const res = await axios.post("/customers/details", customerDetails);
        res.data && window.location.replace('/customer-sign-in')
    } catch (e) {
        setError(true);
    }
}

export const postWorkerDetails = async (workerDetails, setError, coordinates) => {
    try {
        let details;
        details = {
            ...workerDetails.values.detailsForm,
            ...workerDetails.values.educationForm,
            user_id: JSON.parse(localStorage.getItem("user_id")),
            latitude: coordinates[0],
            longitude: coordinates[1],
        }
        localStorage.setItem("coordinates",coordinates);
        const res = await axios.post("/workers/details", details);
        res.data && window.location.replace('/experience')
    } catch (e) {
        setError(true);
    }
}

export const postWorkerExperience = async (workerExperience, setError) => {
    try {
        workerExperience = {
            ...workerExperience.values,
            user_id: JSON.parse(localStorage.getItem("user_id")),
        }
        const res = await axios.post("/workers/experience", workerExperience);
        res.data && window.location.replace('/worker-login')
    } catch (e) {
        setError(true);
    }
}

export const uploadPhoto = async (data) => {
    try {
        await axios.post("/upload", data);
    } catch (err) {
        console.log(err);
    }
}

export const calculateManhattanDistance = ([latitude, longitude]) => {

    const coordinates = localStorage.getItem("coordinates").split(',');
    const initialLat = toRadians(latitude);
    const initialLon = toRadians(longitude);

    const finalLat = toRadians(coordinates[0]);
    const finalLon = toRadians(coordinates[1]);

    // convert to radians
    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }

    // radius of Earth in km
    const R = 6371;

    // haversine formula for delta_lat
    const dLat = initialLat - finalLat;
    const lat_a = Math.sin(dLat / 2) ** 2;
    const lat_c = 2 * Math.atan2(Math.sqrt(lat_a), Math.sqrt(1 - lat_a));
    const lat_d = lat_c * R;

    // haversine formula for delta_lon
    const dLon = initialLon - finalLon;
    const lon_a = Math.sin(dLon / 2) ** 2;
    const lon_c = 2 * Math.atan2(Math.sqrt(lon_a), Math.sqrt(1 - lon_a));
    const lon_d = lon_c * R;

    // calculate distance
    let distance = lat_d + lon_d;
    distance = distance * 1000;
    distance = Math.round(distance / 100) * 100;
    return distance;
}

