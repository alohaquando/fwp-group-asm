export default function Card(props) {
  return (
    <div className="p-4 rounded-xl border space-y-2 border-slate-200 shadow-sm w-full">
      {/* Title and Due Date */}
      <div className="flex place-content-between">
        <p>{props.title}</p>
        <p className={props.overdue ? "text-red-500" : "text-slate-500"}>
          {props.due}
        </p>
      </div>

      {/* Content */}
      <p className="text-slate-500 line-clamp-2">{props.content}</p>

      {/* Parent Project Footer */}
      {props.parent && (
        <div className="space-y-2 block pt-2">
          <div className="border-b-slate-100 border-b" />
          <p className="text-sm text-slate-400">{props.parent}</p>
        </div>
      )}
    </div>
  );
}
