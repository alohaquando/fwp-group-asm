import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../inputs/TextInput";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Label from "../inputs/Label";

export default function EditAccountModal(props) {
  const [open, setOpen] = useState(props.open);
  const [input, setInput] = useState({
    fullName: props.userFullName,
    username: props.username,
  });
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
                  title="Edit account"
                  closeFunc={props.onClose}
                >
                  {/* Content */}
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      label="Name"
                      id="fullName"
                      type="text"
                      ref={firstField}
                      onChange={handleInputChange}
                      value={input.fullName}
                      showLabel
                    />
                    <TextInput
                      label="Username"
                      id="username"
                      type="text"
                      onChange={handleInputChange}
                      value={input.username}
                      showLabel
                    />
                    <div className="flex flex-col">
                      <Label>Password</Label>
                      <SecondaryButton onClick={props.openChangePassword}>
                        Change password
                      </SecondaryButton>
                    </div>

                    {/* Button group */}
                    <div className="pt-8 transition space-x-3 sm:flex">
                      <PrimaryButton type="submit">Save</PrimaryButton>
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
