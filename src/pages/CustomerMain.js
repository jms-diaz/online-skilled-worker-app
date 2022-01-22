import CustomerMainSearch from "../components/customer/customerMainSearch";
import {useEffect, useState} from "react";
import CustomerCardContainer from "../components/customer/customerCardContainer";
import {getWorkers} from "../api/worker";

export default function CustomerMain() {
    const [workers, setWorkers] = useState([]);


    useEffect(() => {
        getWorkers().then((res) => {
            setWorkers(res.data);
        });
    }, []);
    
    return (
    <>
            <CustomerMainSearch/>
            <CustomerCardContainer workers={workers}/>
        </>
    )
}
