import React from "react";
import { Heart, MessageCircle, UserPlus, Repeat2 } from "lucide-react";
import {
  TNotificationType,
  TSingleNotifcation,
} from "../../../types/notification";
import { Link } from "react-router-dom";

const getIconForType = (type: TNotificationType) => {
  const iconProps = { size: 24, className: "mr-3" };
  switch (type) {
    case "like":
      return <Heart {...iconProps} color="#FF6B6B" />;
    case "comment":
      return <MessageCircle {...iconProps} color="#4ECDC4" />;
    case "follow":
      return <UserPlus {...iconProps} color="#A8DADC" />;
    case "repost":
      return <Repeat2 {...iconProps} color="#6A4C93" />;
  }
};

const NotificationCard: React.FC<TSingleNotifcation> = ({
  type,
  title,
  message,
  timestamp,
  link,
}) => {
  return (
    <Link to={link}>
      <div className="relative flex items-start p-4 bg-white shadow-md rounded-lg border border-gray-100 max-w-sm">
        <div className="flex items-start">
          {getIconForType(type)}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">{message}</p>
            <div className="text-xs text-gray-500">{timestamp}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationCard;
