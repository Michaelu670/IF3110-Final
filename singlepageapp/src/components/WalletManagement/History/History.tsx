import React, { FC, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet, FaPlus } from 'react-icons/fa6';
import HistorySingle from './HistorySingle';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { REST_BASE_URL } from "@/constant/constants";

const History = () => {
    const navigate = useNavigate();

    const handleButtonClick = (yourRoute) => {
        // Gunakan yourRoute sebagai rute yang ingin Anda navigasikan
        navigate(yourRoute);
    };

    const [userHistory, setUserHistory] = useState<any>();

    useEffect(() => {

        const userID = 789;

        const fetchData = async () => {
            const userHistoryData = await axios.get(
                REST_BASE_URL + '/history/get/' + userID
            );  
            setUserHistory(userHistoryData.data);
        }

        fetchData();
        console.log(userHistory);

    }, []);
    


    return (
        <>
        <ToastContainer />
            <div>
                <div className="relative w-full md:h-40 h-52  bg-gradient-to-br from-darkgreenhistory to-darkgreen flex flex-row">
                    <div className="p-4">
                        <p className="text-white text-xl font-bold">Always use <i>iWalet</i> for all of your e-transactions ✨</p>
                        <p className="text-white text-xs">FREE REGISTRATION and get all of our services in just one click~</p>
                        <button onClick={() => handleButtonClick('/transfer')} className="hover:bg-white hover:text-darkgreen mt-6 py-1 px-4 bg-none border border-white text-white rounded-3xl font-semibold text-sm">Try <i>iWalet</i> Transfer</button>
                    </div>
                    <div className="absolute md:w-1/2 w-4/5 -bottom-12 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 text-center shadow-lg rounded-lg">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="flex items-left flex-col">
                                    <div className="flex flex-row items-center">
                                        <span className="text-darkgreen mr-2"><FaWallet  /></span>
                                        <span className="text-greytext text-sm font-semibold">iWalet</span>
                                    </div>
                                    <span className="text-black font-bold text-2xl">Rp14.042</span>
                                </div>
                                <div className="ml-4 flex items-center"> {/* Add margin-left for spacing */}
                                    <button onClick={() => handleButtonClick('/topup')} className="hover:scale-105 py-1 px-4 flex items-center border border-darkgreen bg-verylightgreen text-white rounded-3xl">
                                        <span className="text-darkgreen mr-2"><FaPlus /></span>
                                        <span className="text-darkgreen">Top-Up</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative top-16 mb-4">
                    {userHistory && userHistory.map((element, index: number) => (
                        <HistorySingle
                            key={index}
                            status={element.status}
                            title={element.info}
                            subtitle={element.reciever}
                            amount={'Rp ' + new Intl.NumberFormat('id-ID').format(element.amount)}
                        />
                    ))}

                    <HistorySingle
                        status="Berhasil"
                        title="Transfer ke"
                        subtitle="Rifqi Farhansyah"
                        amount="Rp12.500"
                    />
                    <HistorySingle
                        status="Gagal"
                        title="Top-Up"
                        subtitle="Michael Utama"
                        amount="Rp12.500"
                    />
                </div>
            </div>
        </>
    );
};

export default History;
