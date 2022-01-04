import MainSearch from "../components/worker/mainSearch";
import {useEffect, useState} from "react";
import axios from "axios";
import MainContainer from "../components/worker/mainContainer";

export default function Main() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await axios.get("/customers/all");
            setCustomers(res.data);
        }
        fetchCustomers();
    }, []);

    return (
        <>
            <MainSearch/>
            <MainContainer customers={customers}/>
        </>
    )
}
