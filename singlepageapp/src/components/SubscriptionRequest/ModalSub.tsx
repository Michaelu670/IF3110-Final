import React from 'react';
import { FaUser, FaUserSlash } from 'react-icons/fa';

interface ModalSubProps {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleValid: () => void;
  modalTitle: string;
  modalText: string;
  modalTextIng: string;
}

const ModalSub: React.FC<ModalSubProps> = ({ setPopUp, handleValid, modalTitle, modalText,  modalTextIng}) => {
    let selectedIcon,  bgColor, textColor, borderColor;

    if (modalTitle === "ACCEPT") {
        selectedIcon = <FaUser />;
        bgColor = "bg-mostlightgreen";
        textColor = "text-darkgreen";
        borderColor = "border-darkgreen";
    } else {
        selectedIcon = <FaUserSlash />;
        bgColor = "bg-mostlightred";
        textColor = "text-red";
        borderColor = "border-red";
    }

    const handleYesClick = () => {
        handleValid();
        setPopUp(false);
    };

    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <h1 className={`font-bold text-center text-2xl mb-5 ${textColor}`}>{modalTitle}</h1>
                <p>
                    Are you sure to {modalText} ?
                    <p className={`${bgColor} p-2 border-l-2 ${borderColor} ${textColor} flex flex-col text-sm my-1`}>
                        <span className={`${textColor} font-bold flex items-center gap-1`}>
                        {selectedIcon}
                        iWalet
                        </span>
                        By {modalTextIng} the user, you will accept all of iWalet terms & condition
                    </p>
                </p>
                <div className='flex justify-center mt-5 space-x-5'>
                    <button
                        className='font-bold rounded-lg bg-red text-white py-2 px-4 hover:bg-white hover:border-red  hover:border hover:text-red'
                        onClick={() => setPopUp(false)}
                    >
                        NO
                    </button>
                    <button
                        className='font-bold rounded-lg bg-darkgreen text-white py-2 px-4 hover:bg-white hover:border-darkgreen  hover:border hover:text-darkgreen'
                        onClick={handleYesClick}
                    >
                        YES
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalSub;
