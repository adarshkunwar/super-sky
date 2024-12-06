import { NavLink } from "react-router-dom";
import { Bell, MessageSquare } from "lucide-react";

const Header = () => {
  const notificationCounter = 3;
  const messageCounter = 2;
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <NavLink
            to="/notification"
            className={({ isActive }) => `
              relative transition-all duration-300 ease-in-out
              ${isActive ? "text-blue-600 scale-110" : "text-gray-600 hover:text-blue-500"}
            `}
          >
            <Bell className="w-6 h-6" />
            {notificationCounter > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {notificationCounter}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) => `
              relative transition-all duration-300 ease-in-out
              ${isActive ? "text-blue-600 scale-110" : "text-gray-600 hover:text-blue-500"}
            `}
          >
            <MessageSquare className="w-6 h-6" />
            {messageCounter > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {messageCounter}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
