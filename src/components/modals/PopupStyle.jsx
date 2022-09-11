import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalStyle(props) {
  return (
    <div className="relative transform overflow-hidden rounded-xl bg-white shadow-xl transition-all sm:my-8 w-[90vw] sm:max-w-2xl">
      <div className="bg-white px-4 pt-5 pb-4 sm:px-8 sm:py-6 sm:mx-2">
        <div className="mt-3 text-center flex sm:mt-0 mb-5 place-content-between">
          <Dialog.Title
            as="h3"
            className="text-xl font-medium text-gray-900 text-left"
          >
            {props.title}
          </Dialog.Title>
          <button
            className="py-1 px-3 rounded-lg hover:bg-brand-blue-gray-50 text-slate-400 transition opacity-0 sm:opacity-100 focus:ring-0 active:ring-0"
            onClick={props.closeFunc}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl"
            />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}
