import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { format, parseJSON } from "date-fns";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";
import Chip from "../chip/Chip";
import NoteCardModal from "../modals/NoteCardModal.jsx";
import ChecklistCardModal from "../modals/ChecklistCardModal.jsx";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal.jsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({
  title,
  due,
  done,
  type,
  overdue,
  parent,
  ...props
}) {
  const [modalEditNoteCardOpen, setModalEditNoteCardOpen] = useState(false);

  const [modalEditChecklistCardOpen, setModalEditChecklistCardOpen] =
    useState(false);

  const [modalConfirmDeleteOpen, setModalConfirmDeleteOpen] = useState(false);

  const formatDate = () => {
    if (due) {
      if (new Date().getFullYear() === parseJSON(due).getFullYear()) {
        return format(parseJSON(due), "dd MMM");
      } else {
        return format(parseJSON(due), "dd MMM yyyy");
      }
    }
  };

  const handleDelete = () => {
    // code
  };

  const handleDone = () => {
    // code
  };

  return (
    <div
      className={classNames(
        done ? "text-slate-400" : "bg-white shadow-sm",
        "p-4 rounded-xl border space-y-2 border-slate-200 w-full group-card relative"
      )}
    >
      {/* Title, Due Date or Done chip */}
      <div className="flex place-content-between space-x-6">
        {/* Title */}
        <p>{title}</p>

        {/* Due Date or Done chip */}

        {/* Due Date */}
        {!done && due && (
          <p
            className={classNames(
              overdue ? "text-red-500" : "text-slate-500",
              "whitespace-nowrap"
            )}
          >
            {formatDate()}
          </p>
        )}

        {/* Done chip */}
        {done && <Chip />}
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

                {!done && (
                  <Menu.Item>
                    <MenuItemStyle
                      icon="faCheck"
                      onClick={handleDone}
                    >
                      Mark as done
                    </MenuItemStyle>
                  </Menu.Item>
                )}
                {done && (
                  <Menu.Item>
                    <MenuItemStyle
                      icon="faArrowRotateLeft"
                      onClick={handleDone}
                    >
                      Mark as undone
                    </MenuItemStyle>
                  </Menu.Item>
                )}

                <Menu.Item>
                  <MenuItemStyle
                    icon="faPen"
                    onClick={() => {
                      if (type === "note") {
                        setModalEditNoteCardOpen(!modalEditNoteCardOpen);
                      } else if (type === "checklist") {
                        setModalEditChecklistCardOpen(
                          !modalEditChecklistCardOpen
                        );
                      }
                    }}
                  >
                    Edit
                  </MenuItemStyle>
                </Menu.Item>

                <Menu.Item>
                  <MenuItemStyle
                    icon="faXmark"
                    onClick={() => {
                      setModalConfirmDeleteOpen(!modalConfirmDeleteOpen);
                    }}
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
      {!done && type === "note" && (
        <p className="text-slate-500 text-base">{props.children}</p>
      )}
      {!done && type === "checklist" && (
        <div className="space-y-1">{props.children}</div>
      )}
      {/* End Content */}

      {/* Parent Course Footer */}
      {parent && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{parent}</p>
        </div>
      )}
      {/* / Parent Course Footer */}

      {/* Modal */}
      <NoteCardModal
        title={title}
        due={due}
        done={done}
        content={props.children}
        openState={modalEditNoteCardOpen}
        onClose={() => setModalEditNoteCardOpen(!modalEditNoteCardOpen)}
        editMode={true}
        handleDelete={() => {
          setModalEditNoteCardOpen(!modalEditNoteCardOpen);
          setModalConfirmDeleteOpen(!modalConfirmDeleteOpen);
        }}
      />

      <ChecklistCardModal
        title={title}
        due={due}
        done={done}
        content={props.children}
        openState={modalEditChecklistCardOpen}
        onClose={() =>
          setModalEditChecklistCardOpen(!modalEditChecklistCardOpen)
        }
        editMode={true}
        handleDelete={() => {
          setModalEditChecklistCardOpen(!modalEditChecklistCardOpen);
          setModalConfirmDeleteOpen(!modalConfirmDeleteOpen);
        }}
      />

      <ConfirmDeleteModal
        name={title}
        openState={modalConfirmDeleteOpen}
        confirmDelete={handleDelete}
        onClose={() => {
          setModalConfirmDeleteOpen(!modalConfirmDeleteOpen);
        }}
      ></ConfirmDeleteModal>
      {/* End Modal */}
    </div>
  );
}
