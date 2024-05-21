import React from 'react'
import { FaWallet } from 'react-icons/fa6';

function ReportModal({ setPopUp, handleValid}) {
    const handleYesClick = () => {
        handleValid();
        setPopUp(false);
    };
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-2xl mb-5 text-darkgreen'>REPORT</h1>
                <p>
                Are you sure to send this report?
                <p className='bg-mostlightgreen p-2 border-l-2 border-darkgreen text-darkgreen flex flex-col text-sm my-1'>
                    <span className='text-darkgreen font-bold flex items-center gap-1'>
                    <FaWallet />
                    iWalet
                    </span>
                    We appreaciated your feedbacks 😊
                </p>
                </p>
                <div className='flex justify-center mt-5 space-x-5'>
                    <button className='font-bold rounded-lg bg-red text-white py-2 px-4 hover:bg-white hover:border-red  hover:border hover:text-red'
                    onClick={() => setPopUp(false)}
                    >NO</button>
                    <button className='font-bold rounded-lg bg-darkgreen text-white py-2 px-4 hover:bg-white hover:border-darkgreen  hover:border hover:text-darkgreen'
                    onClick={handleYesClick}
                    >YES</button>
                </div>
            </div>
        </div>
    )
}

export default ReportModal