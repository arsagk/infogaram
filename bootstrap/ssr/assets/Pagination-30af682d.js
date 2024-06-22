import { jsx, jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { Link } from "@inertiajs/react";
const IconNextPrev = ({ label }) => {
  let hasil;
  if (label.includes("Previous")) {
    hasil = /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-left -ml-px" });
  } else if (label.includes("Next")) {
    hasil = /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-right -mr-px" });
  } else {
    hasil = /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: label } });
  }
  return hasil;
};
const PageLink = ({ active, label, url }) => {
  const className = classNames(
    [
      "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid "
    ],
    {
      "border-lightBlue-500 text-white bg-lightBlue-500": active
    },
    {
      "border-lightBlue-500 bg-white text-lightBlue-500": !active
    }
  );
  return /* @__PURE__ */ jsx(Link, { className, href: url, children: /* @__PURE__ */ jsx(IconNextPrev, { label }) });
};
const PageInactive = ({ label }) => {
  const className = classNames(
    "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-lightBlue-200 "
  );
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsx(IconNextPrev, { label }) });
};
const Pagination = ({ links, labelLinks }) => {
  if (links.length ? links.length === 3 : null)
    return null;
  return /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("nav", { className: "block", children: /* @__PURE__ */ jsxs("ul", { className: "flex pl-0 rounded list-none flex-wrap", children: [
    /* @__PURE__ */ jsx("li", { children: labelLinks ? /* @__PURE__ */ jsxs(Link, { href: labelLinks.first, className: "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500", children: [
      /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-left -ml-px" }),
      /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-left -ml-px" })
    ] }) : null }),
    links.map(({ active, label, url }) => {
      return url === null ? /* @__PURE__ */ jsx(PageInactive, { label }, label) : /* @__PURE__ */ jsx(PageLink, { label, active, url }, label);
    }),
    /* @__PURE__ */ jsx("li", { children: labelLinks ? /* @__PURE__ */ jsxs(Link, { href: labelLinks.last, className: "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500", children: [
      /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-right -mr-px" }),
      /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-right -mr-px" })
    ] }) : null })
  ] }) }) });
};
export {
  Pagination as P
};
