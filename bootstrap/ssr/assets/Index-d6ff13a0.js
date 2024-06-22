import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePage, router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { P as Pagination } from "./Pagination-30af682d.js";
import { I as InputSearch } from "./InputSearch-6032da7e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { D as DropdownMenu } from "./DropdownMenu-25aa95ab.js";
import { Menu } from "@headlessui/react";
import { E as EditActiveIcon, a as EditInactiveIcon } from "./index-0c7aab93.js";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "classnames";
import "@heroicons/react/20/solid";
import "react-select/async";
import "./bootstrap-37cb65ea.js";
import "axios";
function CardTableKasbons({ color = "light", kasbons, className = "", meta, labelLinks }) {
  const { isAdmin, user } = usePage().props;
  const params = new URLSearchParams(window.location.search);
  const [values, setValues] = useState({ search: params.get("search"), sortBy: params.get("sortBy"), sortDir: params.get("sortDir") });
  const prevValues = usePrevious(values);
  function handleSortLinkClick({ sortBy, sortDir }) {
    setValues((values2) => ({ ...values2, sortBy, sortDir }));
  }
  const IconSort = ({ sortBy, sortDir }) => {
    if (values.sortBy === sortBy && sortDir === "asc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-up" });
    } else if (values.sortBy === sortBy && sortDir === "desc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-down" });
    }
    return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort" });
  };
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-700 rounded-md py-1 ",
        color === "light" ? "bg-white" : "bg-lightBlue-900 text-white",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-full mb-0 px-4 py-3 border-0 ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full flex-col md:flex-row", children: [
          /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-full flex-grow flex-1 ", children: /* @__PURE__ */ jsx(
            "h3",
            {
              className: "font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white"),
              children: "Kasbon List"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 flex-row items-start", children: [
            isAdmin ? /* @__PURE__ */ jsx(AsyncSelectSearch, { placeholder: "Pilih User", value: user, name: "users", url: "/admin/users/api/list/", onChange: (e) => setValues((v) => ({ ...v, user_id: e ? e.value : "" })), isClearable: true, optionLabels: ["name"], optionValue: "id", className: "text-blueGray-900" }) : null,
            /* @__PURE__ */ jsx(InputSearch, { value: values.search ? values.search : "", onChange: (e) => setValues((v) => ({ ...v, search: e.target.value })) }),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                theme: "blue",
                href: route("admin.transaksi.kasbons.create"),
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plus" }),
                  " New"
                ] })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto overflow-y-visible md:overflow-visible", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "created_at", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Tanggal" }),
                  /* @__PURE__ */ jsx(IconSort, { sortBy: "created_at", sortDir: values.sortDir || "" })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Jumlah Kasbon" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Penggunaan" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Sisa Penggunaan" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Keperluan" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "User" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Status" }) })
              }
            ),
            /* @__PURE__ */ jsx("th", { className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: "Options" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: kasbons.map(({ id, tgl_kasbon, jumlah_kasbon, jumlah_penggunaan, sisa_penggunaan, keperluan, user: user2, status_kasbon }, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: tgl_kasbon }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: jumlah_kasbon }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: jumlah_penggunaan }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: sisa_penggunaan }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: keperluan }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: user2.name }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: status_kasbon }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(DropdownMenu, { children: /* @__PURE__ */ jsx(Menu.Item, { as: "div", className: "relative", children: ({ active }) => /* @__PURE__ */ jsx(Fragment, { children: status_kasbon != "cancelled" && isAdmin ? /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("admin.transaksi.kasbons.edit", id),
                className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                children: [
                  /* @__PURE__ */ jsx(
                    EditActiveIcon,
                    {
                      className: "mr-2 h-5 w-5",
                      "aria-hidden": "true"
                    }
                  ),
                  "Edit"
                ]
              }
            ) : /* @__PURE__ */ jsxs("span", { className: "text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm", children: [
              /* @__PURE__ */ jsx(
                EditInactiveIcon,
                {
                  className: "mr-2 h-5 w-5",
                  "aria-hidden": "true"
                }
              ),
              "Edit"
            ] }) }) }) }) }) })
          ] }, index)) })
        ] }) }),
        meta.total > meta.per_page ? /* @__PURE__ */ jsx("div", { className: "flex justify-end px-2 py-1  " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: /* @__PURE__ */ jsx(Pagination, { links: meta.links, labelLinks }) }) : null
      ]
    }
  );
}
const Index = ({ kasbons }) => {
  const {
    data,
    meta,
    links
  } = kasbons;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTableKasbons, { color: "dark", kasbons: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
