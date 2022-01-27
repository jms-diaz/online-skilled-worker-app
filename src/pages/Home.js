import Header from "../components/header";
import WorkerMain from "./WorkerMain";
import CustomerMain from "./CustomerMain";
import {useContext} from "react";
import {Context} from "../context/Context";

export default function Home() {
    const {user} = useContext(Context);

    const checkRole = (user) => {
        if (!user) {
            return <Header/>
        }
        else {
            if (user.role === 'worker') {
                return <WorkerMain/>
            }
            if (user.role === 'customer') {
                return <CustomerMain/>
            }
        }
    }
    return (
        checkRole(user));
}
