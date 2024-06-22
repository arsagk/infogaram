import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { P as Pagination } from "./Pagination-30af682d.js";
import { I as InputSearch } from "./InputSearch-6032da7e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "sweetalert2";
import "classnames";
function CardTablePostingjurnals({ color = "light", postingjurnals, className = "", meta, labelLinks }) {
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
  const handleRemoveData = (id) => {
    router.delete(route("admin.transaksi.postingjurnals.destroy", id));
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
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
              children: "Posting Jurnal List"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 flex-row items-start", children: [
            /* @__PURE__ */ jsx(InputSearch, { value: values.search ? values.search : "", onChange: (e) => setValues((v) => ({ ...v, search: e.target.value })) }),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                theme: "blue",
                href: route("admin.transaksi.postingjurnals.create"),
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plus" }),
                  " New"
                ] })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
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
                children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "uraian", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Uraian" }),
                  /* @__PURE__ */ jsx(IconSort, { sortBy: "uraian", sortDir: values.sortDir || "" })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Jumlah" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "User" }) })
              }
            ),
            /* @__PURE__ */ jsx("th", { className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: "Options" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: postingjurnals.map(({ id, uraian, user, jumlah }, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: id }),
            /* @__PURE__ */ jsxs("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-circle text-orange-500 mr-2" }),
              " ",
              uraian
            ] }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: jumlah }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: user.name }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-1 ", children: [
              /* @__PURE__ */ jsx(Link, { href: route("admin.transaksi.postingjurnals.edit", id), className: "text-lightBlue-500 background-transparent font-bold px-3 py-1 text-xs outline-none focus:outline-none hover:text-lightBlue-100 hover:scale-105 mr-1 mb-1 ease-linear transition-all duration-150", type: "button", children: "Edit" }),
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
        ] }) }),
        meta.total > meta.per_page ? /* @__PURE__ */ jsx("div", { className: "flex justify-end px-2 py-1  " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: /* @__PURE__ */ jsx(Pagination, { links: meta.links, labelLinks }) }) : null
      ]
    }
  ) });
}
const Index = ({ postingjurnals }) => {
  const {
    data,
    meta,
    links
  } = postingjurnals;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTablePostingjurnals, { color: "dark", postingjurnals: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
