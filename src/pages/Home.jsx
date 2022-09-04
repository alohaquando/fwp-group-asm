import { A } from "hookrouter";
import List from "../components/List";
import SlideOver from "../components/SlideOver";

export default function Home() {
  return (
    <div className="bg-brand-blue-gray-50 min-h-screen min-w-content">
      <div className="fixed inset-y-0 flex max-w-full overflow-x-auto pr-[340px]">
        <div className="pointer-events-auto relative">
          <div className="flex h-full overflow-y-scroll pl-4 pt-8">
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>

      {/* Right-side Slide Over */}
      <SlideOver />
    </div>
  );
}
