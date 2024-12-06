import useNotification from "../../../hooks/useNotification";
import NotificationCard from "./singleNotificationCard";

const NotificationContainer = () => {
  const { notification } = useNotification();
  return (
    <div>
      {notification
        ? notification.map((notification, index) => (
            <NotificationCard
              key={index}
              title={notification.title}
              message={notification.message}
              timestamp={notification.timestamp}
              link={notification.link}
              type={notification.type}
            />
          ))
        : "No Messages"}
    </div>
  );
};

export default NotificationContainer;
