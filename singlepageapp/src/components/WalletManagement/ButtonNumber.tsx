import React from 'react';

const ButtonNumber = ({ amount, onClickFunction }: { amount: number; onClickFunction: (amount: number) => void }) => {
    return (
        <button
            onClick={() => onClickFunction(amount)}
            className="hover:scale-105 bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60"
        >
            {amount.toLocaleString()}{/* Menambahkan format uang */}
        </button>
    );
};

export default ButtonNumber;
