import { forwardRef } from "react";
import { format, parseISO } from "date-fns";

const DateInput = forwardRef(
  ({ id, label, showLabel, defaultValue, onChange, value }, ref) => {
    const formatDate = () => {
      try {
        return format(parseISO(value), "yyyy-MM-dd");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="space-y-1 ">
        {showLabel && (
          <label
            htmlFor={id}
            className="font-semibold text-base text-slate-600 text-left block pt-2"
          >
            {label}
          </label>
        )}
        <input
          type="date"
          id={id}
          name={id}
          placeholder={label}
          defaultValue={defaultValue}
          onChange={onChange}
          {...(value ? { value: formatDate() } : {})}
          required
          ref={ref}
          className="rounded-xl w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 active:ring-slate-500 transition"
        />
      </div>
    );
  }
);

export default DateInput;
