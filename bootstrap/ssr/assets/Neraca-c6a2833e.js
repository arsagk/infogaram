import { jsxs, jsx } from "react/jsx-runtime";
import { M as ModalCetakLaporan } from "./ModalCetakLaporan-1f197389.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { router } from "@inertiajs/react";
import { pickBy } from "lodash";
import { useState, useEffect } from "react";
import { usePrevious } from "react-use";
import "./Modal-1ab71745.js";
import "@headlessui/react";
import "./bootstrap-37cb65ea.js";
import "axios";
import "react-dom";
import "@emotion/react";
import "@emotion/cache";
import "react-loader-spinner";
import "react-select";
import "tailwind-merge";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Neraca = ({ neracas, totDebet, totKredit, year, yearOpts }) => {
  const [values, setValues] = useState({ year });
  const cyear = yearOpts.find((e) => e.value == values.year);
  const [curYear, setCurYear] = useState(cyear ? cyear : null);
  const [showModalLaporan, setShowModalLaporan] = useState(false);
  const [url, setUrl] = useState();
  const prevValues = usePrevious(values);
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);
  const handlePrint = () => {
    setUrl(route(route().current() + "") + `?year=${year}&media=print`);
    setShowModalLaporan(true);
    console.log(route(route().current() + "") + `?year=${year}&media=print`);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center relative -top-2", children: /* @__PURE__ */ jsx("div", { className: "w-full px-2", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-100 border-0", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-t mb-2 px-4 pt-4 ", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex  justify-between bg-lightBlue-800 text-lightBlue-100 px-2 py-2 shadow-md rounded-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("h1", { className: "font-semibold", children: "NERACA" }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 lg:w-1/6 text-blueGray-800 flex flex-col md:flex-row justify-between items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            SelectSearch,
            {
              name: "year",
              value: curYear,
              options: yearOpts,
              placeholder: "Pilih Tahun",
              onChange: (e) => {
                setValues((prev) => ({ ...prev, year: e.value }));
                setCurYear(e ? e : {});
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                handlePrint();
              },
              className: "text-lightBlue-300 background-transparent font-bold uppercase px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
              type: "button",
              children: /* @__PURE__ */ jsx("i", { className: "fas fa-print" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-auto px-2 lg:px-4 py-6 pt-0", children: neracas ? /* @__PURE__ */ jsx("div", { className: "p-1 w-full flex-col", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-y-2 font-semibold bg-slate-300", children: [
          /* @__PURE__ */ jsx("td", { width: "10%", children: "Kode" }),
          /* @__PURE__ */ jsx("td", { width: "50%", children: "Nama Akun" }),
          /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: "Debet" }),
          /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: "Kredit" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: neracas.map((neraca, i) => /* @__PURE__ */ jsx("tr", { className: "border-b-2", children: Object.keys(neraca).map((item, idx) => /* @__PURE__ */ jsx(
          "td",
          {
            className: `${idx > 1 ? "text-right" : ""}`,
            children: neraca[item]
          },
          idx
        )) }, i)) }),
        /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsxs("tr", { className: "font-semibold border-b-2 bg-slate-300", children: [
          /* @__PURE__ */ jsx("td", { width: "10%", children: " " }),
          /* @__PURE__ */ jsx("td", { width: "50%", children: "Total" }),
          /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: totDebet }),
          /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: totKredit })
        ] }) })
      ] }) }) : null })
    ] }) }) }),
    /* @__PURE__ */ jsx(ModalCetakLaporan, { showModal: showModalLaporan, setShowModal: setShowModalLaporan, src: url })
  ] });
};
export {
  Neraca as default
};
