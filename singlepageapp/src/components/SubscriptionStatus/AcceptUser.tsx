import { useState } from "react";
// import { REST_BASE_URL, SUBS_PAGE_SIZE } from "../../constants/constants";
import SingleUser from "./SingleUser";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InterfaceSubscription {
    subscriberID: number;
    subscriberName: string;
}

const AcceptUser = () => {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // const [subs, setSubs] = useState<InterfaceSubscription[]>([]);
    // const [subs, setSubs] = useState<number>(5);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [pageCount, setPageCount] = useState<number>(1);

    

    return (
        <>
            <ToastContainer />
            <div className="pb-44">
                <header className="text-center text-white rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgreen via-lightgreen to-verylightgreen p-4">
                    <h1 className="font-bold text-4xl">Accepted User </h1>
                </header>
                <div className="sus-table mt-0.5">
                    <SingleUser
                        subscriberName={"Rifqi"}
                        icon={"user"}
                        />
                    <SingleUser
                        subscriberName={"Michael"}
                        icon={"user"}
                        />
                </div>
            </div>
        </>
    );
};

export default AcceptUser;