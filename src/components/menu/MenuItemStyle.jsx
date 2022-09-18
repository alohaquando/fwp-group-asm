import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faArrowAltCircleRight,
  faArrowRotateLeft,
  faCalendar,
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faPen,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuItemStyle = forwardRef(
  ({ onClick, destructive, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={classNames(
          destructive ? "text-red-500" : "text-slate-900",
          "block px-4 py-2 font-semibold w-full  text-left hover:bg-gray-100 active:bg-slate-200"
        )}
      >
        <MenuIcon icon={icon} />
        {props.children}
      </button>
    );
  }
);

export default MenuItemStyle;

function MenuIcon(icon) {
  switch (icon.icon) {
    case "faCheck":
      return (
        <FontAwesomeIcon
          icon={faCheck}
          className="mr-4 w-4"
        />
      );

    case "faXmark":
      return (
        <FontAwesomeIcon
          icon={faXmark}
          className="mr-4 w-4"
        />
      );

    case "faPen":
      return (
        <FontAwesomeIcon
          icon={faPen}
          className="mr-4 w-4"
        />
      );

    case "faArrowRotateLeft":
      return (
        <FontAwesomeIcon
          icon={faArrowRotateLeft}
          className="mr-4 w-4"
        />
      );

    case "faArrowAltCircleRight":
      return (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="mr-4 w-4"
        />
      );

    case "faCalendar":
      return (
        <FontAwesomeIcon
          icon={faCalendar}
          className="mr-4 w-4"
        />
      );

    case "faAlignLeft":
      return (
        <FontAwesomeIcon
          icon={faAlignLeft}
          className="mr-4 w-4"
        />
      );

    case "faCheckCircle":
      return (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="mr-4 w-4"
        />
      );

    case "faUser":
      return (
        <FontAwesomeIcon
          icon={faUser}
          className="mr-4 w-4"
        />
      );

    default:
      return (
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="mr-4 w-4"
        />
      );
  }
}
