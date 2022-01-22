import React, {useEffect, useMemo, useState} from 'react';
import {getCreatedJobs, getCurrentCustomer} from "../../api/customer";
import CustomerJobTable from "./customerJobTable";
import {getCurrentWorker} from "../../api/worker";

export default function ViewTransactionsCustomer() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [name, setName] = useState("");

    const userArray = JSON.parse(sessionStorage.getItem("user"));
    const userId = userArray.id;

    useEffect(() => {
        setLoading(true);
        getCurrentCustomer(userId).then(
            r => {
                const data = r.data.customer_temp_id;
                console.log(r)
                setName(data.name);
            }
        )
        getCreatedJobs(name).then(response => {
            const allJobs = response.data;
            const data = allJobs.map(d => (
                {
                jobTitle: d.jobTitle,
                jobDescription: d.jobDescription,
                jobLocation: d.jobLocation,
                salary: d.salary,
                worker: d.takenBy,
                status: d.completed ? "Completed" : "Pending",
            }));
            console.log(data);
            setJobs(data);
        }).catch(error => {
            setJobs([]); // reset the [] here - this is optional and is based on expected behaviour
            console.log(error);
        })
            .finally(() => setLoading(false));
    }, [name, userId]);

    const columns = useMemo(
        () => [
            {
                Header: 'Job Title',
                accessor: 'jobTitle'
            },
            {
                Header: 'Job Description',
                accessor: 'jobDescription'
            },
            {
                Header: 'Job Location',
                accessor: 'jobLocation'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
            {
                Header: 'Worker',
                accessor: 'worker'
            },
            {
                Header: 'Status',
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
            <CustomerJobTable columns={columns} data={jobs}/>
        </div>
    )
}