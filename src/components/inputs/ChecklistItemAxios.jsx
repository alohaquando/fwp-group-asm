import { useState } from "react";
import { useData } from "../../data/data.jsx";
import axios from "axios";

export default function ChecklistItemAxios({
  defaultChecked,
  onChange,
  _id,
  list_id,
  card_id,
  disabled,
  ...props
}) {
  const data = useData();

  const [checked, setChecked] = useState(defaultChecked);

  const handleCheck = () => {
    if (checked === true) {
      axios
        .patch(
          `http://localhost:3000/api/checklists/${list_id}/${card_id}/${_id}/undone`
        )
        .then(() => {
          setChecked(!checked);
          data.load();
        });
    } else {
      axios
        .patch(
          `http://localhost:3000/api/checklists/${list_id}/${card_id}/${_id}/done`
        )
        .then(() => {
          setChecked(!checked);
          data.load();
        });
    }
  };

  return (
    <div className="flex space-x-2 place-items-start py-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        id={_id}
        name={_id}
        disabled={disabled ? disabled : false}
        className="rounded-full border-slate-500 transition hover:border-brand-blue hover:bg-blue-100 focus:ring-brand-blue active:bg-brand-blue checked:bg-brand-blue checked:hover:bg-brand-blue-700 checked:active:bg-brand-blue-700 checked:focus:bg-brand-blue checked:focus:hover:bg-brand-blue-700 disabled:hover:border-gray-400 disabled:bg-gray-200 disabled:active:bg-gray-200 disabled:hover:bg-gray-200 disabled:border-gray-400 p-2 mt-0.5"
      />
      <label
        htmlFor={_id}
        className="text-slate-500"
      >
        {props.children}
      </label>
    </div>
  );
}
