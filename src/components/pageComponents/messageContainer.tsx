import useMessage from "../../hooks/useMessage";
import SingleMessageCard from "./singleMessageCard";

const MessageCollection = () => {
  const { message } = useMessage();
  return (
    <div>
      {message
        ? message.map((message, index) => (
            <SingleMessageCard
              key={index}
              sender={message.sender}
              message={message.message}
              timestamp={message.timestamp}
              isRead={message.isRead}
              profileImage={message.profileImage}
            />
          ))
        : "No Messages"}
    </div>
  );
};

export default MessageCollection;
