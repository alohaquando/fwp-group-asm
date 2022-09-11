import Board from "../components/main/Board";
import SlideOver from "../components/slideOver/SlideOver";

export default function Home() {
  return (
    <div className="bg-brand-blue-gray-50 min-h-screen min-w-content">
      {/* Main board */}
      <Board />

      {/* Right-side Slide Over */}
      <SlideOver />
    </div>
  );
}
