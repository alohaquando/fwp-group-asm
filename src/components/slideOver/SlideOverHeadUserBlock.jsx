import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { navigate } from "hookrouter";

import MenuItemStyle from "../menu/MenuItemStyle";
import EditAccountModal from "../modals/EditAccountModal.jsx";
import ChangePasswordModal from "../modals/ChangePasswordModal.jsx";
import ChangePasswordSuccessModal from "../modals/ChangePasswordSuccessModal.jsx";

export default function SlideOverHeaderUserBlock(props) {
  const [modalEditAccountOpen, setModalEditAccountOpen] = useState(false);
  const [modalChangePasswordOpen, setModalChangePasswordOpen] = useState(false);
  const [modalChangePasswordSuccessOpen, setModalChangePasswordSuccessOpen] =
    useState(false);

  const handleSignOut = () => {
    navigate("/signin", true);
  };

  return (
    <div className="flex place-content-between place-items-center border-b-2 border-b-slate-100 px-4 py-4 sm:px-6">
      {/* User Full Name */}
      <h2
        className="text-base font-medium text-gray-900 line-clamp-1"
        id="slide-over-title"
      >
        {props.userFullName}
      </h2>
      {/* End User Full Name */}
      {/* Dropdown Menu */}
      <Menu
        as="div"
        className="relative inline-block"
      >
        <div>
          {/* Menu Button */}
          <Menu.Button className="rounded-lg px-3 py-1 text-slate-400 transition hover:bg-brand-blue-gray-50">
            <FontAwesomeIcon icon={faAngleDown} />
          </Menu.Button>
          {/* End Menu Button */}
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {/* Menu Items */}

              <Menu.Item>
                <MenuItemStyle
                  icon="faUser"
                  onClick={() => setModalEditAccountOpen(!modalEditAccountOpen)}
                >
                  Edit account
                </MenuItemStyle>
              </Menu.Item>

              <Menu.Item>
                <MenuItemStyle
                  icon="faArrowAltCircleRight"
                  destructive
                  onClick={handleSignOut}
                >
                  Sign out
                </MenuItemStyle>
              </Menu.Item>

              {/* End Menu Items */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <EditAccountModal
        open={modalEditAccountOpen}
        onClose={() => setModalEditAccountOpen(!modalEditAccountOpen)}
        openChangePassword={() => {
          setModalEditAccountOpen(!modalEditAccountOpen);
          setModalChangePasswordOpen(!modalChangePasswordOpen);
        }}
        userFullName={props.userFullName}
        username="jhahnsheen"
      />
      <ChangePasswordModal
        open={modalChangePasswordOpen}
        onClose={() => setModalChangePasswordOpen(!setModalChangePasswordOpen)}
        onSuccess={() => {
          setModalChangePasswordOpen(!setModalChangePasswordOpen);
          setModalChangePasswordSuccessOpen(!modalChangePasswordSuccessOpen);
        }}
      />
      <ChangePasswordSuccessModal
        open={modalChangePasswordSuccessOpen}
        onClose={() => {
          setModalChangePasswordSuccessOpen(!modalChangePasswordSuccessOpen);
        }}
      />
    </div>
  );
}
