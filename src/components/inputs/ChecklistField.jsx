import Checklist from "./Checklist";
import TextInput from "./TextInput";

export default function ChecklistField(props) {
  return (
    <div className="flex place-items-center pl-3.5 space-x-1 w-full">
      <Checklist disabled />
      <TextInput
        id={props.id}
        name={props.id}
        onChange={props.onChange}
        label="Checklist item"
      ></TextInput>
    </div>
  );
}
