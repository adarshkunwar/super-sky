export type TNotificationType = "like" | "comment" | "follow" | "repost";

export type TSingleNotifcation = {
  type: TNotificationType;
  title: string;
  message: string;
  timestamp: string;
  link: string;
};
