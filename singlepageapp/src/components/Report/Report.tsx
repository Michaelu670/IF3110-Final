import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet, FaStar } from "react-icons/fa6";
import ReportModal from "./ReportModal";
import { useSearchParams } from "react-router-dom";

const Report = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [report, setReport] = useState(searchParams.get('desc') || '');
    const [popUp, setPopUp] = useState(false);

    const handleReportValid = () => {
        if (isReportValid) {
            if (Math.random() < 0.5) {
                showToastSuccess();
            } else {
                showToastFailure();
            }
        }
    };

    const showToastSuccess = () => {
        toast.success("Your report was submitted successfully! 😍");
    };

    const showToastFailure = () => {
        toast.error("Oops! Something went wrong. 😭");
    };

    const isReportValid = report.length > 0;

    return (
        <>
            <ToastContainer />
            <div>
                <div className="text-center text-white rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgreen via-lightgreen to-verylightgreen p-4">
                    <h1 className="font-bold text-4xl">Report</h1>
                </div>
                <div className="rounded-xl border border-darkgreen mt-4 shadow-lg flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <h1 className="text-4xl font-semibold mb-2">Tell Us Your Feedback</h1>
                    <div className="mb-4">
                        <label>
                        <input
                            type="text"
                            value={report}
                            onChange={(e) => {
                            setReport(e.target.value);
                            }}
                            className="w-full p-2 border rounded outline-none focus:border-darkgreen focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                            placeholder="Share your thoughts, feedback, or report an issue..."
                        />
                        </label>
                    </div>
                </div>
                {isReportValid && (
                    <div>
                        <button
                        onClick={() => setPopUp(true)}
                        className="flex items-center mt-5 cursor-pointer hover:bg-lightgreen text-lg mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm"
                        >
                        SEND
                        </button>
                        {popUp && <ReportModal setPopUp={setPopUp} handleValid={handleReportValid} />}
                    </div>
                )}
            </div>
        </>
    );
};

export default Report;
