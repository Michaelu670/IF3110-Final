import React, { useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import TopUpSingle from "./TopUpSingle";
import ButtonNumber from "../ButtonNumber";
import NotificationCenter from "../Notification/NotificationCenter";
import BCA from '../../../assets/bca.png';
import Mandiri from '../../../assets/mandiri.png';
import BRI from '../../../assets/briva.png';
import BNI from '../../../assets/bni.png';
import BSI from '../../../assets/bsi.png';
import Modal from "../Modal";
import { topup } from "@/utils/topup";

const TopUp = () => {
    const userId = 1;
    const [balance, setBalance] = useState(1000);
    const [topUpAmount, setTopUpAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [popUp, setPopUp] = useState(false)


    const formatNumber = (value) => {
        return Intl.NumberFormat().format(value);
    };

    const handleTopUp = (amount) => {
        setTopUpAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleBankAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBankAccountNumber(event.target.value);
    };


    const handleTopUpValid = () => {
        if (isTopUpValid) {
            if (Math.random() < 0.5) {
                showToastSuccess();
            } else {
                showToastFailure();
            }
        }
    };

    const showToastSuccess = () => {
        toast.success("Top-up successful! 😍");
    };
    
    const showToastFailure = () => {
        toast.error("Top-up failed. 😭");
    };

    const isTopUpValid = topUpAmount > 0 && bankAccountNumber.length === 10;

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
                    <h1 className="text-4xl font-semibold mb-2">Top-Up Amount:</h1>
                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                value={formatNumber(topUpAmount)} 
                                onChange={(e) => {
                                    const inputValue = e.target.value.replace(/,/g, '');
                                    const newAmount = inputValue === "" ? 0 : parseInt(inputValue, 10);
                                    setTopUpAmount(newAmount);
                                }}
                                className="w-full p-2 border rounded outline-none focus:border-darkgreen focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                placeholder="Enter amount"
                            />
                        </label>
                    </div>

                    <div className="md:space-y-0 space-y-2">
                        <ButtonNumber amount={500000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={1000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={2000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={2500000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={5000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={10000000} onClickFunction={handleTopUp} />
                    </div>
                </div>
                <div className="rounded-xl border border-darkgreen mt-4 shadow-lg flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Payment Method:</h1>
                        <div className="space-y-2">
                        <TopUpSingle
                            id="bca"
                            logoSrc={BCA}
                            label="BCA Virtual Account"
                            paymentMethod="bca"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="mandiri"
                            logoSrc={Mandiri}
                            label="Mandiri Virtual Account"
                            paymentMethod="mandiri"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bri"
                            logoSrc={BRI}
                            label="BRIVA"
                            paymentMethod="bri"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bni"
                            logoSrc={BNI}
                            label="BNI Virtual Account"
                            paymentMethod="bni"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bsi"
                            logoSrc={BSI}
                            label="BSI Mobile"
                            paymentMethod="bsi"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        </div>
                    </div>
                </div>
                {isTopUpValid && (
                    <div>
                        <button onClick={() => {setPopUp(true);}} className="flex items-center mt-5 cursor-pointer hover:bg-lightgreen text-lg mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm">TOP-UP</button>
                        {popUp && <Modal setPopUp={setPopUp} handleValid={handleTopUpValid} modalTitle={"TOP-UP"} modalText={"top-up"} amount={`${topUpAmount}`} modalTextIng={"top-up"} prePositionWord={"to"}/>} 
                    </div>
                )}
            </div>
        </>
    );
};

export default TopUp;
