import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/DateInput";
import PopupStyle from "./PopupStyle";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Label from "../inputs/Label";
import ChecklistField from "../inputs/ChecklistField";
import Checklist from "../inputs/Checklist.jsx";
import DestructiveButton from "../buttons/DestructiveButton";
import axios from "axios";
import { useData } from "../../data/data.jsx";

// TODO: Add checklist to post request

export default function ChecklistCardModal({
  _id,
  parent_id,
  title,
  due,
  done,
  content,
  openState,
  onClose,
  editMode,
  handleDelete,
}) {
  const [open, setOpen] = useState(openState);

  const [input, setInput] = useState({
    title: title,
    due: due,
    done: !!done,
  });

  const [checklistItemCount, setChecklistItemCount] = useState(
    content ? content[1].length : 1
  );

  const firstField = useRef(null);

  const data = useData();

  useEffect(() => {
    setOpen(openState);
    content
      ? content[1].forEach((item, i) => {
          setInput((prev) => ({
            ...prev,
            ["checklistItem_" + (i + 1)]: item.props.children,
          }));
        })
      : {};
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
      done: !input.done,
    }));
  };
  // End Handle input change

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let bodyToSubmit = {
      title: input.title,
      due: input.due,
      done: input.done,
      type: "checklist",
      checklistItems: [],
    };

    for (let i = 1; i <= checklistItemCount; i++) {
      let checklistItemObject = {
        title: input["checklistItem_" + i],
      };
      bodyToSubmit.checklistItems.push(checklistItemObject);
    }

    editMode
      ? axios
          .patch(
            `http://localhost:3000/api/cards/${parent_id}/${_id}`,
            bodyToSubmit
          )
          .then(() => {
            data.load();
            onClose();
          })
      : axios
          .post(`http://localhost:3000/api/cards/${parent_id}`, bodyToSubmit)
          .then(() => {
            data.load();
            onClose();
          });
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
                      ? 'Edit checklist card "' + title + '"'
                      : "Add checklist card"
                  }
                  closeFunc={onClose}
                >
                  {/* Content */}
                  <form
                    className="space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <TextInput
                      label="Card title"
                      id="title"
                      type="text"
                      value={input.title}
                      ref={firstField}
                      onChange={handleInputChange}
                      showLabel
                    />

                    <DateInput
                      label="Due date"
                      id="due"
                      value={input.due}
                      onChange={handleInputChange}
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

                    <div className="space-y-2">
                      <Label>Checklist</Label>

                      {[...Array(checklistItemCount)].map((_, i) => (
                        <ChecklistField
                          id={"checklistItem_" + (i + 1)}
                          value={input["checklistItem_" + (i + 1)]}
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
