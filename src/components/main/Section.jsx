import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import List from "./List";
import MenuItemStyle from "../menu/MenuItemStyle";

export default function Section(props) {
  return (
    <div className="w-[360px] pb-10 mx-4 scrollbar-hide overflow-auto">
      <div className="group-section sticky top-0 z-20">
        {/* Title  */}
        <h2 className="bg-brand-blue-gray-50 text-xl font-semibold pb-4 ">
          {props.title}
        </h2>
        {/* End Total */}

        {/* Menu */}
        <Menu
          as="div"
          className="group-section-hover:opacity-100 right-4 top-0 z-30 absolute opacity-0 transition"
        >
          <div>
            {/* Menu Button */}
            <Menu.Button className="absolute origin-top-right right-0 rounded-md bg-white px-2 py-0.5 shadow-md border border-brand-blue-gray-100">
              <FontAwesomeIcon icon={faEllipsis} />
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
            <Menu.Items className="absolute right-0 z-10 mt-9 w-56 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {/* Menu Items */}

                <Menu.Item>
                  <MenuItemStyle icon="faPen">Rename</MenuItemStyle>
                </Menu.Item>

                <Menu.Item>
                  <MenuItemStyle
                    icon="faXmark"
                    destructive
                  >
                    Delete
                  </MenuItemStyle>
                </Menu.Item>
                {/* End Menu Items */}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* End Menu */}
      </div>

      <div className="space-y-3 flex-col flex">
        {/* Content */}
        {props.children}
        {/* End Content */}

        {/* Add button */}
        <button className="relative rounded-xl py-2.5 pl-4 text-slate-400 hover:bg-brand-blue-gray-100 hover:py-4 w-full text-left transition-all text-sm font-semibold">
          <FontAwesomeIcon
            icon={faPlus}
            className="mr-3"
          />
          Add assignment
        </button>
        {/* End Add button */}
      </div>
    </div>
  );
}
