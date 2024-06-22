import { jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { C as CardTableKeluarbiayas } from "./CardTableKeluarbiayas-fd508d21.js";
import "./NotificationDropdown-c6384417.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "@inertiajs/react";
import "react-hot-toast";
import "tailwind-merge";
import "react-use";
import "lodash";
import "./Pagination-30af682d.js";
import "classnames";
import "./InputSearch-6032da7e.js";
import "./LinkButton-a291522b.js";
import "./AsyncSelectSearch-18bdafe3.js";
import "react-select/async";
import "./bootstrap-37cb65ea.js";
import "axios";
const Index = ({ keluarbiayas }) => {
  const {
    data,
    meta,
    links
  } = keluarbiayas;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTableKeluarbiayas, { color: "dark", keluarbiayas: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
