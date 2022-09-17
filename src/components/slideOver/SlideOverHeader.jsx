import Calendar from "./Calendar";
import SlideOverHeaderUserBlock from "./SlideOverHeadUserBlock";

export default function SlideOverHeader() {
  return (
    <div className="sticky top-0 z-20 bg-white ">
      {/* User information */}
      <SlideOverHeaderUserBlock userFullName="My account" />

      {/* Calendar */}
      <div className="flex-1 ">
        <Calendar />
        <div className="border-b-slate-100 border-b-2" />
      </div>
    </div>
  );
}
