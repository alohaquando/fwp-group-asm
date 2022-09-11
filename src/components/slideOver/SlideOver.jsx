import SlideOverHeader from "./SlideOverHeader";
import SlideOverCardList from "./SlideOverCardList";

export default function SlideOver() {
  // NOTE: This is something
  return (
    <div
      className="relative z-10 "
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
        <div className="pointer-events-auto relative w-screen max-w-xs">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pb-8">
            <SlideOverHeader />

            {/* Cards Section*/}
            <SlideOverCardList />
          </div>
        </div>
      </div>
    </div>
  );
}
