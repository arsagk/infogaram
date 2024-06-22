import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { Fragment as Fragment$1, useState, useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePage, router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { P as Pagination } from "./Pagination-30af682d.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
import { Popover, Transition, Combobox } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { B as Button } from "./Button-deab8ed4.js";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "sweetalert2";
import "classnames";
import "react-select/async";
import "./bootstrap-37cb65ea.js";
import "axios";
import "react-select";
function PopupMenu({ children, caption, panelClass }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Popover, { className: "relative", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Popover.Button,
      {
        className: `
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`,
        children: [
          /* @__PURE__ */ jsx("span", { children: caption }),
          /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              className: `${open ? "text-orange-300" : "text-orange-300/70"} ${open ? "rotate-180 transform" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80 `,
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment$1,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        children: /* @__PURE__ */ jsx(Popover.Panel, { className: twMerge("absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl", panelClass), children: /* @__PURE__ */ jsx("div", { className: "relative overflow-y-visible rounded-md shadow-slate-400 shadow-lg ring-1 ring-black/5", children: /* @__PURE__ */ jsx("div", { className: "relative grid gap-2 bg-white p-7 lg:grid-cols-2 z-50 rounded-md", children }) }) })
      }
    )
  ] }) }) });
}
function SearchableCombobox({ options, className, onValueChange, value }) {
  const val = options.find((v) => v.value.includes(value ? value : ""));
  const [selected, setSelected] = useState(val);
  const [query, setQuery] = useState("");
  const filteredOption = query === "" ? options : options.filter(
    (person) => person.label.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );
  const onChange = (e) => {
    const val2 = options.find((v) => v === e);
    setSelected(val2 ? val2 : options[0]);
    onValueChange(e);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Combobox, { value: selected ? selected : "", onChange, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full cursor-default overflow-hidden bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm", className), children: [
      /* @__PURE__ */ jsx(
        Combobox.Input,
        {
          className: "w-full border-none py-2 pl-3 pr-8 text-sm leading-5 text-gray-900 focus:ring-0",
          displayValue: (person) => person.label,
          onChange: (event) => setQuery(event.target.value)
        }
      ),
      /* @__PURE__ */ jsx(Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsx(
        ChevronUpDownIcon,
        {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment$1,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => setQuery(""),
        children: /* @__PURE__ */ jsx(Combobox.Options, { className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm", children: filteredOption.length === 0 && query !== "" ? /* @__PURE__ */ jsx("div", { className: "relative cursor-default select-none px-2 py-2 text-gray-700", children: "Nothing value." }) : filteredOption.map((person) => /* @__PURE__ */ jsx(
          Combobox.Option,
          {
            className: ({ active }) => `relative cursor-default select-none py-2 pl-3 pr-2 ${active ? "bg-teal-600 text-white" : "text-gray-900"}`,
            value: person,
            children: ({ selected: selected2, active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `block truncate ${selected2 ? "font-medium" : "font-normal"}`,
                  children: person.label
                }
              ),
              selected2 ? /* @__PURE__ */ jsx(
                "span",
                {
                  className: `absolute inset-y-0 left-0 flex items-center pl-2 ${active ? "text-white" : "text-teal-600"}`,
                  children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" })
                }
              ) : null
            ] })
          },
          person.value
        )) })
      }
    )
  ] }) }) });
}
const InputWithSelect = ({ value, comboboxValue, onInputChange, onSelecChange, className = "", ...props }) => {
  const options = [
    { value: "", label: "-- All --" },
    { value: "nomor_hak", label: "Nomor Hak" },
    { value: "nama_pelepas", label: "Nama Pelepas" },
    { value: "nama_penerima", label: "Nama Penerima" }
  ];
  const [selectValue, setSelectValue] = useState(options[0]);
  return /* @__PURE__ */ jsxs("div", { className: twMerge("flex w-full items-start relative mb-3 gap-0 ", className), children: [
    /* @__PURE__ */ jsx(SearchableCombobox, { options, className: "rounded-tl-md rounded-bl-md w-full", value: comboboxValue, onValueChange: (e) => {
      const val = options.find((v) => v.value === e.value);
      setSelectValue(val ? val : options[0]);
      onSelecChange(e);
    } }),
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "search",
        value,
        onChange: (e) => onInputChange(e, selectValue.value),
        autoComplete: "off",
        ...props,
        className: `border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-tr-md rounded-br-md text-sm shadow focus:outline-none focus:ring w-3/5 ease-linear transition-all duration-150 `
      }
    )
  ] });
};
const reactDatepicker = "";
const MonthRangeInput = ({ onDataChange, className, errors, label, value }) => {
  const renderMonthContent = (month = 0, shortMonth = "", longMonth = "", day = 0) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;
    return /* @__PURE__ */ jsx("span", { title: tooltipText, children: shortMonth });
  };
  const [dates, setDates] = useState({ date1: value.date1 ? value.date1 : moment().format("YYYY-MM-DD"), date2: value.date2 ? value.date2 : moment().format("YYYY-MM-DD") });
  const handleChange = useCallback((field, value2) => {
    setDates((d) => ({ ...d, [field]: moment(value2).format("YYYY-MM-DD") }));
  }, [dates]);
  return /* @__PURE__ */ jsxs("div", { className: twMerge("relative w-full mb-3 text-black ", className), children: [
    label && /* @__PURE__ */ jsx(
      "label",
      {
        className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${errors ? "text-red-500" : ""} `,
        children: label
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-0", children: [
      /* @__PURE__ */ jsx(
        ReactDatePicker,
        {
          selected: moment(dates.date1).toDate(),
          value: moment(dates.date1).format("MMM-YYYY"),
          renderMonthContent,
          showMonthYearPicker: true,
          dateFormat: "MM/yyyy",
          className: " px-3 py-2 placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 bg-white rounded-l-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
          onChange: (e) => handleChange("date1", moment(e).toISOString())
        }
      ),
      /* @__PURE__ */ jsx(
        ReactDatePicker,
        {
          selected: moment(dates.date2).toDate(),
          value: moment(dates.date2).format("MMM-YYYY"),
          renderMonthContent,
          showMonthYearPicker: true,
          dateFormat: "MM/yyyy",
          className: "px-3 py-2 placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
          onChange: (e) => handleChange("date2", moment(e).toISOString())
        }
      ),
      /* @__PURE__ */ jsx(Button, { theme: "blue", className: "text-sm rounded-r-md", onClick: (e) => onDataChange(dates), children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-magnifying-glass" }) })
    ] })
  ] });
};
function CardTablePermohonans({ color = "light", jenishaks, permohonans, className = "", meta, labelLinks }) {
  const params = new URLSearchParams(window.location.search);
  const { jenistanahs, jenispermohonans, desa, inactive, date1, date2 } = usePage().props;
  const [values, setValues] = useState({
    date1: params.get("date1") ? params.get("date1") : date1,
    date2: params.get("date2") ? params.get("date2") : date2,
    inactive: params.get("inactive"),
    search_key: params.get("search_key"),
    jenis_tanah: params.get("jenis_tanah"),
    search: params.get("search"),
    jenishak_id: params.get("jenishak_id"),
    jenispermohonan_id: params.get("jenispermohonan_id"),
    sortBy: params.get("sortBy"),
    sortDir: params.get("sortDir")
  });
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
  const jenishak = jenishaks.find((e) => e.value === values.jenishak_id);
  const selectedDesa = desa ? desa : {};
  jenispermohonans.find((e) => e.value === values.jenispermohonan_id);
  const jenistanah = jenistanahs.find((e) => e.value === values.jenis_tanah);
  const handleRemoveData = (id) => {
    router.delete(route("admin.permohonans.destroy", id));
  };
  const [isChecked, setIsChecked] = useState(inactive);
  const handleDateChange = (dates) => {
    setValues((v) => ({ ...v, date1: dates.date1, date2: dates.date2 }));
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
              children: "Permohonan List"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 flex-row items-start", children: [
            /* @__PURE__ */ jsxs(PopupMenu, { caption: "Filter", children: [
              /* @__PURE__ */ jsx(MonthRangeInput, { label: "Rentang Waktu", onDataChange: (d) => handleDateChange(d), value: { date1: values.date1 ? values.date1 : moment().format("YYYY-MM-DD"), date2: values.date2 ? values.date2 : moment().format("YYYY-MM-DD") } }),
              /* @__PURE__ */ jsx(SelectSearch, { className: "text-blueGray-900", isClearable: true, value: jenishak ? jenishak : "", options: jenishaks, label: "Jenis Hak", onChange: (e) => setValues((v) => ({ ...v, jenishak_id: e ? e.value : "" })) }),
              /* @__PURE__ */ jsx(SelectSearch, { className: "text-blueGray-900", isClearable: true, value: jenistanah, options: jenistanahs, label: "Jenis Tanah", onChange: (e) => setValues((v) => ({ ...v, jenis_tanah: e ? e.value : "" })) }),
              /* @__PURE__ */ jsx(AsyncSelectSearch, { url: "/admin/desas/api/list", className: "text-blueGray-900", value: selectedDesa, optionLabels: ["nama_desa", "nama_kecamatan"], optionValue: "id", isClearable: true, label: "Letak Obyek", onChange: (e) => setValues((v) => ({ ...v, desa_id: e ? e.value : "" })) }),
              /* @__PURE__ */ jsxs("div", { className: "p-2 flex items-center text-blueGray-900 gap-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Active" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "inactive",
                    checked: isChecked,
                    onChange: (e) => setValues((v) => {
                      setIsChecked(!isChecked);
                      return { ...v, inactive: isChecked };
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(AsyncSelectSearch, { placeholder: "Pilih User", name: "users", url: "/admin/users/api/list/", onChange: (e) => setValues((v) => ({ ...v, user_id: e ? e.value : "" })), isClearable: true, optionLabels: ["name"], optionValue: "id", className: "text-blueGray-900" }),
            /* @__PURE__ */ jsx(InputWithSelect, { comboboxValue: values.search_key ? values.search_key : "", onSelecChange: (e) => setValues((v) => ({ ...v, search_key: e.value, search: "" })), value: values.search ? values.search : "", onInputChange: (e, s) => {
              setValues((v) => ({ ...v, search_key: s, search: e.target.value }));
            } }),
            /* @__PURE__ */ jsx(
              LinkButton,
              {
                theme: "blue",
                href: route("admin.permohonans.create"),
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
                  /* @__PURE__ */ jsx("span", { children: "No Daftar" }),
                  /* @__PURE__ */ jsx(IconSort, { sortBy: "id", sortDir: values.sortDir || "" })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "nama_pelepas", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Nama Pelepas" }),
                  /* @__PURE__ */ jsx(IconSort, { sortBy: "nama_pelepas", sortDir: values.sortDir || "" })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: /* @__PURE__ */ jsx(Link, { href: "#", onClick: (e) => handleSortLinkClick({ sortBy: "nama_penerima", sortDir: values.sortDir === "asc" ? "desc" : "asc" }), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Nama Penerima" }),
                  /* @__PURE__ */ jsx(IconSort, { sortBy: "nama_penerima", sortDir: values.sortDir || "" })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: "No Hak"
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: "Luas M2"
              }
            ),
            /* @__PURE__ */ jsx(
              "th",
              {
                className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                children: "Letak Obyek"
              }
            ),
            /* @__PURE__ */ jsx("th", { className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"), children: "Options" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: permohonans.map(({ id, no_daftar, nama_pelepas, nama_penerima, nomor_hak, letak_obyek, luas_tanah }, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: no_daftar }),
            /* @__PURE__ */ jsxs("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-circle text-orange-500 mr-2" }),
              " ",
              nama_pelepas
            ] }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: nama_penerima }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: nomor_hak }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: luas_tanah }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: letak_obyek }),
            /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-1 ", children: [
              /* @__PURE__ */ jsx(Link, { href: route("admin.permohonans.edit", id), className: "text-lightBlue-500 background-transparent font-bold px-3 py-1 text-xs outline-none focus:outline-none hover:text-lightBlue-100 hover:scale-105 mr-1 mb-1 ease-linear transition-all duration-150", type: "button", children: "Edit" }),
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
const Index = ({ jenishaks, permohonans }) => {
  const {
    data,
    meta,
    links
  } = permohonans;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(CardTablePermohonans, { color: "dark", jenishaks, permohonans: data, meta, labelLinks: links }) });
};
export {
  Index as default
};
