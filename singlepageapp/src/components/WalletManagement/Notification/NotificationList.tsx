import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaXmark, FaCircleXmark } from 'react-icons/fa6';
import axios from "axios";
import { REST_BASE_URL } from "@/constant/constants";
interface NotificationData {
    notifId: string;
    sender: string;
    reciever: string;
    amount: number;
    info: string;
    time: string;
}

interface BackendNotification {
    notifId: string;
    sender: string;
    reciever: string;
    amount: number;
    info: string;
    time: string;
}

interface Notification extends NotificationData {}
interface NotificationListProps {
    onClose: () => void;
    updateUnreadCount: (count: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ onClose, updateUnreadCount }) => {
    const [userNotifications, setUserNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const userID = 789;

        const fetchData = async () => {
        const userNotificationsData = await axios.get(
            REST_BASE_URL + '/notif/get/' + userID
        );
        const mappedNotifications = mapBackendNotificationsToComponent(userNotificationsData.data);
        setUserNotifications(mappedNotifications);
        };
    
        fetchData();
        console.log(userNotifications);

    }, []);

    useEffect(() => {
        updateUnreadCount(userNotifications.length);
      }, [userNotifications]);

    const mapBackendNotificationsToComponent = (backendNotifications: BackendNotification[]): Notification[] => {
        return backendNotifications.map(notification => ({
            notifId: notification.notifId,
            sender: notification.sender,
            reciever: notification.reciever,
            amount: notification.amount,
            info: notification.info,
            time: notification.time,
        }));
    };

    const handleDeleteNotification = async () => {
        const userId = 789;
        const notifId = 1;
        try {
            await axios.delete(`${REST_BASE_URL}/notif/delete/${userId}/${notifId}`);
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    const randomMessagesBefore = [
        'Good news! ',
        'Wow! ',
        'Exciting! ',
        'Amazing! ',
        'Guess what? ',
    ];

    const randomMessagesAfter = [
        ' has been credited to your account.',
        ' is now available in your balance.',
        ' has just landed in your wallet.',
        ' has been received successfully.',
        ' is waiting for you in your account.',
    ];

    const getRandomMessage = (messages: string[]) => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    const handleDelete = async (userId: string, notifId: string) => {
        try {
            await axios.delete(`${REST_BASE_URL}/notif/delete/${userId}/${notifId}`);

            const updatedNotifications = userNotifications.filter((notification) => notification.notifId !== notifId);
            setUserNotifications(updatedNotifications);
        } catch (error) {
            console.error("Error deleting notification:", error);
        }
    };

    const notificationListProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    return (
        <animated.div style={notificationListProps}>
            <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 shadow-lg rounded-md overflow-y-auto max-h-60">
                <div className="flex justify-between p-2 text-black items-center">
                    <p className='font-bold text-2xl ml-2'>Notifications</p>
                    <button
                    onClick={onClose}
                    className="text-gray-400 font-extralight hover:text-gray-500 focus:outline-none"
                    >
                    <FaXmark />
                    </button>
                </div>
        
                <div className="flex flex-col">
                    {userNotifications.map((userNotification) => (
                    <div key={userNotification.notifId} className="flex items-center justify-between p-4 border-b">
                        <div className='flex flex-col'>
                            <p className="text-sm text-greytext mr-4">
                                {getRandomMessage(randomMessagesBefore)} <span className='text-darkgreen'>Rp{new Intl.NumberFormat().format(userNotification.amount)}</span> {getRandomMessage(randomMessagesAfter)}
                            </p>
                            <p className="text-xs font-thin text-greytext mr-4 text-black">From: {userNotification.sender}</p>
                        </div>
                        <button
                        onClick={() => handleDelete('789', userNotification.notifId)}
                        className="text-red hover:text-darkred focus:outline-none"
                        >
                            <span className='text-lg'>
                                <FaCircleXmark />
                            </span>
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </animated.div>
    );
};

export default NotificationList;
