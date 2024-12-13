import React from "react";
import "./App.css";
import SideMenu from "./Components/SideMenu";
import MainHeader from "./Components/MainHeader";
import CardStatus from "./Components/CardStatus";
import {
  IoClose,
  IoEllipsisHorizontal,
  IoGift,
  IoMailOutline,
  IoMegaphone,
  IoMegaphoneOutline,
  IoMicCircleOutline,
  IoMicOutline,
  IoMusicalNotes,
  IoMusicalNotesOutline,
  IoNewspaper,
} from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { IoJournalOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

function App() {
  return (
    <div className="flex h-screen">
      <aside className={" hidden md:block bg-slate-700 h-full w-[210px]"}>
        <img
          src="https://i.pinimg.com/736x/d4/da/e3/d4dae320d97c3b25c440e758afba3bf2.jpg"
          alt=""
          width={"100px"}
          height={"100px"}
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
      <main className={"bg-gray-200 h-screen overflow-auto w-full"}>
        <MainHeader />

        <div className={"flex space-x-4 ml-4"}>
          <div className={"w-full m-4"}>
            <div
              className={
                "bg-white p-2 rounded-mg shadow-lg items-center justify-between flex mb-2"
              }
            >
              <div className={"flex space-x-2"}>
                <img
                  src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                  alt=""
                  width={"50px"}
                  className={"rounded-full p-1"}
                />
                <input type="text" placeholder="What's New ?" className={""} />
              </div>
              <ul className={"flex items-center space-x-3 mr-2"}>
                <li>
                  <IoMusicalNotes size={20} color="" />
                </li>
                <li>
                  <IoImagesOutline size={20} color="" />
                </li>
                <li>
                  <IoJournalOutline size={20} color="" />
                </li>
              </ul>
            </div>
            <div className={"flex flex-col space-y-4"}>
              <CardStatus
                images={[
                  "https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg",
                  "https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg",
                ]}
              />
              <CardStatus />
              <CardStatus
                images={[
                  "https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg",
                ]}
              />
            </div>
          </div>

          <aside className={" hidden md:block m-4 w-[450px]"}>
            <div className={"bg-white rounded-md shadow-lg"}>
              <div className={"flex items-center justify-between p-3"}>
                <span className={"font-semibold"}>Upcoming Events</span>
                <IoAddCircleOutline />
              </div>

              <hr />

              <ul className={"flex flex-col space-y-4 px-4 py-2"}>
                <li className={"flex items-start space-x-2"}>
                  <IoMailOutline size={"20px"} />
                  <div>
                    <span className={"text-sm"}>Apple Keynote</span>
                    <br />
                    <span className={"text-gray-400 text-xs"}>
                      Sunday, Aug3, 10:00PM
                    </span>
                  </div>
                </li>
                <li className={"flex items-start space-x-2"}>
                  <IoMusicalNotesOutline size={"20px"} />
                  <div>
                    <span className={"text-sm"}>30 Seconds to Mars</span>
                    <br />
                    <span className={"text-gray-400 text-xs"}>
                      Thursday, Aug9, 8:00PM
                    </span>
                  </div>
                </li>
                <li className={"flex items-start space-x-2"}>
                  <IoNewspaper size={"20px"} />
                  <div>
                    <span className={"text-sm"}>Recep Ivedik Premiere</span>
                    <br />
                    <span className={"text-gray-400 text-xs"}>
                      Monday, Aug31, 12:00AM
                    </span>
                  </div>
                </li>
                <li className={"flex items-start space-x-2"}>
                  <IoMicOutline size={"20px"} />
                  <div>
                    <span className={"text-sm"}>
                      American Muhiddin's Podcast
                    </span>
                    <br />
                    <span className={"text-gray-400 text-xs"}>
                      Monday, Jun2, 12:00AM
                    </span>
                  </div>
                </li>
                <li className={"flex items-start space-x-2"}>
                  <IoMegaphoneOutline size={"18px"} />
                  <div>
                    <span className={"text-sm"}>Solcu's protest</span>
                    <br />
                    <span className={"text-gray-400 text-xs"}>
                      Tuesday, Jun3, 5:30AM
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-md shadow-lg mt-3 mb-4">
              <div
                className={"flex items-center justify-between p-3 shadow-xl"}
              >
                <span className={"font-semibold"}>Advertising</span>
                <IoClose />
              </div>
              <div className={"p-2"}>
                <img
                  src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                  alt=""
                  className={"rounded-md mb-2"}
                />
                <hr />
                <p className={"font-bold text-lg"}>Köpke memes %20 off !</p>
                <a href="https://nike.com" className={"text-sky-500 text-sm"}>
                  kopkememes.com
                </a>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati enim commodi vero molestiae officia? Laudantium.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg mt-3 mb-4">
              <div
                className={"flex items-center justify-between p-3 shadow-xl"}
              >
                <span className={"font-bold"}>Birthday's in June</span>
              </div>
              <hr />
              <div className={"p-2"}>
                <div className={"font-bold text-sm mb-2"}>June 16</div>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start mt-3">
                    <img
                      src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                      width={35}
                      alt=""
                      className={"rounded-full mr-2"}
                    />
                    <div>
                      <div className="font-bold">Recep'in Köpkesi</div>
                      <div className="text-gray-400 text-sm">
                        Turning 12 years old.
                      </div>
                    </div>
                    <div>
                      <IoGift size={20} className="ml-8 mt-3" />
                    </div>
                  </li>
                  <li className="flex items-start mt-3">
                    <img
                      src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                      width={35}
                      alt=""
                      className={"rounded-full mr-2"}
                    />
                    <div>
                      <div className="font-bold">
                        Cevat-ül Hegari'nin Yavrusu
                      </div>
                      <div className="text-gray-400 text-sm">
                        Turning 92 years old.
                      </div>
                    </div>
                    <div>
                      <IoGift size={20} className="ml-5 mt-3" />
                    </div>
                  </li>
                </ul>
                <hr />
                <div className={"font-bold text-sm mt-4 mb-2"}>
                  September 29
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start mt-3">
                    <img
                      src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                      width={35}
                      alt=""
                      className={"rounded-full mr-2"}
                    />
                    <div>
                      <div className="font-bold">Ronaldo'nun Karısı</div>
                      <div className="text-gray-400 text-sm">
                        Turning 9 years old.
                      </div>
                    </div>
                    <div>
                      <IoGift size={20} className="ml-8 mt-3" />
                    </div>
                  </li>
                  <li className="flex items-start mt-3">
                    <img
                      src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                      width={35}
                      alt=""
                      className={"rounded-full mr-2"}
                    />
                    <div>
                      <div className="font-bold">Wanda Nara'nın Kocası</div>
                      <div className="text-gray-400 text-sm">
                        Turning 108 years old.
                      </div>
                    </div>
                    <div>
                      <IoGift size={20} className="ml-5 mt-3" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <aside className={"hidden lg:block bg-white shadow-md w-[480px] p-2"}>
            <div className="text-xl flex items-start justify-between space-x-2 font-bold my-4">
              <span>Groups</span>
              <IoEllipsisHorizontal className={"mt-2"} size={20} />
            </div>
            <ul className="flex-col space-y-2">
              <li className="flex items-start space-x-2">
                <img
                  src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                  className={"rounded-full"}
                  width={35}
                  alt=""
                />
                <div>
                  <span className=" text-sm font-bold">Ronaldo'nun Karısı</span>
                  <br />
                  <span className="text-gray-400 text-sm">
                    819k subscribers
                  </span>
                </div>
              </li>
              <li className="flex items-start p-2 space-x-2">
                <img
                  src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                  className={"rounded-full"}
                  width={35}
                  alt=""
                />
                <div>
                  <span className=" text-sm font-bold">BGY Karma</span>
                  <br />
                  <span className="text-gray-400 text-sm">
                    2.8M subscribers
                  </span>
                </div>
              </li>
            </ul>
            <hr />
            <div className="text-xl flex items-start justify-between space-x-2 font-bold my-4">
              <span>Contacts</span>
              <IoEllipsisHorizontal className={"mt-2"} size={20} />
            </div>
            <ul className="flex-col space-y-2">
              <li className="flex items-start space-x-2">
                <div className={"flex items-center ml-2 space-x-2"}>
                  <img
                    src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">RTE</span>
                  <br />
                  <span className="text-gray-400 text-xs">@rterdogan</span>
                </div>
                <span className={"text-xs text-gray-400 mt-2"}>(31)</span>
              </li>
              <li className="flex items-start p-2 space-x-2">
                <div className={"flex items-center space-x-2"}>
                  <img
                    src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">Özgür Özel</span>
                  <br />
                  <span className="text-gray-400 text-xs">@kurdsever33</span>
                  <span className={"text-xs text-gray-400"}>(33)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <div className={"flex items-center ml-2 space-x-2"}>
                  <img
                    src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">Ümit Özdağ</span>
                  <br />
                  <span className="text-gray-400 text-xs">@surisavar</span>
                  <span className={"text-xs text-gray-400"}>(1)</span>
                </div>
              </li>
              <ul className="flex-col space-y-2">
                <li className="flex items-start space-x-2">
                  <div className={"flex items-center ml-2 space-x-2"}>
                    <img
                      src="https://i.pinimg.com/736x/d4/da/e3/d4dae320d97c3b25c440e758afba3bf2.jpg"
                      className={"rounded-full"}
                      width={35}
                      alt=""
                    />
                    <span className=" text-sm font-bold">Kılıçdaroğlu</span>
                    <br />
                    <span className="text-gray-400 text-xs">@kilicdaroglu</span>
                    <span className={"text-xs text-gray-400 mt-2"}>(12)</span>
                  </div>
                </li>
              </ul>

              <li className="flex items-start space-x-2">
                <div className={"flex items-center ml-2 space-x-2"}>
                  <img
                    src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">Acun Ilıcalı</span>
                  <br />
                  <span className="text-gray-400 text-xs">@parababasi</span>
                </div>
                <span className={"text-xs text-gray-400 mt-3"}>(+99)</span>
              </li>
            </ul>

            <hr />
            <div className="text-xl flex items-start justify-between space-x-2 font-bold my-4">
              <span>Messages</span>
              <IoEllipsisHorizontal className={"mt-2"} size={20} />
            </div>
            <ul className="flex-col space-y-2">
              <li className="flex items-start space-x-2">
                <div className={"flex items-center ml-2 space-x-2"}>
                  <img
                    src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">RTE</span>
                  <br />
                  <span className="text-gray-400 text-xs">@rterdogan</span>
                </div>
                <span className={"text-xs text-gray-400 mt-2"}>(31)</span>
              </li>
              <li className="flex items-start p-2 space-x-2">
                <div className={"flex items-center space-x-2"}>
                  <img
                    src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">Özgür Özel</span>
                  <br />
                  <span className="text-gray-400 text-xs">@kurdsever33</span>
                </div>
                <span className={"text-xs text-gray-400 mt-3"}>(33)</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className={"flex items-center ml-2 space-x-2"}>
                  <img
                    src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                    className={"rounded-full"}
                    width={35}
                    alt=""
                  />
                  <span className=" text-sm font-bold">Ümit Özdağ</span>
                  <br />
                  <span className="text-gray-400 text-xs">@surisavar</span>
                </div>
                <span className={"text-xs text-gray-400 mt-3"}>(1)</span>
              </li>
            </ul>
            <hr />
            <div className="text-lg flex items-start justify-between space-x-2 font-bold my-4">
              <span>People you may know</span>
              <IoEllipsisHorizontal className={"mt-2"} size={20} />
            </div>
            <ul className="flex-col space-y-2">
              <li className="flex items-start space-x-2">
                <img
                  src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
                  className={"rounded-full"}
                  width={35}
                  alt=""
                />
                <div>
                  <span className=" text-sm font-bold">John Doe</span>
                  <br />
                  <span className="text-gray-400 text-sm">
                    3 arkadaşı ile geziyo i*ne
                  </span>
                </div>
              </li>
              <li className="flex items-start p-2 space-x-2">
                <img
                  src="https://img-s1.onedio.com/id-6373687e2b05b5df3985d753/rev-0/w-600/h-574/f-jpg/s-b878e89ef50c3c2469aa31f04d57301ef66b14cd.jpg"
                  className={"rounded-full"}
                  width={35}
                  alt=""
                />
                <div>
                  <span className=" text-sm font-bold">Yalnız Guş</span>
                  <br />
                  <span className="text-gray-400 text-sm">
                    Her zamanki gibi yalnız..
                  </span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
