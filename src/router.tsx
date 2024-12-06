import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Notification from "./page/Notification";
import Post from "./page/Post";
import Messages from "./page/messages";
import Layout from "./components/ui/layouts/layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
