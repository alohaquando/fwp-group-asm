import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";

import { format, parseJSON } from "date-fns";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";
import Chip from "../chip/Chip";

import NoteCardModal from "../modals/NoteCardModal.jsx";
import ChecklistCardModal from "../modals/ChecklistCardModal.jsx";
import ListModal from "../modals/ListModal";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import { useData } from "../../data/data.jsx";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function List({
  _id,
  done,
  due,
  overdue,
  inSlideOver,
  title,
  parent_name,
  parent_id,
  ...props
}) {
  const [modalEditListOpen, setModalEditListOpen] = useState(false);

  const [modalConfirmDeleteOpen, setModalConfirmDeleteOpen] = useState(false);

  const [modalNewNoteCardOpen, setModalNewNoteCardOpen] = useState(false);
  const [modalNewChecklistCardOpen, setModalNewChecklistCardOpen] =
    useState(false);

  const data = useData();

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
    axios
      .delete(`http://localhost:3000/api/lists/${parent_id}/${_id}`)
      .then(() => {
        data.load();
        setModalConfirmDeleteOpen(false);
      });
  };

  const handleDone = () => {
    axios
      .patch(`http://localhost:3000/api/lists/${parent_id}/${_id}/done`)
      .then((res) => {
        console.log(res.data);
        data.load();
      });
  };

  const handleUnDone = () => {
    axios
      .patch(`http://localhost:3000/api/lists/${parent_id}/${_id}/undone`)
      .then((res) => {
        console.log(res.data);
        data.load();
      });
  };

  return (
    <div
      className={classNames(
        done
          ? "border border-brand-blue-gray-100 text-slate-400 shadow-none"
          : "bg-white border border-brand-blue-gray-100 bg-opacity-60",
        inSlideOver ? "shadow-sm" : "",
        "flex flex-col rounded-2xl space-y-4 py-5 px-6 w-full flex-1 relative"
      )}
    >
      {/* Title, Due Date or Done chip */}
      <div className="group-list">
        <div className="flex place-content-between space-x-8">
          {/* Title */}
          <h3 className="text-base font-semibold">{title}</h3>

          {/* Due Date or Done chip */}

          {/* Due Date */}
          {!done && (
            <h3
              className={classNames(
                overdue ? "text-red-500" : "text-brand-blue",
                "whitespace-nowrap text-base font-semibold"
              )}
            >
              {formatDate()}
            </h3>
          )}

          {/* Done chip */}
          {done && <Chip />}
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
                      onClick={handleUnDone}
                    >
                      Mark as undone
                    </MenuItemStyle>
                  </Menu.Item>
                )}

                <Menu.Item>
                  <MenuItemStyle
                    icon="faPen"
                    onClick={() => setModalEditListOpen(!modalEditListOpen)}
                  >
                    Edit
                  </MenuItemStyle>
                </Menu.Item>

                <Menu.Item>
                  <MenuItemStyle
                    icon="faXmark"
                    onClick={() =>
                      setModalConfirmDeleteOpen(!modalConfirmDeleteOpen)
                    }
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
      {!inSlideOver && !done && (
        <div className="space-y-4 w-full ">
          {props.children}
          {/* End Content */}

          {/*<button*/}
          {/*  onClick={() => setModalNewNoteCardOpen(!modalNewNoteCardOpen)}*/}
          {/*  className="relative rounded-xl py-2 pl-4 text-slate-400 hover:bg-brand-blue-gray-100 w-full text-left transition-all text-sm font-semibold"*/}
          {/*>*/}
          {/*  <FontAwesomeIcon*/}
          {/*    icon={faPlus}*/}
          {/*    className="mr-3"*/}
          {/*  />*/}
          {/*  Add card*/}
          {/*</button>*/}

          {/*Add Button and Menu */}
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
      {inSlideOver && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{parent_name}</p>
        </div>
      )}
      {/* / Parent Course Footer */}

      {/* Modal */}
      <ListModal
        _id={_id}
        openState={modalEditListOpen}
        onClose={() => setModalEditListOpen(!modalEditListOpen)}
        title={title}
        due={due}
        done={done}
        parent_id={parent_id}
        editMode={true}
        handleDelete={handleDelete}
      />

      <NoteCardModal
        parent_id={_id}
        openState={modalNewNoteCardOpen}
        onClose={() => setModalNewNoteCardOpen(!modalNewNoteCardOpen)}
      />

      <ChecklistCardModal
        parent_id={_id}
        openState={modalNewChecklistCardOpen}
        onClose={() => setModalNewChecklistCardOpen(!modalNewChecklistCardOpen)}
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
