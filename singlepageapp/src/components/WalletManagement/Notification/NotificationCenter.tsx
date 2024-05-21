// NotificationCenter.tsx

import React, { useState } from 'react';
import NotificationList from './NotificationList';
import { useSpring, animated } from 'react-spring';
import { FaBell } from 'react-icons/fa';

interface NotificationCenterProps {}

const NotificationCenter: React.FC<NotificationCenterProps> = () => {
	const [showNotifications, setShowNotifications] = useState(true);
	const [unreadCount, setUnreadCount] = useState(0); // Replace with your logic for unread notifications

	const toggleNotifications = () => {
		setShowNotifications(!showNotifications);
	};

	const notificationProps = useSpring({
		opacity: showNotifications ? 1 : 0,
		height: showNotifications ? 'auto' : 0,
	});

	return (
		<div className="relative inline-block text-left">
			<button
				type="button"
				onClick={toggleNotifications}
				className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 "
			>
				<span className='text-2xl text-white hover:scale-125'>
					<FaBell/>
				</span>
				{unreadCount > 0 && (
				<span className="absolute top-0 right-0 inline-block px-2 py-1 text-xs font-bold text-white bg-red rounded-full">
					{unreadCount}
				</span>
				)}
			</button>

			<animated.div style={notificationProps}>
				{showNotifications && <NotificationList onClose={toggleNotifications} updateUnreadCount={setUnreadCount}/>}
			</animated.div>
		</div>
	);
};

export default NotificationCenter;
