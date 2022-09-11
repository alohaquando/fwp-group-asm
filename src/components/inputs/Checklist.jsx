import { useState } from "react";

export default function Checklist(props) {
  const [checked, setChecked] = useState(props.checked ? props.checked : false);

  const handleCheck = () => {
    // Code here
    setChecked(() => !checked);
  };

  return (
    <div className="flex space-x-2 place-items-start py-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        id={props.id}
        name={props.id}
        disabled={props.disabled ? true : false}
        className="rounded-full border-slate-500 transition hover:border-brand-blue hover:bg-blue-100 focus:ring-brand-blue active:bg-brand-blue checked:bg-brand-blue checked:hover:bg-brand-blue-700 checked:active:bg-brand-blue-700 checked:focus:bg-brand-blue checked:focus:hover:bg-brand-blue-700 
        disabled:hover:border-gray-400 disabled:bg-gray-200 disabled:active:bg-gray-200 disabled:hover:bg-gray-200 disabled:border-gray-400
        p-2 mt-0.5"
      />
      <label
        htmlFor={props.id}
        className="text-slate-500"
      >
        {props.children}
      </label>
    </div>
  );
}
