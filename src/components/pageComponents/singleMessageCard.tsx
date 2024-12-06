import { User, Clock } from "lucide-react";
import { TSingleMessage } from "../../types/message";

const SingleMessageCard = ({
  sender,
  message,
  timestamp,
  isRead,
  profileImage,
}: TSingleMessage) => {
  return (
    <div
      className={`
      flex items-center
      p-4
      border-b
      hover:bg-gray-50
      transition-colors
      duration-200
      ${!isRead ? "bg-blue-50 border-blue-100" : "bg-white"}
    `}
    >
      {/* Profile Image or Icon */}
      <div className="mr-4">
        {profileImage ? (
          <img
            src={profileImage}
            alt={`${sender}'s profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className="
            w-12 h-12
            bg-gray-200
            rounded-full
            flex
            items-center
            justify-center
          "
          >
            <User className="text-gray-500" size={24} />
          </div>
        )}
      </div>

      {/* Message Content */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold text-gray-800">{sender}</h3>
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            {timestamp}
          </div>
        </div>
        <p
          className={`
          text-sm
          ${!isRead ? "font-semibold text-gray-900" : "text-gray-600"}
        `}
        >
          {message.length > 50 ? `${message.slice(0, 50)}...` : message}
        </p>
      </div>
    </div>
  );
};

export default SingleMessageCard;
