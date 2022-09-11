import { forwardRef } from "react";

const TextInput = forwardRef((props, ref) => {
  return (
    <div className="space-y-1 w-full">
      {props.showLabel && (
        <label
          htmlFor={props.id}
          className="font-semibold text-base text-slate-600 text-left block  pt-2"
        >
          {props.label}
        </label>
      )}
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.label}
        id={props.id}
        name={props.id}
        ref={ref}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        required
        className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition"
      />
    </div>
  );
});

export default TextInput;
