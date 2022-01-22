import axios from "axios";

export const postCustomerDetails = async (customerDetails, setError, coordinates) => {
    try {
        customerDetails = {
            ...customerDetails.values,
            latitude: coordinates[0],
            longitude: coordinates[1],
            user_id: JSON.parse(localStorage.getItem("user_id"))
        };
        console.log(localStorage.getItem("user_id"));
        const res = await axios.post("/customers/details", customerDetails);
        console.log(res);
        localStorage.setItem("name", res.data.name);
        res.data && window.location.replace('/customer-sign-in')
    } catch (err) {
        setError(true);
    }
}

export const getCustomers = async () => {
    return await axios.get("/customers/all");
}

export const getCurrentCustomer = async (user_id) => {
    return await axios.get("/customers/current",{
        params: {
            user_id: user_id
        }
    });
}

export const getCreatedJobs = async (name) => {
    return await axios.get("/customers/created-jobs", {
            params: {
                name: name
            }
        }
    );
}


export const searchWorkers = async (jobTitle, location) => {
    return await axios.get("/workers/search", {
        params: {
            jobTitle: jobTitle,
            location: location
        }
    });
}

export const hireWorkers = async (jobDetails) => {
    return await axios.put("/jobs/hire", jobDetails);
}