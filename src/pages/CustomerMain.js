import CustomerMainSearch from "../components/customer/customerMainSearch";
import CustomerMainCard from "../components/customer/customerMainCard";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomerCardContainer from "../components/customer/customerCardContainer";

export default function CustomerMain() {
    const [workers, setWorkers] = useState([]);


    useEffect(() => {
        const fetchWorkers = async () => {
            const res = await axios.get("/workers/all");
            setWorkers(res.data);
        }
        fetchWorkers();
    }, []);
    
    return (
    <>
            <CustomerMainSearch/>
            <CustomerCardContainer workers={workers}/>
        </>
    )
}
