export default function SlideOverCardListBlock(props) {
  return (
    <div className="flex-1 space-y-3">
      <h3 className="font-medium text-[0.8125rem] pt-2">
        {props.dateCountdown}
      </h3>
      {props.children}
    </div>
  );
}
