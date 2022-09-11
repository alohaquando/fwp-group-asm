import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/DateInput";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Label from "../inputs/Label";
import ChecklistField from "../inputs/ChecklistField";

export default function AddChecklistCard(props) {
  const [open, setOpen] = useState(props.open);
  const [input, setInput] = useState({});
  const [checklistItemCount, setChecklistItemCount] = useState(1);
  const firstField = useRef(null);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

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
  };
  // End Handle submission

  // Handle adding more checklist item
  const handleAddChecklistItem = (e) => {
    e.preventDefault();
    setChecklistItemCount(checklistItemCount + 1);
  };
  // End Handle adding more checklist item

  // Handle removing checklist item
  const handleRemoveChecklistItem = (e) => {
    e.preventDefault();
    setChecklistItemCount(checklistItemCount - 1);
    delete input["checklistItem_" + checklistItemCount];
  };
  // End Handle removing checklist item

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={firstField}
        onClose={props.onClose}
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
                  title="Add checklist card"
                  closeFunc={props.onClose}
                >
                  {/* Content */}
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      label="Card name"
                      id="name"
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />
                    <DateInput
                      label="Due date"
                      id="due"
                      onChange={handleInputChange}
                      showLabel
                    />

                    <div className="space-y-2">
                      <Label>Checklist</Label>

                      {[...Array(checklistItemCount)].map((_, i) => (
                        <ChecklistField
                          id={"checklistItem_" + (i + 1)}
                          key={i + 1}
                          onChange={handleInputChange}
                        />
                      ))}

                      <div className="flex">
                        <button
                          className="text-brand-blue font-semibold flex place-items-center py-2 px-4 rounded-lg hover:bg-slate-100 transition"
                          onClick={handleAddChecklistItem}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="mr-4"
                          />
                          Add item
                        </button>

                        {checklistItemCount > 1 && (
                          <button
                            className="text-slate-500 font-semibold flex place-items-center py-2 px-4 rounded-lg hover:bg-slate-100 transition"
                            onClick={handleRemoveChecklistItem}
                          >
                            <FontAwesomeIcon
                              icon={faXmark}
                              className="mr-4"
                            />
                            Remove item
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Button group */}
                    <div className="pt-8 space-x-3 sm:flex transition">
                      <PrimaryButton type="submit">Add</PrimaryButton>
                      <SecondaryButton onClick={props.onClose}>
                        Cancel
                      </SecondaryButton>
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
