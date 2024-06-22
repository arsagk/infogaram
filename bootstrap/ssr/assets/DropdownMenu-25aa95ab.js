import { jsxs, jsx } from "react/jsx-runtime";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
function DropdownMenu({ children, title }) {
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Menu.Button, { className: "inline-flex w-full justify-center rounded-md bg-black/20 px-1 py-1 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75", children: title ? /* @__PURE__ */ jsx("span", { children: title }) : /* @__PURE__ */ jsx(
      Bars3Icon,
      {
        className: "m-auto h-5 w-5 text-violet-200 hover:text-violet-100",
        "aria-hidden": "true"
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(Menu.Items, { className: "absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none", children: /* @__PURE__ */ jsx("div", { className: "px-1 py-1", children }) })
      }
    )
  ] });
}
export {
  DropdownMenu as D
};
