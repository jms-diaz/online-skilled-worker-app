import React, {useEffect, useMemo, useState} from 'react';
import {getCurrentWorker, getTakenJobs} from "../../api/worker";
import WorkerJobTable from "./workerJobTable";

export default function ViewTransactionsWorker() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [name, setName] = useState("");

    const userArray = JSON.parse(sessionStorage.getItem("user"));
    const userId = userArray.id;

    useEffect(() => {
        setLoading(true);
        getCurrentWorker(userId).then(
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

    const columns = useMemo(
        () => [
            {
                Header: 'Job Title',
                accessor: 'jobTitle'
            },
            {
                Header: 'Created By',
                accessor: 'createdBy'
            },
            {
                Header: 'Description',
                accessor: 'jobDescription'
            },
            {
                Header: 'Location',
                accessor: 'jobLocation'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
            {
                Header: 'Job Status',
                accessor: 'completed'
            },
            {
                Header: 'Payment Status',
                accessor: 'status'
            }
        ],
        []
    )

    if (jobs.length === 0 && !loading) {
        return <div className="mb-5">No data available</div>;
    }

    return (
        <div className="mb-5">
            {loading && <span>Fetching data</span>}
            <WorkerJobTable columns={columns} data={jobs}/>
        </div>
    )
}