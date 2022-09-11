import { forwardRef } from "react";

const TextArea = forwardRef(
  ({ label, showLabel, id, value, onChange, defaultValue }, ref) => {
    return (
      <div className="space-y-1 pt-2">
        {showLabel && (
          <label
            htmlFor={id}
            className="font-semibold text-base text-slate-600 text-left block "
          >
            {label}
          </label>
        )}
        <textarea
          placeholder={label}
          id={id}
          name={id}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
          {...(value ? { value: value } : {})}
          required
          className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition h-40"
        />
      </div>
    );
  }
);

export default TextArea;
