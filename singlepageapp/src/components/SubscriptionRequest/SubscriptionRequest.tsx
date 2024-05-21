import { useState, useEffect } from "react";
// import { REST_BASE_URL, SUBS_PAGE_SIZE } from "../../constants/constants";
import SingleSubscription from "./SingleSubscription";
import { REST_BASE_URL } from "@/constant/constants";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../WalletManagement/Modal";
import axios from "axios";

interface InterfaceSubscription {
    subscriberID: number;
    subscriberName: string;
}

const SubscriptionRequest = () => {
    const [popUpAcc, setPopUpAcc] = useState(false);
    const [popUpRej, setPopUpRej] = useState(false);
    const [user, setUser] = useState<any>();

    useEffect(() => {

        const fetchData = async () => {
            const userData = await axios.get(
                REST_BASE_URL + '/getRegistration'
            );  
            setUser(userData.data);
        }

        fetchData();
        console.log(user);

    }, []);


    return (
        <>
            <ToastContainer />
            <div className="pb-44">
                <header className="text-white rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgreen via-lightgreen to-verylightgreen p-4">
                    <h1 className="font-bold text-4xl">Subscription Request ✨</h1>
                    <div className=" px-2">
                        <i>Accept or reject user subscription request~</i>
                    </div>
                </header>
                <div className="sus-table mt-0.5">
                    {user && user.map((element) => (
                            <SingleSubscription
                                key={element.registId}
                                subscriberName={element.username}
                                iconColor={"text-darkgreen"}
                                textColor={"text-greytext"}
                            />
                    ))}
                    <SingleSubscription
                        subscriberName={"Rifqi"}
                        iconColor={"text-darkgreen"}
                        textColor={"text-greytext"}
                        />
                    <SingleSubscription
                        subscriberName={"Michael"}
                        iconColor={"text-darkgreen"}
                        textColor={"text-greytext"}
                        />
                </div>
            </div>
        </>
    );
};

export default SubscriptionRequest;