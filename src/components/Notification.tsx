import React from 'react';
import { BiBell } from 'react-icons/bi';

interface NotificationProps {
  count: number;
}

const Notification: React.FC<NotificationProps> = ({ count }) => (
  <div className="relative">
    <BiBell size={24} />
    {count > 0 && (
      <span className="absolute top-0 right-0 block h-4 w-4 text-xs bg-red-600 text-white rounded-full flex justify-center items-center">
        {count}
      </span>
    )}
  </div>
);

export default Notification;
