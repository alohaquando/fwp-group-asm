export default function SlideOverCardListSection(props) {
  return (
    <div className="flex-1 px-6 space-y-3">
      <h2 className="font-semibold text-base pt-6">{props.title}</h2>
      {props.children}
    </div>
  );
}
