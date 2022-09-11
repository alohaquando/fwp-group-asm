import { forwardRef } from "react";

const TextArea = forwardRef((props, ref) => {
  return (
    <div className="space-y-1 ">
      {props.showLabel && (
        <label
          htmlFor={props.id}
          className="font-semibold text-base text-slate-600 text-left block "
        >
          {props.label}
        </label>
      )}
      <textarea
        placeholder={props.label}
        id={props.id}
        name={props.id}
        ref={ref}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        required
        className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition h-40"
      />
    </div>
  );
});

export default TextArea;
