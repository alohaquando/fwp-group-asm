import Section from "../components/Section";
import SlideOver from "../components/SlideOver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-brand-blue-gray-50 min-h-screen min-w-content">
      <div className="fixed inset-y-0 flex max-w-full overflow-x-auto pr-[340px]">
        <div className="pointer-events-auto relative">
          <div className="flex h-full overflow-y-scroll pl-4 pt-8">
            <Section />
            {/* Button */}
            <button className=" flex-1 relative rounded-xl pl-4 text-slate-400 hover:bg-brand-blue-gray-100 w-[360px] max-h-fit text-left transition-all text-xl font-semibold ">
              <FontAwesomeIcon
                icon={faPlus}
                className="mr-3"
              />
              Add course
            </button>
            {/* End Button */}
          </div>
        </div>
      </div>

      {/* Right-side Slide Over */}
      <SlideOver />
    </div>
  );
}
