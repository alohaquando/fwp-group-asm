import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";

export default function SlideOverHeaderUserBlock(props) {
  return (
    <div className="px-4 sm:px-6 flex place-content-between place-items-center border-b-slate-100 border-b-2 py-4 ">
      {/* User Full Name */}
      <h2
        className=" text-base font-medium text-gray-900 line-clamp-1"
        id="slide-over-title"
      >
        {props.name}
      </h2>
      {/* End User Full Name */}

      {/* Dropdown Menu */}
      <Menu
        as="div"
        className="relative inline-block"
      >
        <div>
          {/* Menu Button */}
          <Menu.Button className="py-1 px-3 rounded-lg hover:bg-brand-blue-gray-50 text-slate-400 transition">
            <FontAwesomeIcon icon={faAngleDown} />
          </Menu.Button>
          {/* End Menu Button */}
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              {/* Menu Items */}

              <Menu.Item>
                <MenuItemStyle icon="faUser">Edit account</MenuItemStyle>
              </Menu.Item>

              <Menu.Item>
                <MenuItemStyle
                  icon="faArrowAltCircleRight"
                  href="/signin"
                  destructive
                >
                  Sign out
                </MenuItemStyle>
              </Menu.Item>

              {/* End Menu Items */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
