import Board from "../components/main/Board";
import SlideOver from "../components/slideOver/SlideOver";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-blue-gray-50 min-w-content">
      {/* Main board */}
      <Board />

      {/* Right-side Slide Over */}
      <SlideOver />
    </div>
  );
}
