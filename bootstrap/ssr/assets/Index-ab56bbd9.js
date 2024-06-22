import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { P as Pagination } from "./Pagination-30af682d.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "sweetalert2";
import "classnames";
function CardTablePermissions({ color = "light", permissions, className = "", meta, labelLinks }) {
  const params = new URLSearchParams(window.location.search);
  const prevValues = usePrevious({ sortBy: "", sortDir: "" });
  const [values, setValues] = useState({ sortBy: params.get("sortBy"), sortDir: params.get("sortDir") });
  function handleSortLinkClick({ sortBy: sortBy2, sortDir }) {
    setValues({ sortBy: sortBy2, sortDir });
  }
  const IconSort = ({ sortBy: sortBy2, sortDir }) => {
    if (values.sortBy === sortBy2 && sortDir === "asc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-up" });
    } else if (values.sortBy === sortBy2 && sortDir === "desc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-down" });
    }
    return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort" });
  };
  const handleRemoveData = (id) => {
    router.delete(route("admin.permissions.destroy", id));
  };
  console.log(meta);
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-md py-2 shadow-slate-600 ",
        color === "light" ? "bg-white" : "bg-lightBlue-900 text-white",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-t mb-2 px-2 py-1 border-0", children: /* @__PURE__ */ jsxs("div", { className: "text-center flex justify-between", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-blueGray-700 text-lg font-bold uppercase " + (color === "light" ? "text-blueGray-700" : "text-white"), children: "Permissions" }),
          /* @__PURE__ */ jsx(LinkButton, { theme: "blue", href: route("admin.permissions.create"), children: "New Permission" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "block w-full overflow-x-auto", children: [
          /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "id", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "Id" }),
                    /* @__PURE__ */ jsx(IconSort, { sortBy: "id", sortDir: values.sortDir || "" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "name", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "Name" }),
                    /* @__PURE__ */ jsx(IconSort, { sortBy: "name", sortDir: values.sortDir || "" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Email"
                }
              ),
              /* @__PURE__ */ jsx("th", { className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: "Options" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: permissions.map(({ id, name, email }, index) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: id }),
              /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: name }),
              /* @__PURE__ */ jsxs("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-circle text-orange-500 mr-2" }),
                " ",
                email
              ] }),
              /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-1 ", children: [
                /* @__PURE__ */ jsx(Link, { href: route("admin.permissions.edit", id), className: "text-lightBlue-500 background-transparent font-bold px-3 py-1 text-xs outline-none focus:outline-none hover:text-lightBlue-100 hover:scale-105 mr-1 mb-1 ease-linear transition-all duration-150", type: "button", children: "Edit" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: (e) => useSwal.confirm({
                      title: "Hapus Data",
                      text: "apakah akan menghapus?"
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleRemoveData(id);
                      }
                    }),
                    className: "text-lightBlue-500 background-transparent font-bold px-3 py-1 text-xs outline-none focus:outline-none hover:text-lightBlue-100 hover:scale-105 mr-1 mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    children: "Hapus"
                  }
                )
              ] }) })
            ] }, index)) })
          ] }),
          meta.total > meta.per_page ? /* @__PURE__ */ jsx("div", { className: "flex justify-end px-2 py-1  " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: /* @__PURE__ */ jsx(Pagination, { links: meta.links, labelLinks }) }) : null
        ] })
      ]
    }
  ) });
}
const Index = ({ permissions }) => {
  const {
    data,
    meta,
    links
  } = permissions;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTablePermissions, { color: "dark", permissions: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
