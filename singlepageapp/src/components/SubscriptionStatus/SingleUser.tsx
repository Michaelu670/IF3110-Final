import { FaUser, FaUserSlash } from 'react-icons/fa';

interface InterfaceSubscription {
    subscriberName: string;
    icon: string;
}

const SingleUser = ({ subscriberName, icon }: InterfaceSubscription) => {
    let selectedIcon,  selectedIconColor, text, textColor, borderColor;

    if (icon === "user") {
        selectedIcon = <FaUser />;
        selectedIconColor = "text-darkgreen";
        text = "Diterima";
        textColor = "text-black";
        borderColor = "border-darkgreen";
    } else {
        selectedIcon = <FaUserSlash />;
        selectedIconColor = "text-red";
        text = "Ditolak";
        textColor = "text-greytext line-through";
        borderColor = "border-red";
    }

    return (
        <div className={`flex flex-col bg-white text-black my-4 mx-2 md:mx-4 p-4 border shadow-lg rounded-lg border ${borderColor}`}>
            <div className="flex md:flex-row items-center">
                <div className='flex flex-row items-center'>
                    <span className={`${selectedIconColor} mr-1 text-6xl`}>{selectedIcon}</span>
                    <div className="flex items-left flex-col justify-between w-full">
                        <span className={`font-semibold ml-2 text-2xl ${textColor}`}>{subscriberName}</span>
                    </div>
                </div>
                <div className="flex items-end flex-col justify-end w-full space-y-2">
                    <span className={`font-semibold ml-2 text-2xl ${selectedIconColor}`}>{text}</span>
                </div>
            </div>
        </div>
    )
};

export default SingleUser;
