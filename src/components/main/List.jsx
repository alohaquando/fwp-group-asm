import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { format, parseJSON } from "date-fns";

import { Fragment } from "react";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";
import Chip from "../chip/Chip";

import AddNoteCard from "../modals/AddNoteCard";
import AddChecklistCard from "../modals/AddChecklistCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function List(props) {
  const [modalNewNoteCardOpen, setModalNewNoteCardOpen] = useState(false);
  const [modalNewChecklistCardOpen, setModalNewChecklistCardOpen] =
    useState(false);

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
        props.done
          ? "border border-brand-blue-gray-100 text-slate-400 shadow-none"
          : "bg-white border border-brand-blue-gray-100 bg-opacity-60",
        props.inSlideOver ? "shadow-sm" : "",
        "flex flex-col rounded-2xl space-y-4 py-5 px-6 w-full flex-1 relative"
      )}
    >
      {/* Title, Due Date or Done chip */}
      <div className="group-list">
        <div className="flex place-content-between space-x-8">
          {/* Title */}
          <h3 className="text-base font-semibold">{props.title}</h3>

          {/* Due Date or Done chip */}

          {/* Due Date */}
          {!props.done && (
            <h3
              className={classNames(
                props.overdue ? "text-red-500" : "text-brand-blue",
                "whitespace-nowrap text-base font-semibold"
              )}
            >
              {formatDate()}
            </h3>
          )}

          {/* Done chip */}
          {props.done && <Chip />}
        </div>
        {/* End Title, Due Date or Done chip */}

        {/* Menu */}
        <Menu
          as="div"
          className="group-list-hover:opacity-100 right-6 top-4 z-10 absolute opacity-0 transition"
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
      {!props.inSlideOver && !props.done && (
        <div className="space-y-4 w-full ">
          {props.children}
          {/* End Content */}

          {/* Add Button and Menu */}
          <Menu
            as="div"
            className="inline-block relative w-full"
          >
            <div>
              {/* Menu Button */}
              <Menu.Button className="relative rounded-xl py-2 pl-4 text-slate-400 hover:bg-brand-blue-gray-100 w-full text-left transition-all text-sm font-semibold">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="mr-3"
                />
                Add card
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
              <Menu.Items className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {/* Menu Items */}

                  <Menu.Item>
                    <MenuItemStyle
                      icon="faAlignLeft"
                      onClick={() =>
                        setModalNewNoteCardOpen(!modalNewNoteCardOpen)
                      }
                    >
                      Note card
                    </MenuItemStyle>
                  </Menu.Item>

                  <Menu.Item>
                    <MenuItemStyle
                      icon="faCheckCircle"
                      onClick={() =>
                        setModalNewChecklistCardOpen(!modalNewChecklistCardOpen)
                      }
                    >
                      Checklist card
                    </MenuItemStyle>
                  </Menu.Item>

                  {/* End Menu Items */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* End Add Button and Menu */}
        </div>
      )}
      {/* Parent Course Footer */}
      {props.parent && props.inSlideOver && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{props.parent}</p>
        </div>
      )}
      {/* / Parent Course Footer */}

      {/* Modal */}
      <AddNoteCard
        open={modalNewNoteCardOpen}
        onClose={() => setModalNewNoteCardOpen(!modalNewNoteCardOpen)}
      />

      <AddChecklistCard
        open={modalNewChecklistCardOpen}
        onClose={() => setModalNewChecklistCardOpen(!modalNewChecklistCardOpen)}
      />
      {/* End Modal */}
    </div>
  );
}
