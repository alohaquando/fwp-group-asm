import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import PopupStyle from "./PopupStyle";
import SecondaryButton from "../buttons/SecondaryButton";
import DestructiveButton from "../buttons/DestructiveButton";

export default function ConfirmDeleteModal(props) {
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
                  title={"Delete " + props.name + "?"}
                  closeFunc={() => setOpen(false)}
                >
                  {/* Content */}
                  <div className="flex flex-col mb-8 mt-12 space-y-2 justify-center align-middle">
                    <div className="rounded-full bg-yellow-100 bg-opacity-80 w-fit flex m-auto p-3">
                      <FontAwesomeIcon
                        icon={faExclamation}
                        className="text-3xl font-extrabold text-yellow-400 w-7"
                      />
                    </div>
                    <p className="">Deleted items cannot be restored</p>
                  </div>

                  {/* Button group */}
                  <div className="pt-8 space-x-3 sm:flex transition">
                    <DestructiveButton onClick={() => setOpen(false)}>
                      Delete
                    </DestructiveButton>
                    <SecondaryButton onClick={() => setOpen(false)}>
                      Keep
                    </SecondaryButton>
                  </div>
                  {/* End Button Group */}
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
