import { jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { C as CardTableKeluarbiayapermusers } from "./CardTableKeluarbiayapermusers-d698b302.js";
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
const Index = ({ keluarbiayapermusers }) => {
  const {
    data,
    meta,
    links
  } = keluarbiayapermusers;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTableKeluarbiayapermusers, { color: "dark", keluarbiayapermusers: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
