import format from "date-fns/format";
import Card from "./Card";
import SlideOverHeader from "./SlideOverHeader";

export default function SlideOver() {
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-xs">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pb-8">
                <SlideOverHeader />

                {/* Cards Section*/}
                <div
                  id="test"
                  className="flex-1 px-6 mt-8 space-y-3"
                >
                  <h2 className="font-semibold text-lg">Overdue</h2>
                  <Card
                    title="This title"
                    content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing
        12345"
                    parent="Assignment Name"
                    due={format(new Date(), "d MMM")}
                    overdue
                  />
                  <Card
                    title="This title"
                    content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing
        12345"
                    due={format(new Date(), "d MMM")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
