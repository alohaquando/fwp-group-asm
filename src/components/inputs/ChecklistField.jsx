import Checklist from "./Checklist";
import TextInput from "./TextInput";

export default function ChecklistField({ id, onChange, value }) {
  return (
    <div className="flex place-items-center pl-3.5 space-x-1 w-full">
      <Checklist disabled />
      <TextInput
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        label="Checklist item"
      ></TextInput>
    </div>
  );
}
