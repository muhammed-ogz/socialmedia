import React from "react";
import { IoChevronBack, IoChevronForward, IoNotifications, IoSearch } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";

const MainHeader = () => {
  return (
    <header className={"flex justify-between items-center bg-white px-4 py-3"}>
      <div className={"flex items-center space-x-4"}>
        <div className={"border border-gray-400 rounded-md"}>
          <button
            className={
              "hover:bg-gray-400 hover:text-black py-1 px-2 text-gray-400 border-r  inline-block border-gray-600"
            }
          >
            <IoChevronBack size={15}/>
          </button>
          <button
            className={
              "hover:bg-gray-400 hover:text-black py-1 px-2 inline-block text-gray-400"
            }
          >
            <IoChevronForward size={15}/>
          </button>
        </div>
        <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md text-gray-400 w-[280px] space-x-2 ">
          <IoSearch size={22}/>
        <input
          type="text"
          placeholder={"Type to search..."}
          className={
            "bg-transparent outline-0"
          }
        />
        </div>
      </div>
      <div className={"flex items-center space-x-4"}>
        <div className={"flex space-x-4"}>
          <div className={"flex space-x-2"} >
            <IoNotifications className={"mt-1"} />
            <span className="hidden lg:inline-block">Notifications</span>
          </div>
          <div className={"flex space-x-2"}>
            <IoChatbubbles className={"mt-1"} />
            <span className="hidden lg:inline-block">Messages</span>
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className={"rounded-full"}
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
