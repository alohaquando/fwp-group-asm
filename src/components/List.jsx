import format from "date-fns/format";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { A } from "hookrouter";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function List() {
  return (
    <div className="flex flex-col bg-white border border-brand-blue-gray-100 rounded-2xl space-y-4 py-5 px-6 w-full bg-opacity-40 flex-1 group relative">
      <h3 className="text-base font-semibold">List name</h3>
      {/* Menu */}
      <Menu
        as="div"
        className="group-hover:block right-4 top-0 z-10 absolute hidden"
      >
        <div>
          {/* Label */}
          <Menu.Button className="absolute origin-top-right right-0 rounded-md bg-white px-2 py-0.5 shadow-md border border-brand-blue-gray-100">
            <FontAwesomeIcon icon={faEllipsis} />
          </Menu.Button>
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
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      className="mr-4 w-4"
                    />
                    Edit
                  </A>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-4 w-4"
                    />
                    Mark as done
                  </A>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mr-4 w-4"
                    />
                    Change due date
                  </A>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="/signin"
                    className={classNames(
                      active ? "bg-gray-100 text-red-500" : "text-red-500",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="mr-4 w-4"
                    />
                    Delete
                  </A>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* End Menu */}

      <Card
        title="This title"
        content="This i"
        due={format(new Date(), "d MMM")}
      />
      {/* Menu */}
      <Menu
        as="div"
        className="inline-block relative"
      >
        <div>
          {/* Label */}
          <Menu.Button className="relative rounded-xl py-2 pl-4 text-slate-400 hover:bg-brand-blue-gray-100 w-full text-left transition-all text-sm font-semibold">
            <FontAwesomeIcon
              icon={faPlus}
              className="mr-3"
            />
            Add card
          </Menu.Button>
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
          <Menu.Items className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faAlignLeft}
                      className="mr-4 w-4"
                    />
                    Note card
                  </A>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <A
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-semibold"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-4 w-4"
                    />
                    Checklist card
                  </A>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* End Menu */}
    </div>
  );
}
