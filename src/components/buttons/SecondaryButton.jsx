export default function SecondaryButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="mt-3 inline-flex w-full justify-center rounded-xl bg-brand-blue-gray-50 px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto transition"
    >
      {props.children}
    </button>
  );
}
