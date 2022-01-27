import axios from "axios";

export const postJob = async (jobDetails, coordinates, name) => {
    try {
        jobDetails = {
            ...jobDetails.values,
            name: name,
            latitude: coordinates[0],
            longitude: coordinates[1]
        }
        const res = await axios.post("jobs/create-job", jobDetails);
        res.data && window.location.replace('/workers');
    } catch (err) {
        console.log(err);
    }
}

export const getJobs = async () => {
    try {
        return await axios.get("jobs/all");
    } catch (err) {
        console.log(err);
    }
}

export const getPendingJobs = async () => {
    try {
        return await axios.get("jobs/pending");
    } catch (err) {
        console.log(err);
    }
}

export const markJobAsComplete = async (jobDetails) => {
    try {
        await axios.put("jobs/mark-as-complete", jobDetails);
    } catch (err) {
        console.log(err);
    }
}

export const markJobAsPaid = async (jobDetails) => {
    try {
        await axios.put("jobs/mark-as-paid", jobDetails);
    } catch (err) {
        console.log(err);
    }
}

