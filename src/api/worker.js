import axios from "axios";

export const postWorkerDetails = async (workerDetails, setError, coordinates) => {
    try {
        workerDetails = {
            ...workerDetails,
            latitude: coordinates[0],
            longitude: coordinates[1],
            user_id: localStorage.getItem("user_id")
        }
        const res = await axios.post("/workers/details", workerDetails);
        localStorage.setItem("name", res.data.fullName);

    } catch (e) {
        setError(true);
    }
};

export const postWorkerEduc = async (workerEduc, setError) => {
    try {
        workerEduc = {
            ...workerEduc,
            name: localStorage.getItem("name")
        }
        const res = await axios.post("/education/add-education", workerEduc);
        res.data && window.location.replace('/experience')
    } catch (e) {
        setError(true);
    }
};

export const postWorkerExperience = async (workerExperience, setError) => {
    try {
        workerExperience = {
            ...workerExperience.values,
            name: localStorage.getItem("name"),
        }
        const res = await axios.post("/experience/add-experience", workerExperience);
        res.data && window.location.replace('/worker-login')
    } catch (e) {
        setError(true);
    }
};

export const getWorkers = async () => {
    return await axios.get("/workers/all");
};

export const getCurrentWorker = async (user_id) => {
    return await axios.get("/workers/current", {
        params: {
            user_id: user_id
        }
    })
};

export const verifyWorker = async (name) => {
    try {
        await axios.get("workers/verify", {params: {name: name}});
    } catch (err) {
        console.log(err);
    }
};


export const getTakenJobs = async (name) => {
    return await axios.get("/workers/taken-jobs", {
        params: {
            name: name
        }
    });
}

export const applyJob  = async (jobDetails) => {
    return await axios.put("/jobs/apply", jobDetails);
}

export const searchJobs = async (jobTitle, jobLocation) => {
    return await axios.get("/jobs/search", {
        params: {
            jobTitle: jobTitle,
            jobLocation: jobLocation
        }
    });
}

export const findWorker = async (name) => {
    return await axios.get("/workers/find-one", {
        params: {
            name: name
        }
    });
}
