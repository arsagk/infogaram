import { jsxs, jsx } from "react/jsx-runtime";
import { NumberFormatBase } from "react-number-format";
import { twMerge } from "tailwind-merge";
function MoneyInput(props) {
  const format = (numStr) => {
    if (numStr === "")
      return "";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(numStr);
  };
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3", props.className), children: [
    props.label && /* @__PURE__ */ jsx(
      "label",
      {
        className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${props.errors ? "text-red-500" : ""} `,
        children: props.label
      }
    ),
    /* @__PURE__ */ jsx(NumberFormatBase, { ...props, format, className: `border-0 px-3 py-2 disabled:border-slate-200 disabled:shadow-none disabled:bg-slate-200  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ` }),
    props.errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: props.errors }) : null
  ] });
}
export {
  MoneyInput as M
};
