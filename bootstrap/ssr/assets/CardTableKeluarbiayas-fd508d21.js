import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePage, router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { P as Pagination } from "./Pagination-30af682d.js";
import { I as InputSearch } from "./InputSearch-6032da7e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
function CardTableKeluarbiayas({ color = "light", keluarbiayas, className = "", meta, labelLinks }) {
  const params = new URLSearchParams(window.location.search);
  const [values, setValues] = useState({ search: params.get("search"), sortBy: params.get("sortBy"), sortDir: params.get("sortDir") });
  const prevValues = usePrevious(values);
  const { isAdmin, user, base_route } = usePage().props;
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
              children: "PENGELUARAN BIAYA"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 flex-row items-start", children: [
            isAdmin ? /* @__PURE__ */ jsx(AsyncSelectSearch, { placeholder: "Pilih User", value: user, name: "users", url: "/admin/users/api/list/", onChange: (e) => setValues((v) => ({ ...v, user_id: e ? e.value : "" })), isClearable: true, optionLabels: ["name"], optionValue: "id", className: "text-blueGray-900" }) : null,
            /* @__PURE__ */ jsx(InputSearch, { value: values.search ? values.search : "", onChange: (e) => setValues((v) => ({ ...v, search: e.target.value })) }),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                theme: "blue",
                href: route(base_route + "transaksi.keluarbiayas.create"),
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
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Instansi" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Metode Bayar" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between", children: /* @__PURE__ */ jsx("span", { children: "Kasbon" }) })
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
          /* @__PURE__ */ jsx("tbody", { children: keluarbiayas.map(({ id, created_at, instansi, metodebayar, kasbons, user: user2, status_keluarbiaya }, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: created_at }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: instansi.nama_instansi }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: metodebayar.nama_metodebayar }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: kasbons.length > 0 ? kasbons.map((e, i) => /* @__PURE__ */ jsx("span", { children: e.id }, i)) : /* @__PURE__ */ jsx("span", { children: "No Kasbon" }) }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: user2.name }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1", children: status_keluarbiaya }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 ", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route(base_route + "transaksi.keluarbiayas.edit", id),
                className: "text-lightBlue-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150",
                type: "button",
                children: /* @__PURE__ */ jsx("i", { className: "fas fa-edit" })
              }
            ) })
          ] }, index)) })
        ] }) }),
        meta.total > meta.per_page ? /* @__PURE__ */ jsx("div", { className: "flex justify-end px-2 py-1  " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: /* @__PURE__ */ jsx(Pagination, { links: meta.links, labelLinks }) }) : null
      ]
    }
  ) });
}
export {
  CardTableKeluarbiayas as C
};
