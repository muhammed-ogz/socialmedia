import { Disclosure } from "@headlessui/react";
import React from "react";
import { IoChevronUp } from "react-icons/io5";

interface MenuItem {
  label: string;
  icon: any;
  badge?: number;
}

interface SideMenuProps {
  title: string;
  items: MenuItem[];
}

const SideMenu = ({ title, items }: SideMenuProps) => {
  return (
    <div className={"my-4"}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify- py-2 text-left text-sm font-medium">
              <span className={"text-white font-bold px-2 py-1"} >{title}</span>
              <IoChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
              <ul>
                {items.map((item) => (
                  <li>
                    <a
                      href="#"
                      className={
                        "block text-sm py-2 font-semibold border-l-2 border-l-transparent transition hover:bg-gray-300 text-white hover:border-sky-700"
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
    
  );
};

export default SideMenu;
