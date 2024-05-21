import React, { useState } from 'react';
import ModalSub from './ModalSub';
import { FaWallet } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface InterfaceSubscription {
    subscriberName: string;
    iconColor: string;
    textColor: string;
}

const SingleSubscription = ({ subscriberName, iconColor, textColor }: InterfaceSubscription) => {
    const [showAcceptModal, setShowAcceptModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);

    const showToastSuccessAcc = () => {
        toast.success("User successfully accepted! 😍");
    };

    const showToastFailureAcc = () => {
        toast.error("User failed to be accepted. 😭");
    };
    
    const showToastSuccessRej = () => {
        toast.error("User successfully rejected. 😭");
    };

    const showToastFailureRej = () => {
        toast.success("User failed to be rejected! 😍");
    };

    const handleAcceptClick = () => {
        setShowAcceptModal(true);
    };

    const handleRejectClick = () => {
        setShowRejectModal(true);
    };

    const handleAccept = () => {
        if (Math.random() < 0.5) {
            showToastSuccessAcc();

        } else {
            showToastFailureAcc();
        }
        setShowAcceptModal(false);
    };

    const handleReject = () => {
        if (Math.random() < 0.5) {
            showToastSuccessRej();

        } else {
            showToastFailureRej();
        }
        setShowRejectModal(false);
    };

    return (
        <div className={`flex flex-col bg-white text-black my-4 mx-2 md:mx-4 p-4 border shadow-lg rounded-lg`}>
            <div className="flex md:flex-row items-center">
                <div className='flex flex-row items-center'>
                    <span className={`${iconColor} mr-1 text-6xl`}><FaWallet /></span>
                    <div className="flex items-left flex-col justify-between w-full">
                        <span className={`font-semibold ml-2 text-2xl ${textColor}`}>{subscriberName}</span>
                    </div>
                </div>
                <div className="flex items-end flex-col justify-end w-full space-y-2">
                    <button
                        className="py-2 px-2 bg-darkgreen hover:bg-lightgreen text-white font-bold border rounded-sm mr-3"
                        onClick={handleAcceptClick}
                    >
                        Accept
                    </button>
                    <button
                        className="py-2 px-2 bg-red hover:bg-lightred text-white font-bold border rounded-sm mr-3"
                        onClick={handleRejectClick}
                    >
                        Reject
                    </button>
                </div>
            </div>

            {showAcceptModal && (
                <ModalSub
                setPopUp={setShowAcceptModal}
                handleValid={handleAccept}
                modalTitle="ACCEPT"
                modalText={`accept the subscription request from ${subscriberName}`}
                modalTextIng="accepting"
                />
            )}

            {showRejectModal && (
                <ModalSub
                setPopUp={setShowRejectModal}
                handleValid={handleReject}
                modalTitle="REJECT"
                modalText={`reject the subscription  request from ${subscriberName}`}
                modalTextIng="rejecting"
                />
            )}
            <ToastContainer />
        </div>
    );
};

export default SingleSubscription;
