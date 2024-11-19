import React from "react";

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
      <span className={"text-white font-bold px-2 py-1"}>{title}</span>
      <ul>
        {items.map((item) => (
          <li>
            <a href="#" className={"block text-sm px-2 py-3 font-semibold border-l-2 border-l-transparent transition hover:bg-gray-300 text-white hover:border-sky-700"}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
