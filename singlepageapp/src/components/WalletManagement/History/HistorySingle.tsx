import { FaDollarSign, FaWallet } from 'react-icons/fa';

const HistorySingle = ({
    status,
    title,
    subtitle,
    amount,
}: {
    status: string;
    title: string;
    subtitle: string;
    amount: string;
}) => {
    const iconColor = status === 'Berhasil' ? 'text-darkgreen' : 'text-red';
    const textColor = status === 'Berhasil' ? 'text-black' : 'text-greytext';
    const walletIconColor = status === 'Berhasil' ? 'text-darkgreen' : 'text-red';
    const isLineThrough = status === 'Gagal';

    return (
        <div className={`flex flex-col bg-white text-black my-4 mx-2 md:mx-4 p-4 border ${status === 'Berhasil' ? 'border-lightgreen' : 'border-red'} shadow-lg rounded-lg`}>
            <div className="flex flex-row items-center">
                <span className={`${iconColor} mr-1 text-6xl`}><FaDollarSign /></span>
                <div className="flex items-left flex-col justify-between w-full">
                    <span className={`text-md font-semibold ${textColor}`}>{title}</span>
                    <span className={`font-semibold text-xl ${textColor}`}>{subtitle}</span>
                    <span className={`font-normal text-xl ${status === 'Berhasil' ? 'text-darkgreen' : 'text-red'}`}>{status}</span>
                </div>
                <div className="flex items-end flex-col justify-between w-full">
                    <span className={`font-bold text-xl ${textColor} ${isLineThrough ? 'line-through' : ''}`}>{amount}</span>
                    <div className="flex flex-row items-center">
                        <span className={`${walletIconColor} mr-4 text-md`}><FaWallet /></span>
                        <span className={`text-md font-semibold ${textColor}`}>iWallet</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistorySingle;
