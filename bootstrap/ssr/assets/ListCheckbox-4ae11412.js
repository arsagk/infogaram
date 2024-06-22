import { jsxs, jsx } from "react/jsx-runtime";
import InputMask from "react-input-mask";
import { twMerge } from "tailwind-merge";
const InputWithMask = ({
  maskPlaceholder,
  beforeMaskedStateChange,
  mask,
  className,
  label,
  errors,
  autoComplete = "off",
  ...rest
}) => {
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3", className), children: [
    label && /* @__PURE__ */ jsx(
      "label",
      {
        className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${errors ? "text-red-500" : ""} `,
        children: label
      }
    ),
    /* @__PURE__ */ jsx(
      InputMask,
      {
        mask,
        autoComplete,
        maskPlaceholder,
        className: `border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 `,
        ...rest
      }
    ),
    errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors }) : null
  ] });
};
const ListCheckbox = ({ list, onItemChange }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-full px-2 py-2 mb-2 border rounded-md shadow-md flex flex-col md:flex-row", children: list.map((lst, i) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("input", { type: "radio", value: lst.value, checked: lst.active, onChange: (e) => onItemChange(e.target.value) }),
    /* @__PURE__ */ jsx("span", { className: "mx-2", children: lst.label })
  ] }, i)) });
};
export {
  InputWithMask as I,
  ListCheckbox as L
};
