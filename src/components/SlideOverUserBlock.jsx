import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { A } from "hookrouter";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SlideOverUserBlock(props) {
  return (
    <div className="px-4 sm:px-6 flex place-content-between place-items-center border-b-slate-100 border-b-2 py-4 ">
      {/* User Full Name */}
      <h2
        className=" text-base font-medium text-gray-900"
        id="slide-over-title"
      >
        {props.name}
      </h2>

      {/* Dropdown Menu */}
      <Menu
        as="div"
        className="relative inline-block"
      >
        <div>
          {/* Label */}
          <Menu.Button className="py-1 px-3 rounded-lg hover:bg-brand-blue-gray-50 text-slate-400">
            <FontAwesomeIcon icon={faAngleDown} />
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
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
                      icon={faUser}
                      className="mr-3 w-4"
                    />
                    Account
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
                      icon={faArrowCircleRight}
                      className="mr-3 w-4"
                    />
                    Sign out
                  </A>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
