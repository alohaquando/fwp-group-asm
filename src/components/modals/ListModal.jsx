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

export default function ListModal({
  asgmtName,
  asgmtDue,
  asgmtDone,
  editMode,
  openState,
  onClose,
}) {
  const [open, setOpen] = useState(openState);
  const [input, setInput] = useState({
    asgmtName: asgmtName ? asgmtName : "",
    asgmtDue: asgmtDue ? asgmtDue : "",
    asgmtDone: !!asgmtDone,
  });
  const firstField = useRef(null);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  // Handle input change
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(input);
  };

  const handleCheckBoxChange = () => {
    setInput((prev) => ({
      ...prev,
      asgmtDone: !input.asgmtDone,
    }));
    console.log(input);
  };
  // End Handle input change

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDelete = () => {
    // code
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
                      ? 'Edit assignment "' + asgmtName + '"'
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
                      id="asgmtName"
                      type="text"
                      value={editMode ? input.asgmtName : ""}
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />

                    <DateInput
                      label="Due date"
                      id="asgmtDue"
                      type="date"
                      onChange={handleInputChange}
                      value={editMode ? input.asgmtDue : ""}
                      showLabel
                    />

                    {editMode && (
                      <div className="space-y-1">
                        <Label>Status</Label>
                        <Checklist
                          id="asgmtDone"
                          defaultChecked={input.asgmtDone}
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
                      <div className="flex flex-1 place-content-end">
                        <DestructiveButton onClick={handleDelete}>
                          Delete
                        </DestructiveButton>
                      </div>
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
