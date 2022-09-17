import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import MenuItemStyle from "../menu/MenuItemStyle";
import ListModal from "../modals/ListModal.jsx";
import SectionModal from "../modals/SectionModal";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal.jsx";
import axios from "axios";
import { useData } from "../../data/data.jsx";

export default function Section({ _id, title, ...props }) {
  const [modalEditSectionOpen, setModalEditSectionOpen] = useState(false);

  const [modalConfirmDeleteOpen, setModalConfirmDeleteOpen] = useState(false);

  const [modalNewListOpen, setModalNewListOpen] = useState(false);

  const data = useData();

  const handleDelete = () => {
    axios.delete("http://localhost:3000/api/sections/" + _id).then((res) => {
      console.log(res);
      data.load();
      setModalConfirmDeleteOpen(false);
    });
  };

  return (
    <div className="w-[360px] pb-10 mx-4 scrollbar-hide overflow-auto">
      <div className="sticky top-0 z-20 group-section">
        {/* Title  */}
        <h2 className="pb-4 text-xl font-semibold bg-brand-blue-gray-50">
          {title}
        </h2>
        {/* End Total */}

        {/* Menu */}
        <Menu
          as="div"
          className="absolute top-0 right-4 z-30 opacity-0 group-section-hover:opacity-100 transition"
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
                  <MenuItemStyle
                    icon="faPen"
                    onClick={() =>
                      setModalEditSectionOpen(!modalEditSectionOpen)
                    }
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

      <div className="flex flex-col space-y-3">
        {/* Content */}
        {props.children}
        {/* End Content */}

        {/* Add button */}
        <button
          onClick={() => setModalNewListOpen(!modalNewListOpen)}
          className="relative rounded-xl py-2.5 pl-4 text-slate-400 hover:bg-brand-blue-gray-100 hover:py-4 w-full text-left transition-all text-sm font-semibold"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="mr-3"
          />
          Add assignment
        </button>
        {/* End Add button */}
      </div>

      {/*Modal*/}
      <SectionModal
        _id={_id}
        title={title}
        openState={modalEditSectionOpen}
        onClose={() => setModalEditSectionOpen(!modalEditSectionOpen)}
        handleDelete={handleDelete}
        editMode={true}
      />

      <ConfirmDeleteModal
        name={title}
        openState={modalConfirmDeleteOpen}
        confirmDelete={handleDelete}
        onClose={() => {
          setModalConfirmDeleteOpen(!modalConfirmDeleteOpen);
        }}
      ></ConfirmDeleteModal>

      <ListModal
        openState={modalNewListOpen}
        onClose={() => setModalNewListOpen(!modalNewListOpen)}
        editMode={false}
      />
      {/*End Modal*/}
    </div>
  );
}
