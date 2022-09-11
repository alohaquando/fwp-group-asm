import format from "date-fns/format";
import Card from "../main/Card";
import List from "../main/List";
import SlideOverCardListBlock from "./SlideOverCardListBlock";

export default function SlideOverCardListSection(props) {
  return (
    <div className="flex-1 px-6 space-y-3">
      <h2 className="font-semibold text-base pt-6">{props.title}</h2>
      {props.children}
    </div>
  );
}
