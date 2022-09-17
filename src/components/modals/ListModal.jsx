import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/DateInput";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Label from "../inputs/Label";
import Checklist from "../inputs/Checklist";
import DestructiveButton from "../buttons/DestructiveButton";
import { useData } from "../../data/data.jsx";
import axios from "axios";

export default function ListModal({
  _id,
  title,
  due,
  done,
  parent_id,
  editMode,
  openState,
  onClose,
  handleDelete,
}) {
  const [open, setOpen] = useState(openState);
  const [input, setInput] = useState({
    title: title ? title : "",
    due: due ? due : "",
    done: !!done,
    parent_id: parent_id,
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

  const handleCheckBoxChange = () => {
    setInput((prev) => ({
      ...prev,
      done: !input.done,
    }));
  };
  // End Handle input change

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editMode) {
      axios
        .post(`http://localhost:3000/api/lists/${parent_id}`, input)
        .then(() => {
          data.load();
          onClose();
        });
    } else if (editMode) {
      axios
        .patch(`http://localhost:3000/api/lists/${parent_id}/${_id}`, input)
        .then((res) => {
          console.log(res);
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
                    editMode
                      ? 'Edit assignment "' + title + '"'
                      : "Add assignment"
                  }
                  closeFunc={onClose}
                >
                  {/* Content */}
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      label="Assignment name"
                      id="title"
                      type="text"
                      value={editMode ? input.title : ""}
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />

                    <DateInput
                      label="Due date"
                      id="due"
                      type="date"
                      onChange={handleInputChange}
                      value={editMode ? input.due : ""}
                      showLabel
                    />

                    {editMode && (
                      <div className="space-y-1">
                        <Label>Status</Label>
                        <Checklist
                          id="done"
                          defaultChecked={input.done}
                          onChange={handleCheckBoxChange}
                        >
                          Done
                        </Checklist>
                      </div>
                    )}

                    {/* Button group */}
                    <div className="pt-8 transition space-x-3 sm:flex">
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
