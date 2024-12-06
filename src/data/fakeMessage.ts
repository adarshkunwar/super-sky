import { TSingleMessage } from "../types/message";

const fakeMessage: TSingleMessage = {
  sender: "Alex",
  message: "Hey, how are you?",
  timestamp: "2:30 PM",
  isRead: false,
  profileImage: null,
};

export const fakeMessages: TSingleMessage[] = Array.from(
  { length: 5 },
  () => fakeMessage,
);
