import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RadioGroup } from "@headlessui/react";
function Pilihstatusprosesperm({ statusprosesperms, statusprosesperm, setStatusprosesperm }) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-md", children: /* @__PURE__ */ jsxs(RadioGroup, { value: statusprosesperm, onChange: setStatusprosesperm, children: [
    /* @__PURE__ */ jsx(RadioGroup.Label, { className: "sr-only", children: "Server size" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: statusprosesperms.map((item) => /* @__PURE__ */ jsx(
      RadioGroup.Option,
      {
        value: item,
        className: ({ active, checked }) => `${active ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300" : ""}
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-4 py-2 shadow-md focus:outline-none`,
        children: ({ active, checked }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "text-sm", children: /* @__PURE__ */ jsxs(
            RadioGroup.Label,
            {
              as: "p",
              className: `flex gap-2 items-center font-medium  ${checked ? "text-white" : "text-gray-900"}`,
              children: [
                /* @__PURE__ */ jsx("img", { src: item.image_statusprosesperm, className: "w-7 h-auto rounded-full" }),
                /* @__PURE__ */ jsx("span", { children: item.nama_statusprosesperm })
              ]
            }
          ) }) }),
          checked && /* @__PURE__ */ jsx("div", { className: "shrink-0 text-white", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-6 w-6" }) })
        ] }) })
      },
      item.id
    )) })
  ] }) });
}
function CheckIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 12, fill: "#fff", opacity: "0.2" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7 13l3 3 7-7",
        stroke: "#fff",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
export {
  Pilihstatusprosesperm as P
};
