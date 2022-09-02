import Calendar from "./Calendar";
import UserBlock from "./UserBlock";

export default function SlideOverHeader() {
  return (
    <div className="sticky top-0 z-20 bg-white transition-shadow">
      {/* User information */}
      <UserBlock name="Sheen Joseph Hahn" />

      {/* Calendar */}
      <div className="flex-1">
        <Calendar />
        <div className="mx-4 border-b-slate-100 border-b-2" />
      </div>
    </div>
  );
}
