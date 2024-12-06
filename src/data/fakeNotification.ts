import { TSingleNotifcation } from "../types/notification";

const fakeNotification: TSingleNotifcation = {
  type: "comment",
  title: "Notification",
  message: "This is a default notification message.",
  timestamp: "Just now",
  link: "https://www.google.com",
};

const randomNotificationType = (): TSingleNotifcation => {
  return {
    ...fakeNotification,
    title: "Random Notification",
  };
};

export const fakeNotifications: TSingleNotifcation[] = Array.from(
  { length: 5 },
  () => randomNotificationType(),
);
