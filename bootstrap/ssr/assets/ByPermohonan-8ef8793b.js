import { jsx, jsxs } from "react/jsx-runtime";
import { C as CardFilterProsesbyPermohonan, a as CardListProsesbyPermohonan } from "./CardListProsesbyPermohonan-9a03a1fb.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage } from "@inertiajs/react";
import "./PermohonanSelect-77b2bb7a.js";
import "react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
import "tailwind-merge";
import "swr";
import "./bootstrap-37cb65ea.js";
import "axios";
import "./PilihStatusprosesperm-50875269.js";
import "./SelectSearch-f716b8b3.js";
import "lodash";
import "react-select";
import "react-use";
import "./Pagination-30af682d.js";
import "classnames";
import "moment";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const ByPermohonan = () => {
  const { itemprosespermsOpts, prosespermohonans } = usePage().props;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3", children: /* @__PURE__ */ jsx(
      CardFilterProsesbyPermohonan,
      {
        itemprosespermsOpts
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ jsx(
      CardListProsesbyPermohonan,
      {
        prosespermohonans
      }
    ) })
  ] }) });
};
export {
  ByPermohonan as default
};
