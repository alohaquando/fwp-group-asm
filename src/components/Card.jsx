import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { A } from "hookrouter";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Card(props) {
  return (
    <div className="p-4 rounded-xl border space-y-2 border-slate-200 bg-white shadow-sm w-full group relative">
      {/* Title and Due Date */}
      <div className="flex place-content-between">
        <p>{props.title}</p>
        <p className={props.overdue ? "text-red-500" : "text-slate-500"}>
          {props.due}
        </p>

        {/* Menu */}
        <Menu
          as="div"
          className="group-hover:block right-4 top-3 z-10 absolute hidden"
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
      </div>
      {/* End Title and Due Date */}

      {/* Content */}
      <p className="text-slate-500 line-clamp-2">{props.content}</p>

      {/* Parent Project Footer */}
      {props.parent && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{props.parent}</p>
        </div>
      )}
      {/* / Parent Project Footer */}
    </div>
  );
}
