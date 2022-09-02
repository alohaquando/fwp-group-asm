import { A } from "hookrouter";
import SlideOver from "../components/SlideOver";

export default function Home() {
  return (
    <div className=" bg-brand-blue-gray-50 min-h-screen flex">
      <div className="m-auto space-y-8">
        <SlideOver />
        {/* <div className="flex-col flex text-center">
          <h2>Some links for testing</h2>
          <A
            href="/signup"
            className="font-semibold text-brand-blue"
          >
            Sign up
          </A>
          <A
            href="/signin"
            className="font-semibold text-brand-blue"
          >
            Sign in
          </A>
        </div> */}
      </div>
    </div>
  );
}
