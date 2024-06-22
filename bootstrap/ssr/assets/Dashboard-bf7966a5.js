import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { C as CardLineChart, a as CardSocialTraffic, b as CardPageVisits } from "./CardSocialTraffic-43ca2d25.js";
import "./NotificationDropdown-c6384417.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "chart.js/auto";
function Dashboard({
  auth,
  traffics,
  recentActivities
}) {
  console.log(traffics);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4", children: /* @__PURE__ */ jsx(CardLineChart, {}) }),
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-4/12 px-4", children: /* @__PURE__ */ jsx(CardSocialTraffic, { traffics }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-4", children: /* @__PURE__ */ jsx("div", { className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4", children: /* @__PURE__ */ jsx(CardPageVisits, { recentActivities }) }) })
        ] })
      ]
    }
  );
}
export {
  Dashboard as default
};
