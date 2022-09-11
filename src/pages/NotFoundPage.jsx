import { A } from "hookrouter";
import pageNotFoundIllustration from "../assets/404-bot.svg";

export default function NotFoundPage() {
  return (
    <div className=" bg-brand-blue-gray-50 min-h-screen text-center space-y-4 flex flex-col justify-center">
      <img
        src={pageNotFoundIllustration}
        className="block max-w-md mx-auto"
      />

      <h1 className="text-3xl font-semibold block">Page not found</h1>

      <A
        className="font-semibold text-white text-xl bg-brand-blue rounded-xl shadow-sm py-3 px-6 block max-w-min whitespace-nowrap mx-auto"
        href="/"
      >
        Go to home
      </A>
    </div>
  );
}
