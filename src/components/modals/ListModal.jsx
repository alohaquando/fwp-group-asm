import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/DateInput";
import TextArea from "../inputs/TextArea";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Label from "../inputs/Label";

export default function ListModal(props) {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState({});
  const firstField = useRef(null);

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

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={firstField}
        onClose={setOpen}
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
                    props.editMode ? "Edit " + props.asgmtName : "Add assignment"
                  }
                  closeFunc={() => setOpen(false)}
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
                      defaultValue={props.editMode ? props.asgmtName : ""}
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />
                    <DateInput
                      label="Due date"
                      id="asgmtDue"
                      type="date"
                      onChange={handleInputChange}
                      defaultValue={props.editMode ? props.asgmtDue : ""}
                      showLabel
                    />
                    {/* Button group */}
                    <div className="pt-8 space-x-3 sm:flex transition">
                      <PrimaryButton type="submit">
                        {props.editMode ? "Save" : "Add"}
                      </PrimaryButton>
                      <SecondaryButton onClick={() => setOpen(false)}>
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
