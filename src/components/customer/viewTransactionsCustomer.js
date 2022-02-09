import React, {useContext, useEffect, useState} from 'react';
import {getCreatedJobs, getCurrentCustomer} from "../../api/customer";
import CustomerJobTable from "./customerJobTable";
import {Context} from "../../context/Context";

export default function ViewTransactionsCustomer() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [name, setName] = useState("")
    const {user} = useContext(Context);

    useEffect(() => {
        setLoading(true);
        getCurrentCustomer(user.id).then(
            r => {
                const data = r.data.customer_temp_id;
                setName(data.name);
            }
        )
        getCreatedJobs(name).then(response => {
            const allJobs = response.data;
            const data = allJobs.jobsCreated.map(d => (
                {
                jobTitle: d.jobTitle,
                jobDescription: d.jobDescription,
                jobLocation: d.jobLocation,
                salary: d.salary,
                worker: d.takenBy,
                completed: d.completed ? "Completed" : "Pending",
                status: d.paid ? "Paid" : "Pending",
                }));
            setJobs(data);
        }).catch(error => {
            setJobs([]); // reset the [] here - this is optional and is based on expected behaviour
            console.log(error);
        })
            .finally(() => setLoading(false));
    }, [name, user]);


    if (jobs.length === 0 && !loading) {
        return <div className="mb-5">No data available</div>;
    }

    return (
        <div className="mb-5">
            {loading && <span>Fetching data</span>}
            <CustomerJobTable data={jobs} />
        </div>
    )
}