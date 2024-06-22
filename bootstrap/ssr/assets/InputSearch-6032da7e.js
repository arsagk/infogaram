import { jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
const InputSearch = ({ value, onChange, className = "", ...props }) => {
  new URLSearchParams(window.location.search);
  return /* @__PURE__ */ jsx("div", { className: twMerge("relative mb-3", className), children: /* @__PURE__ */ jsx(
    "input",
    {
      name: "search",
      value,
      onChange,
      ...props,
      className: `border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 `
    }
  ) });
};
export {
  InputSearch as I
};
