import { useEffect } from "react";
// Components
import { Cart, Chat, Notification, UserProfile } from "./";
// Context
import { useStateContext } from "../contexts/ContextProvider";
// icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// Utilities
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// Dummy data
import avatar from "../data/avatar.jpg";
// App

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      type="button"
      onClick={customFunc}
      style={{ color }}
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateContext();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
        color="blue"
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color="blue"
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color="blue"
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color="blue"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar}></img>
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
