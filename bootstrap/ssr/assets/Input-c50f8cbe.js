import { jsxs, jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
const Input = React.forwardRef(({ label, errors, className, focused, name, autoComplete = "off", ...props }, ref) => {
  useEffect(() => {
    if (focused)
      ref.current.focus();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3", className), children: [
    label && /* @__PURE__ */ jsx(
      "label",
      {
        className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${errors ? "text-red-500" : ""} `,
        children: label
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        ref,
        name,
        autoComplete,
        ...props,
        className: `border-0 px-3 py-2 disabled:bg-blueGray-200 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 `
      }
    ),
    errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors }) : null
  ] });
});
const Input$1 = Input;
export {
  Input$1 as I
};
