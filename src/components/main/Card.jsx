import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { format, parseJSON } from "date-fns";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";
import Chip from "../chip/Chip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Card(props) {
  const formatDate = () => {
    if (props.due) {
      if (new Date().getFullYear() == parseJSON(props.due).getFullYear()) {
        return format(parseJSON(props.due), "dd MMM");
      } else {
      return format(parseJSON(props.due), "dd MMM yyyy");
      }
    } else {
      return;
    }
  };

  return (
    <div
      className={classNames(
        props.done ? "text-slate-400" : "bg-white shadow-sm",
        "p-4 rounded-xl border space-y-2 border-slate-200 w-full group-card relative"
      )}
    >
      {/* Title, Due Date or Done chip */}
      <div className="flex place-content-between space-x-6">
        {/* Title */}
        <p>{props.title}</p>

        {/* Due Date or Done chip */}

        {/* Due Date */}
        {!props.done && props.due && (
          <p
            className={classNames(
              props.overdue ? "text-red-500" : "text-slate-500",
              "whitespace-nowrap"
            )}
          >
            {formatDate()}
          </p>
        )}

        {/* Done chip */}
        {props.done && <Chip />}
        {/* End Title, Due Date or Done chip */}

        {/* Menu */}
        <Menu
          as="div"
          className="group-card-hover:opacity-100 right-4 top-3 z-10 absolute opacity-0 transition"
        >
          <div>
            {/* Menu Button */}
            <Menu.Button className="absolute origin-top-right right-0 rounded-md bg-white px-2 py-0.5 shadow-md border border-brand-blue-gray-100 text-black">
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

                {!props.done && (
                  <Menu.Item>
                    <MenuItemStyle icon="faCheck">Mark as done</MenuItemStyle>
                  </Menu.Item>
                )}
                {props.done && (
                  <Menu.Item>
                    <MenuItemStyle icon="faArrowRotateLeft">
                      Mark as undone
                    </MenuItemStyle>
                  </Menu.Item>
                )}

                <Menu.Item>
                  <MenuItemStyle icon="faPen">Edit</MenuItemStyle>
                </Menu.Item>

                <Menu.Item>
                  <MenuItemStyle icon="faCalendar">
                    Change due date
                  </MenuItemStyle>
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

      {/* Content */}
      {!props.done && props.type == "note" && (
        <p className="text-slate-500 text-base">{props.children}</p>
      )}
      {!props.done && props.type == "checklist" && (
        <div className="space-y-1">{props.children}</div>
      )}
      {/* End Content */}

      {/* Parent Course Footer */}
      {props.parent && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{props.parent}</p>
        </div>
      )}
      {/* / Parent Course Footer */}
    </div>
  );
}
