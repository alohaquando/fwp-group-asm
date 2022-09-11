export default function PrimaryButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="inline-flex w-full justify-center rounded-xl border border-transparent bg-brand-blue px-4 py-2.5 text-base font-medium text-white shadow-sm hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 sm:w-auto transition"
    >
      {props.children}
    </button>
  );
}
