import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { useState, Fragment } from "react";
import { Listbox, Transition, Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";
import { m as myapp } from "./bootstrap-37cb65ea.js";
function ListboxSelect({ className, listOptions, onListChange }) {
  const [selected, setSelected] = useState(listOptions[0]);
  const onChange = (e) => {
    onListChange(e);
    setSelected(e);
  };
  return /* @__PURE__ */ jsx("div", { className: twMerge("relative w-full", className), children: /* @__PURE__ */ jsx(Listbox, { value: selected, onChange, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(Listbox.Button, { className: "relative w-full cursor-default rounded-l-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "block truncate", children: selected.label }),
      /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsx(
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
        as: Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm", children: listOptions.map((listOption, listOptionIdx) => /* @__PURE__ */ jsx(
          Listbox.Option,
          {
            className: ({ active }) => `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`,
            value: listOption,
            children: ({ selected: selected2 }) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `block truncate ${selected2 ? "font-bold" : "font-normal"}`,
                children: listOption.label
              }
            ) })
          },
          listOptionIdx
        )) })
      }
    )
  ] }) }) });
}
function PermohonanSelect({ className, onValueChange, value, errors, inputRef, isStaf }) {
  const [selectedPerson, setSelectedPerson] = useState(value ? value : void 0);
  const listOptions = [
    { label: "SEMUA KRITERIA", value: "" },
    { label: "NAMA PENERIMA", value: "nama_penerima" },
    { label: "NAMA PELEPAS", value: "nama_pelepas" },
    { label: "NOMOR HAK", value: "nomor_hak" },
    { label: "NOMOR DAFTAR", value: "nodaftar_permohonan" }
  ];
  const [searchKey, setSearchKey] = useState("");
  function LoadingSpinner() {
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "h-5 w-5 animate-spin text-gray-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }
          )
        ]
      }
    );
  }
  async function fetcher(url, query2) {
    if (searchKey) {
      const result = await myapp.backend.get(`${url}?search=${query2}&search_key=${searchKey}&is_staf=${isStaf}`);
      return result.data;
    } else {
      const result = await myapp.backend.get(`${url}?search=${query2}&is_staf=${isStaf}`);
      return result.data;
    }
  }
  const [query, setQuery] = useState("");
  const { data: filteredOption, error } = useSWR(["/admin/permohonans/api/list/", query], ([url, query2]) => fetcher(url, query2));
  const isLoading = !error && !filteredOption;
  const onChange = (e) => {
    setSelectedPerson((prev) => prev ? e : void 0);
    onValueChange(e, listOptions[0]);
  };
  const comparePeople = (a, b) => (a == null ? void 0 : a.nama_penerima.toLowerCase()) === (b == null ? void 0 : b.nama_penerima.toLowerCase());
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
    Combobox,
    {
      value: selectedPerson,
      by: comparePeople,
      onChange,
      children: /* @__PURE__ */ jsxs("div", { className: twMerge(`relative z-50`, className), children: [
        /* @__PURE__ */ jsxs("div", { className: twMerge("relative overflow-visible flex w-full cursor-default bg-white text-left rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm ", className), children: [
          /* @__PURE__ */ jsx(ListboxSelect, { className: "w-2/5", listOptions, onListChange: (e) => setSearchKey(e.value) }),
          /* @__PURE__ */ jsx(
            Combobox.Input,
            {
              className: "w-full border-none py-2 pl-3 pr-8 text-sm leading-5 text-gray-900 focus:ring-0 rounded-r-lg focus:bg-yellow-100",
              displayValue: (permohonan) => (permohonan == null ? void 0 : permohonan.nama_penerima) ?? "",
              onChange: (event) => setQuery(event.target.value),
              autoComplete: "off",
              placeholder: "Pilih Permohonan",
              ref: inputRef
            }
          ),
          /* @__PURE__ */ jsxs(Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: [
            isLoading && /* @__PURE__ */ jsx(LoadingSpinner, {}),
            /* @__PURE__ */ jsx(
              ChevronUpDownIcon,
              {
                className: "h-5 w-5 text-gray-400",
                "aria-hidden": "true"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            as: Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            afterLeave: () => setQuery(""),
            children: /* @__PURE__ */ jsxs(Combobox.Options, { className: "absolute mt-1 max-h-60 w-full md:w-[100vh] overflow-auto rounded-md bg-white py-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-xs", children: [
              filteredOption && filteredOption.length > 0 ? /* @__PURE__ */ jsxs("div", { className: `flex flex-row p-2 w-full font-bold bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700`, children: [
                /* @__PURE__ */ jsx("div", { className: "w-1/3", children: "No Daftar" }),
                /* @__PURE__ */ jsx("div", { className: "w-3/5", children: "Pelepas" }),
                /* @__PURE__ */ jsx("div", { className: "w-3/5", children: "Penerima" }),
                /* @__PURE__ */ jsx("div", { className: "w-3/5", children: "Alas Hak" }),
                /* @__PURE__ */ jsx("div", { className: "w-60", children: "Luas" }),
                /* @__PURE__ */ jsx("div", { className: "w-full", children: "Letak" })
              ] }) : null,
              filteredOption && filteredOption.length === 0 && query !== "" ? /* @__PURE__ */ jsx("div", { className: "relative cursor-default select-none px-2 py-2 text-gray-700", children: "Nothing value." }) : filteredOption && filteredOption.map((permohonan) => /* @__PURE__ */ jsx(
                Combobox.Option,
                {
                  className: ({ active }) => `relative cursor-default select-none pr-2 ${active ? "bg-lightBlue-600 text-white" : "text-lightBlue-950"}`,
                  value: permohonan,
                  children: ({ selected, active }) => /* @__PURE__ */ jsxs("div", { className: `flex flex-row p-2 w-full ${selected ? "font-bold" : ""}`, children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1/3", children: permohonan.no_daftar }),
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: permohonan.nama_pelepas }),
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: permohonan.nama_penerima }),
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: permohonan.nomor_hak }),
                    /* @__PURE__ */ jsxs("div", { className: "w-60", children: [
                      permohonan.luas_tanah,
                      " m2"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "w-full", children: permohonan.letak_obyek })
                  ] })
                },
                permohonan.id
              ))
            ] })
          }
        ),
        errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors }) : null
      ] })
    }
  ) });
}
export {
  PermohonanSelect as P
};
