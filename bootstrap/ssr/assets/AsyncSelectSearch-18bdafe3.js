import { jsxs, jsx } from "react/jsx-runtime";
import { omit } from "lodash";
import { twMerge } from "tailwind-merge";
import AsyncSelect from "react-select/async";
import { m as myapp } from "./bootstrap-37cb65ea.js";
const AsyncSelectSearch = (props) => {
  const id = props.id || Math.random().toString();
  const reactSelectProps = omit(props, ["label", "className"]);
  const getOptions = async (inputValue) => {
    const response = await myapp.backend.get(`${props.url}?query=${inputValue}`);
    const data = response.data.reduce((r, i) => {
      const labels = props.optionLabels.reduce((results, item, idx) => results += `${idx > 0 ? " - " : ""} ${i[item]}`, "");
      r.push({ label: labels, value: i[props.optionValue] });
      return r;
    }, []);
    return data;
  };
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3", props.className), children: [
    props.label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${props.errors ? "text-red-500" : ""} `, children: props.label }),
    /* @__PURE__ */ jsx(
      AsyncSelect,
      {
        className: "shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
        ...reactSelectProps,
        loadOptions: getOptions,
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
  AsyncSelectSearch as A
};
