import { forwardRef } from "react";

const TextInput = forwardRef(
  ({ id, label, showLabel, onChange, value, type, defaultValue }, ref) => {
    return (
      <div className="space-y-1 w-full">
        {showLabel && (
          <label
            htmlFor={id}
            className="font-semibold text-base text-slate-600 text-left block  pt-2"
          >
            {label}
          </label>
        )}
        <input
          type={type ? type : "text"}
          placeholder={label}
          id={id}
          name={id}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
          {...(value ? { value: value } : {})}
          required
          className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition"
        />
      </div>
    );
  }
);

export default TextInput;
