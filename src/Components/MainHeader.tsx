import React from "react";

const MainHeader = () => {
  return (
    <header className={"flex justify-between items-center bg-white px-4 py-3"}>
      <div className={"flex items-center space-x-4"}>
        <div className={"border border-gray-400 rounded-md py-1"}>
          <button
            className={
              "hover:bg-gray-400 hover:text-black py-1 px-2 text-gray-400 border-r border-gray-600"
            }
          >
            &lt;
          </button>
          <button
            className={
              "hover:bg-gray-400 hover:text-black py-1 px-2 text-gray-400"
            }
          >
            &gt;
          </button>
        </div>
        <input
          type="text"
          placeholder={"Type to search..."}
          className={
            "border border-gray-400 px-3 py-2 rounded-md w-[300px] text-gray-600 bg-gray-100 focus:bg-white outline-0"
          }
        />
      </div>
      <div className={"flex items-center space-x-4"}>
      <div className={"flex space-x-4"}>
          <span>Notifications</span>
          <span>Messages</span>
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
