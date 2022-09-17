import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../inputs/TextInput";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import DestructiveButton from "../buttons/DestructiveButton";
import axios from "axios";
import { useData } from "../../data/data.jsx";

export default function SectionModal({
  _id,
  title,
  openState,
  onClose,
  editMode,
  handleDelete,
}) {
  const [open, setOpen] = useState(openState);
  const [input, setInput] = useState({
    title: title ? title : "",
  });
  const firstField = useRef(null);

  const data = useData();

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  // Handle input change
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // End Handle input change

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      axios.post("http://localhost:3000/api/sections", input).then(() => {
        data.load();
        onClose();
      });
    } else if (editMode) {
      axios
        .patch(`http://localhost:3000/api/sections/${_id}`, input)
        .then(() => {
          data.load();
          onClose();
        });
    }
  };
  // End Handle submission

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={firstField}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel>
                {/* Modal title and style */}
                <PopupStyle
                  title={
                    editMode ? 'Edit course "' + title + '"' : "Add course"
                  }
                  closeFunc={onClose}
                >
                  {/* Content */}
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      label="Course name"
                      id="title"
                      type="text"
                      defaultValue={editMode ? input.title : ""}
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />
                    {/* Button group */}
                    <div className="pt-8 space-x-3 sm:flex transition">
                      <PrimaryButton type="submit">
                        {editMode ? "Save" : "Add"}
                      </PrimaryButton>
                      <SecondaryButton onClick={onClose}>
                        Cancel
                      </SecondaryButton>
                      {editMode && (
                        <div className="flex flex-1 place-content-end">
                          <DestructiveButton onClick={handleDelete}>
                            Delete
                          </DestructiveButton>
                        </div>
                      )}
                    </div>
                    {/* End Button Group */}
                  </form>
                  {/* End Content */}
                </PopupStyle>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
