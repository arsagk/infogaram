import { jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
const Button = ({ theme, className, children, ...props }) => {
  let css = "";
  if (theme === "blue") {
    css = "bg-lightBlue-500 text-white active:bg-lightBlue-600  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mb-1 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ";
  } else if (theme === "black") {
    css = "bg-blueGray-800 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg mb-1 outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 ";
  } else {
    css = "bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md items-center font-bold text-xs ease-linear transition-all duration-150 ";
  }
  return /* @__PURE__ */ jsx("button", { className: twMerge(css, className), ...props, children });
};
export {
  Button as B
};
