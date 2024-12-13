import React from "react";
import { IoChatbubblesOutline, IoShare } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { IoHappyOutline } from "react-icons/io5";
interface CardStatusProps {
  images?: string[];
}

const CardStatus = ({ images }: CardStatusProps) => {
  return (
    <article className={"bg-white p-4 rounded-mg shadow-lg"}>
      <header className={"flex items-center space-x-2"}>
        <img
          src="https://i.pinimg.com/736x/ca/31/f5/ca31f56712d6b611d446ab3d1fbfc3f9.jpg"
          alt=""
          width={"55px"}
          height={"55px"}
          className={"rounded-full"}
        />
        <div>
          <strong>John Doe</strong> is at{" "}
          <span className={"text-sky-500"}>New York</span>
          <br />
          <span className={"text-sm text-gray-600"}>
            Thursday, Jun 31, PM 5:50
          </span>
        </div>
      </header>

      <div>
        <p className={"text-sm mt-2"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          consequuntur porro nisi accusamus vel exercitationem quisquam fuga non
          hic pariatur, ipsa culpa necessitatibus eligendi illum unde expedita
          vero at? Quo facere ratione magni? Totam inventore aperiam voluptates
          pariatur possimus. Placeat nisi numquam sequi optio, ullam quaerat
          quae repellendus minus praesentium voluptatum libero veniam distinctio
          accusantium eaque voluptatibus a rerum blanditiis illum earum
          quibusdam. Delectus, similique ratione. Non eaque veritatis
          blanditiis?
        </p>
        {
          images?.length &&
        <div className={"grid grid-cols-2 gap-2 my-4"}>
          {images.map((images) => (
            <img
              src={images}
              className={"rounded-lg cursor-pointer hover:shadow-md"}
              alt=""
              width={"400px"}
              height={"400px"}
            />
          ))}
        </div>
        }
        <hr />
        <div className="my-2 flex items-center justify-between">
          <ul className="flex space-x-2 items-center">
            <li className="hidden lg:inline-block" >
              <img
                src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
                width={"35px"}
                className={"rounded-full"}
                alt=""
              />
            </li>
            <li className="hidden lg:inline-block">
              <img
                src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
                width={"35px"}
                className={"rounded-full"}
                alt=""
              />
            </li>
            <li className="hidden lg:inline-block" >
              <img
                src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
                width={"35px"}
                className={"rounded-full"}
                alt=""
              />
            </li>
            <li className="hidden lg:inline-block" >
              <img
                src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
                width={"35px"}
                className={"rounded-full"}
                alt=""
              />
            </li>
            <li >
              <small>
                <strong>+99 likes</strong>
              </small>
            </li>
          </ul>
          <div className="flex space-x-4 text-sm">
            <span className={"flex items-center space-x-2"}>
              <IoHeartOutline size={15} />
              Like
            </span>
            <span className={"flex items-center space-x-2"}>
              <IoChatbubblesOutline size={15} />
              13 Comments
            </span>
            <span className={"flex items-center space-x-2"}>
              <IoShareOutline size={15} />
              Share
            </span>
          </div>
        </div>
        <div
          className={
            "flex justify-between items-center my-2 border border-gray-300 bg-gray-200 rounded-lg hover:bg-white"
          }
        >
          <div className={"flex items-start m-2 space-x-4 rounded-full"}>
            <img
              src="https://i.pinimg.com/736x/f6/8c/45/f68c451ff37dff0e3db86cd5142a4745.jpg"
              width={45}
              alt=""
              className={"rounded-full"}
            />
            <input
              type="text"
              className={"mt-2 bg-transparent outline-0"}
              placeholder={"Write a comment..."}
            />
          </div>
          <ul className={"flex items-center space-x-2 mr-5"}>
            <li>
              <IoAttachOutline size={20} className={"mt-2"} />
            </li>
            <li>
              <IoSaveOutline size={20} className={"mt-2"} />
            </li>
            <li>
              <IoHappyOutline size={20} className={"mt-2"} />
            </li>
          </ul>
        </div>
        <div className={"my-3 mb-2"}>
          <div className={"flex items-start justify-between"}>
            <div className={"flex items-start space-x-2"}>
              <img
                src="https://media.tenor.com/jeQ1cbMJiPQAAAAe/recep-recep-ivedik.png"
                width={45}
                className={"rounded-full"}
                alt=""
              />
              <div>
                <strong>Recep İvedik (asi_stayla_35)</strong>
                <br />
                <span className={"text-sm text-gray-400"}>Today at 3.30PM</span>
                <p className={"text-sm"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  facilis corrupti itaque illum, molestiae sint sit nesciunt
                  tenetur rem? Harum.
                </p>
                <span className={"text-blue-500 text-sm font-semibold"}>- View 2 replies -</span>
              </div>
            </div>
            <div className={"flex space-x-2 items-center"}>
              <span className={"flex space-x-1 mt-1"}>
                <IoHeart color={"red"} size={18} className={"mt-0.5"} /> <small>9</small>
              </span>
              <span className={"flex space-x-2"}>
                <IoShare color={"black"} size={18} className={"mt-0.5"} />
              </span>
            </div>
          </div>
          <span className={"text-blue-500 font-semibold text-sm ml-14"} >Show 5 more comments</span>
        </div>
      </div>
    </article>
  );
};

export default CardStatus;
