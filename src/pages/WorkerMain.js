import WorkerMainSearch from "../components/worker/workerMainSearch";
import {useEffect, useState} from "react";
import WorkerCardContainer from "../components/worker/workerCardContainer";
import {getPendingJobs} from "../api/jobs";

export default function WorkerMain() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getPendingJobs().then((res) => {
            setJobs(res.data);
        })
    }, []);

    return (
        <>
            <WorkerMainSearch/>
            <WorkerCardContainer jobs={jobs}/>
        </>
    )
}
