import { useCallback, useEffect, useState } from "react";
import { TSingleNotifcation } from "../types/notification";
import { fakeNotifications } from "../data/fakeNotification";

const useNotification = () => {
  const [notification, setNotification] = useState<TSingleNotifcation[] | null>(
    null,
  );

  const getData = useCallback(() => {
    return fakeNotifications;
  }, []);

  useEffect(() => {
    setNotification(getData());
  }, [setNotification, getData]);

  return { notification };
};

export default useNotification;
