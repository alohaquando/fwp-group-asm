import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function SlideOver() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Sheen Hahn
                  </h2>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* <!-- Replace with your content --> */}
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-full border-2 border-dashed border-gray-200"
                      aria-hidden="true"
                    ></div>
                  </div>
                  {/* <!-- /End replace --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
