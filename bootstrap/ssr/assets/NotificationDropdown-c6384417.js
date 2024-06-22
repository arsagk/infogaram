import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { R as ResponsiveNavLink } from "./ResponsiveNavLink-41b4fa07.js";
import { usePage } from "@inertiajs/react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
function HeaderBlank() {
  return /* @__PURE__ */ jsx("div", { className: "relative bg-lightBlue-600 md:pt-32 pb-32 pt-12", children: /* @__PURE__ */ jsx("div", { className: "px-4 md:px-10 mx-auto w-full", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-6/12 xl:w-3/12 px-4" }) }) }) }) });
}
const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const wrapperRef = useRef(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && wrapperRef.current.contains(event.target))
        ;
      else {
        closeDropdownPopover();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "text-blueGray-500 block",
        href: "#pablo",
        ref: btnDropdownRef,
        onClick: (e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        },
        children: /* @__PURE__ */ jsx("div", { className: "items-center flex", children: /* @__PURE__ */ jsx("span", { className: "w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            alt: "...",
            className: "w-full rounded-full align-middle border-none shadow-lg",
            src: "/img/team-1-800x800.jpg"
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: popoverDropdownRef,
        className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Action"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Another action"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Something else here"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "h-0 my-2 border border-solid border-blueGray-100" }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700", children: "Log Out" })
        ]
      }
    )
  ] });
};
function Navbar() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "text-white text-sm uppercase hidden lg:inline-block font-semibold",
        href: "#pablo",
        onClick: (e) => e.preventDefault(),
        children: "Dashboard"
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: "flex-col md:flex-row list-none items-center hidden md:flex", children: /* @__PURE__ */ jsx(UserDropdown, {}) })
  ] }) }) });
}
const ToastMessages = () => {
  const { flash, errors } = usePage().props;
  useEffect(() => {
    if (flash.success) {
      toast.success(flash.success);
    } else if (flash.error) {
      toast.error(flash.error);
    } else if (flash.message) {
      toast(flash.message);
    }
  }, [flash]);
  return /* @__PURE__ */ jsx(
    Toaster,
    {
      position: "top-center",
      reverseOrder: false,
      gutter: 8,
      containerClassName: "",
      containerStyle: {},
      toastOptions: {
        // Define default options
        className: "",
        duration: 5e3,
        style: {
          background: "#363636",
          color: "#fff"
        },
        // Default options for specific types
        success: {
          style: {
            background: "green"
          }
        },
        error: {
          style: {
            background: "red"
          }
        }
      },
      children: (t) => /* @__PURE__ */ jsx(
        ToastBar,
        {
          toast: t,
          style: {
            ...t.style
          },
          children: ({ icon, message }) => /* @__PURE__ */ jsxs(Fragment, { children: [
            icon,
            message,
            t.type !== "loading" && /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-sm border-none rounded-full shadow-sm hover:text-green-200",
                onClick: () => toast.dismiss(t.id),
                children: "x"
              }
            )
          ] })
        }
      )
    }
  );
};
const NotificationDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "text-blueGray-500 block py-1 px-3",
        href: "#pablo",
        ref: btnDropdownRef,
        onClick: (e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        },
        children: /* @__PURE__ */ jsx("i", { className: "fas fa-bell" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: popoverDropdownRef,
        className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48",
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Action"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Another action"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Something else here"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "h-0 my-2 border border-solid border-blueGray-100" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#pablo",
              className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
              onClick: (e) => e.preventDefault(),
              children: "Seprated link"
            }
          )
        ]
      }
    )
  ] });
};
export {
  HeaderBlank as H,
  NotificationDropdown as N,
  ToastMessages as T,
  UserDropdown as U,
  Navbar as a
};
