import React, {useContext, useEffect, useMemo, useState} from 'react';
import {getCurrentWorker, getTakenJobs} from "../../api/worker";
import WorkerJobTable from "./workerJobTable";
import {Context} from "../../context/Context";

export default function ViewTransactionsWorker() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [name, setName] = useState("");
    const {user} = useContext(Context);

    useEffect(() => {
        setLoading(true);
        getCurrentWorker(user.id).then(
            r => {
                const data = r.data.worker_temp_id;
                setName(data.fullName);
            }
        )
        getTakenJobs(name).then(response => {
            const allJobs = response.data;
            const data = allJobs.map(d => (
                {
                    jobTitle: d.jobTitle,
                    createdBy: d.name,
                    jobDescription: d.jobDescription,
                    jobLocation: d.jobLocation,
                    salary: d.salary,
                    completed: d.completed ? "Completed" : "Pending",
                    status: d.paid ? "Paid" : "Pending",
                }));
            setJobs(data);
        }).catch(error => {
            setJobs([]); // reset the [] here - this is optional and is based on expected behaviour
            console.log(error);
        })
            .finally(() => setLoading(false));
    }, [name]);

    if (jobs.length === 0 && !loading) {
        return <div className="mb-5">No data available</div>;
    }

    return (
        <div className="mb-5">
            {loading && <span>Fetching data</span>}
            <WorkerJobTable data={jobs}/>
        </div>
    )
}