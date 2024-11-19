import React from "react";
import "./App.css";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="flex h-screen">
      <aside className={"bg-slate-700 h-full w-[270px]"}>
        <img
          src="https://i.pinimg.com/736x/d4/da/e3/d4dae320d97c3b25c440e758afba3bf2.jpg"
          alt=""
        />

        <hr />

        <SideMenu
          title={"Main Menu"}
          items={[
            {
              label: "Messages",
              icon: "",
            },
            {
              label: "Mail",
              icon: "",
            },
            {
              label: "People",
              icon: "",
            },
            {
              label: "Feed",
              icon: "",
            },
            {
              label: "Profile",
              icon: "",
            },
          ]}
        ></SideMenu>
        <SideMenu
          title={"Explore"}
          items={[
            {
              label: "Pages",
              icon: "",
            },
            {
              label: "Events",
              icon: "",
            },
            {
              label: "Jobs",
              icon: "",
            },
            {
              label: "Groups",
              icon: "",
            },
            {
              label: "Recommendations",
              icon: "",
            },
            {
              label: "Memories",
              icon: "",
            },
          ]}
        ></SideMenu>
      </aside>
      <main className={"bg-gray-200 w-full"}>
        <div className={"flex p-4 "}>
          <div className={"w-full"}>
            <h1>Hello World !</h1>
          </div>

          <aside className={"bg-white  w-[180px]"}>
            <h2>Upcoming Events</h2>
            <hr />
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </aside>
        </div>
      </main>
      <aside className={"bg-white shadow-md w-[230px]"}>
        <span>Groups</span>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
