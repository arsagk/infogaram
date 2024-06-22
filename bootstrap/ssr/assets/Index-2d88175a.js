import { jsx } from "react/jsx-runtime";
import { C as CardTableKeluarbiayapermusers } from "./CardTableKeluarbiayapermusers-d698b302.js";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import "react";
import "tailwind-merge";
import "@inertiajs/react";
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
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Index = ({ keluarbiayapermusers }) => {
  const {
    data,
    meta,
    links
  } = keluarbiayapermusers;
  return /* @__PURE__ */ jsx(StafLayout, { children: /* @__PURE__ */ jsx(CardTableKeluarbiayapermusers, { color: "dark", keluarbiayapermusers: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
