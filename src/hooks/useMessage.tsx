import { useCallback, useEffect, useState } from "react";
import { fakeMessages } from "../data/fakeMessage";
import { TSingleMessage } from "../types/message";

const useMessage = () => {
  const [message, setMessage] = useState<TSingleMessage[] | null>(null);

  const getData = useCallback(() => {
    return fakeMessages;
  }, []);

  useEffect(() => {
    setMessage(getData());
  }, [setMessage, getData]);

  return { message };
};

export default useMessage;
