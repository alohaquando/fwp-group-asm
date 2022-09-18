import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ChangePasswordSuccessModal(props) {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
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
                  title="Change password"
                  closeFunc={props.onClose}
                >
                  {/* Content */}
                  <div className="flex flex-col mb-8 mt-12 space-y-2 justify-center align-middle">
                    <div className="rounded-full bg-brand-blue bg-opacity-10 w-fit flex m-auto p-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-3xl font-extrabold text-brand-blue"
                      />
                    </div>
                    <p className="font-semibold">
                      Password changed successfully
                    </p>
                  </div>

                  {/* Button group */}
                  <div className="pt-8 space-x-3 sm:flex transition">
                    <PrimaryButton onClick={props.onClose}>
                      Back to planner
                    </PrimaryButton>
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
