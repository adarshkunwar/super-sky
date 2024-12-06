import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Notification from "./page/Notification";
import Post from "./page/Post";
import Messages from "./page/messages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
