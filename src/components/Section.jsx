import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Section() {
  return (
    <div className="w-[360px] overflow-auto pb-10 mx-4 scrollbar-hide">
      <h2 className="bg-brand-blue-gray-50 text-xl font-semibold pb-4 sticky top-0 z-20">
        Further Web Programming
      </h2>
      <div className="space-y-3 flex-col flex">
        <List />
        {/* Menu */}

        {/* Button */}
        <button className="relative rounded-xl py-2.5 pl-4 border border-brand-blue-gray-100 text-slate-400 hover:bg-brand-blue-gray-100 w-full text-left transition-all text-sm font-semibold">
          <FontAwesomeIcon
            icon={faPlus}
            className="mr-3"
          />
          Add assignment
        </button>

        {/* End Menu */}
      </div>
    </div>
  );
}
