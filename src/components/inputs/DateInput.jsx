import { forwardRef } from "react";

const DateInput = forwardRef((props, ref) => {
  return (
    <div className="space-y-1 ">
      {props.showLabel && (
        <label
          htmlFor={props.id}
          className="font-semibold text-base text-slate-600 text-left block pt-2"
        >
          {props.label}
        </label>
      )}
      <input
        type="date"
        id={props.id}
        name={props.id}
        placeholder={props.label}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        required
        ref={ref}
        className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition"
      />
    </div>
  );
});

export default DateInput;
