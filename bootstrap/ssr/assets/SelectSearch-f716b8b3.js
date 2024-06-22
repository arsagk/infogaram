import { jsxs, jsx } from "react/jsx-runtime";
import { omit } from "lodash";
import Select from "react-select";
import { twMerge } from "tailwind-merge";
const SelectSearch = (props) => {
  const id = props.id || Math.random().toString();
  const reactSelectProps = omit(props, ["label", "className"]);
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3 ", props.className), children: [
    props.label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${props.errors ? "text-red-500" : ""} `, children: props.label }),
    /* @__PURE__ */ jsx(
      Select,
      {
        className: "shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
        ...reactSelectProps,
        theme: (theme) => ({
          ...theme
          // colors: {
          //     ...theme.colors,
          //     primary: "var(--primary-500)",
          // },
        })
      }
    ),
    props.errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: props.errors }) : null
  ] });
};
export {
  SelectSearch as S
};
