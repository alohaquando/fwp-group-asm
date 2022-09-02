import { A } from "hookrouter";
import SlideOver from "../components/SlideOver";

export default function Home() {
  return (
    <div className=" bg-brand-blue-gray-50 min-h-screen flex">
      <div className="m-auto space-y-8">
        <SlideOver />
      </div>
    </div>
  );
}
