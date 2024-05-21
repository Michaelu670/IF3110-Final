import React from 'react';

interface TopUpSingleProps {
    id: string;
    logoSrc: string;
    label: string;
    paymentMethod: string;
    selectedPaymentMethod: string;
    handlePaymentMethodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    bankAccountNumber: string;
    handleBankAccountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopUpSingle: React.FC<TopUpSingleProps> = ({
    id,
    logoSrc,
    label,
    paymentMethod,
    selectedPaymentMethod,
    handlePaymentMethodChange,
    bankAccountNumber,
    handleBankAccountChange,
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <input
                    type="radio"
                    id={id}
                    name="paymentMethod"
                    value={paymentMethod}
                    checked={selectedPaymentMethod === paymentMethod}
                    onChange={handlePaymentMethodChange}
                />
                <img src={logoSrc} alt={`${label} Logo`} className="w-16 h-auto m-2 mr-4" />
                <label className="font-semibold text-xl my-2" htmlFor={id}>{label}</label>
            </div>
            {selectedPaymentMethod === paymentMethod && (
                <input
                    type="number"
                    placeholder={`Enter your ${label} Account Number`}
                    value={bankAccountNumber}
                    onChange={handleBankAccountChange}
                    className="w-full p-2 border rounded outline-none focus:border-darkgreen focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                />
            )}
        </div>
    );
};

export default TopUpSingle;
