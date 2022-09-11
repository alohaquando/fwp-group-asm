export default function Label(props) {
  return (
    <label
      htmlFor={props.id}
      className="font-semibold text-base text-slate-600 text-left block pt-2"
    >
      {props.children}
    </label>
  );
}
