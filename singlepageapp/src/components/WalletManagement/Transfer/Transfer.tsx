import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import Logo from '../../../assets/logo-color.svg'
import NotificationCenter from "../Notification/NotificationCenter";
import ButtonNumber from "../ButtonNumber";
import ReceiptSingle from "./ReceiptSingle";
import Modal from "../Modal";

const Transfer = () => {
    const [balance, setBalance] = useState(1000);
    const [transferAmount, setTransferAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
    const [iWaletNumber, setiWaletNumber] = useState("");
    const [transactionStatus, setTransactionStatus] = useState(""); 
    const [receipt, setReceipt] = useState("");
    const [senderName, setSenderName] = useState("John Doe");
    const [senderIwaletID, setSenderIwaletID] = useState("12345678");
    const [receiverName, setReceiverName] = useState("Jane Smith");
    const [receiverIwaletID, setReceiverIwaletID] = useState("87654321");
    const [transactionCode, setTransactionCode] = useState("");
    const [receiptVisible, setReceiptVisible] = useState(false);
    const [popUp, setPopUp] = useState(false)

    const generateTransactionCode = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 8; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters.charAt(randomIndex);
        }
        return code;
    };

    const trimReceiverName = (name) => {
        const firstChar = name[0];
        const lastChar = name[name.length - 1];
        const stars = "*".repeat(name.length - 2);
        return `${firstChar}${stars}${lastChar}`;
    };

    const showToastSuccess = () => {
        toast.success("Transfer successful! 😍");
    };

    const showToastFailure = () => {
        toast.error("Transfer failed. 😭");
    };

    const formatNumber = (value) => {
        return Intl.NumberFormat().format(value);
    };

    const handleTransfer = (amount) => {
        setTransferAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handleiWaletChange = (event) => {
        setiWaletNumber(event.target.value);
    };

    const handleTransferValid = () => {
        if (isTransferValid) {
            if (Math.random() < 0.5) {
                showToastSuccess();
                setTransactionStatus("Transaksi berhasil");
                setReceipt(`${transferAmount}`);
                setSenderIwaletID("12345678"); 
                setReceiverIwaletID("87654321");
                setReceiverName(trimReceiverName(receiverName));
                setTransactionCode(generateTransactionCode());
                setReceiptVisible(true);
            } else {
                showToastFailure();
                setReceiptVisible(false);
            }
        }
    };

    const isTransferValid = transferAmount > 0 && iWaletNumber.length === 8;

    return (
        <>
            <ToastContainer />
            <div>
                <div className="text-xl md:text-3xl text-white mx-auto my-auto font-semibold rounded-lg flex items-center justify-between p-2 md:p-5 max-w-screen-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgreen via-lightgreen to-verylightgreen">
                    <div className="flex items-center space-x-4">
                        <FaWallet className="mr-2" />
                        <span>
                        Current Balance:&nbsp;<span className="font-thin">350.000</span>
                        </span>
                    </div>
                    <NotificationCenter />
                </div>
                <div className="rounded-xl border border-darkgreen mt-4 shadow-lg flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <h1 className="text-4xl font-semibold mb-2">Transfer Amount:</h1>

                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                value={formatNumber(transferAmount)} // Format the value with thousands separators
                                onChange={(e) => {
                                    const inputValue = e.target.value.replace(/,/g, '');
                                    const newAmount = inputValue === "" ? 0 : parseInt(inputValue, 10);
                                    setTransferAmount(newAmount);
                                }}
                                className="w-full p-2 border rounded outline-none focus:border-darkgreen focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                placeholder="Enter amount"
                            />
                        </label>
                    </div>

                    <div className="md:space-y-0 space-y-2">
                        <ButtonNumber amount={500000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={1000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={2000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={2500000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={5000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={10000000} onClickFunction={handleTransfer} />
                    </div>
                </div>
                <div className="rounded-xl border border-darkgreen mt-4 shadow-lg flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Recipient Number:</h1>
                        <div className="space-y-2">
                            <input
                                type="number"
                                placeholder="Enter Recepient iWalet Number"
                                value={iWaletNumber}
                                onChange={handleiWaletChange}
                                className="w-full p-2 border rounded outline-none focus:border-darkgreen focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                            />
                        </div>
                    </div>
                </div>
                {isTransferValid && (
                    <div>
                        <button onClick={() => setPopUp(true)} className="flex items-center mt-5 cursor-pointer hover:bg-lightgreen text-lg mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm">TRANSFER</button>
                        {popUp && <Modal setPopUp={setPopUp} handleValid={handleTransferValid} modalTitle={"TRANSFER"} modalText={"transfer"} amount={`${transferAmount}`} modalTextIng={"transfering"} prePositionWord={"from"}/>} 
                    </div>
                )}
                <div className="text-center">
                {receiptVisible && (
                    //  RECEIPT
                    <ReceiptSingle
                        LogoSrc={Logo}
                        transactionCode={transactionCode}
                        receipt={receipt}
                        senderName={senderName}
                        senderIwaletID={senderIwaletID}
                        receiverName={receiverName}
                        receiverIwaletID={receiverIwaletID}
                    />
                )}
                </div>
            </div>
        </>
    );
};

export default Transfer;
