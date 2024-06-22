import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { M as Modal } from "./Modal-1ab71745.js";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { useForm, router, usePage } from "@inertiajs/react";
import moment from "moment";
import { useState, lazy, useEffect, Suspense } from "react";
import { P as PermohonanSelect } from "./PermohonanSelect-77b2bb7a.js";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import { pickBy } from "lodash";
import { usePrevious } from "react-use";
import "@headlessui/react";
import "tailwind-merge";
import "classnames";
import "react-select";
import "sweetalert2";
import "@heroicons/react/20/solid";
import "swr";
import "./bootstrap-37cb65ea.js";
import "axios";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
function CardTableProsespermohonans({ prosespermohonans, statusprosesperms }) {
  const { data, setData, errors, post, processing, reset } = useForm({
    prosespermohonan_id: "",
    prosespermohonan: null,
    statusprosesperm_id: "",
    statusprosesperm: null,
    catatan_statusprosesperm: "",
    _method: "POST"
  });
  const [statuspermOpts, setstatusPermOpts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    post(route("staf.transaksi.prosespermohonans.statusprosesperms.store", data.prosespermohonan_id), {
      onSuccess: () => {
        reset("prosespermohonan_id", "statusprosesperm_id", "catatan_statusprosesperm");
        setShowModal(false);
      }
    });
  }
  const handleShowModal = (opts) => {
    const ids = opts.map((a) => a.id);
    const newStatusprosesperms = statusprosesperms.reduce((p, s, i) => {
      p[i] = ids.includes(s.value) ? { value: s.value, label: s.label, isDisabled: true } : { value: s.value, label: s.label, isDisabled: false };
      return p;
    }, []);
    setstatusPermOpts(newStatusprosesperms);
    setShowModal(true);
  };
  const handleRemoveData = (prosespermohonan_id, id) => {
    router.delete(route("staf.transaksi.prosespermohonans.statusprosesperms.destroy", [prosespermohonan_id, id]), { only: ["prosespermohonans"] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full mt-4 flex flex-col", children: [
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-56 overflow-x-hidden", children: /* @__PURE__ */ jsxs("li", { className: "flex relative flex-row w-full items-center rounded-t-md text-sm border justify-start bg-lightBlue-600 border-blueGray-400 px-2 py-2 gap-1 text-lightBlue-50 font-bold", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: "No" }),
      /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: "Tanggal" }),
      /* @__PURE__ */ jsx("div", { className: "w-[40%] md:w-[25%]", children: "Nama Proses" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-[25%]", children: "Catatan" }),
      /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: "User" }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: "Menu" })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md shadow-md", children: prosespermohonans && prosespermohonans.map((prosespermohonan, index) => /* @__PURE__ */ jsxs("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full text-sm px-2 py-0 items-center justify-start gap-1 font-semibold text-lightBlue-600 border-t-2 border-lightBlue-400", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: index + 1 }),
        /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: prosespermohonan.tgl_proses }),
        /* @__PURE__ */ jsx("div", { className: "w-[40%] md:w-[25%]", children: prosespermohonan.itemprosesperm.nama_itemprosesperm }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[25%]", children: prosespermohonan.catatan_prosesperm }),
        /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: prosespermohonan.user.name }),
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 flex justify-start items-center gap-2", children: /* @__PURE__ */ jsx("button", { onClick: (e) => {
          setData("prosespermohonan_id", prosespermohonan.id);
          handleShowModal(prosespermohonan.statusprosesperms);
        }, className: "text-lightBlue-500 background-transparent text-xl font-bold uppercase px-0 py-0 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", children: /* @__PURE__ */ jsx("i", { className: "fa fa-plus-circle", "aria-hidden": "true" }) }) })
      ] }),
      prosespermohonan.statusprosesperms.length ? /* @__PURE__ */ jsx("div", { className: "w-full flex flex-col text-sm border-t-2 border-lightBlue-400", children: /* @__PURE__ */ jsx("ul", { className: "list-none w-full px-6 bg-lightBlue-100  text-lightBlue-700", children: prosespermohonan.statusprosesperms.map((statusprosesperm, index2) => /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-row w-full items-center text-xs gap-1 pb-2 pt-1", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { src: statusprosesperm.image_statusprosesperm, className: "h-5 w-auto", "aria-hidden": true, alt: "" }) }),
        /* @__PURE__ */ jsx("li", { children: moment(statusprosesperm.pivot.created_at).format("DD MMM YYYY") }),
        /* @__PURE__ */ jsx("li", { className: "font-semibold", children: statusprosesperm.nama_statusprosesperm }),
        /* @__PURE__ */ jsx("li", { children: statusprosesperm.pivot.catatan_statusprosesperm ? "(" + statusprosesperm.pivot.catatan_statusprosesperm + ")" : "" }),
        /* @__PURE__ */ jsxs("li", { children: [
          "oleh ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: statusprosesperm.user.name })
        ] }),
        /* @__PURE__ */ jsx("li", { children: statusprosesperm.canRemove ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: (e) => useSwal.confirm({
              title: "Hapus Data",
              text: "apakah akan menghapus?"
            }).then((result) => {
              if (result.isConfirmed) {
                handleRemoveData(prosespermohonan.id, statusprosesperm.id);
              }
            }),
            className: "text-lightBlue-400 background-transparent font-bold px-3 py-0 text-sm outline-none focus:outline-none hover:text-lightBlue-600 hover:scale-105 mr-1 ease-linear transition-all duration-150",
            type: "button",
            children: /* @__PURE__ */ jsx("i", { className: "fa fa-minus-circle", "aria-hidden": "true" })
          }
        ) : null })
      ] }) }, index2)) }) }) : null
    ] }, prosespermohonan.id)) }),
    /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "md", closeable: false, onClose: () => alert("modal close"), children: /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "itemprosesperm_id",
          label: "Status Proses",
          value: data.statusprosesperm,
          options: statuspermOpts,
          onChange: (e) => setData({ ...data, statusprosesperm_id: e ? e.value : "", statusprosesperm: e ? e : {} }),
          errors: errors.statusprosesperm_id
        }
      ),
      /* @__PURE__ */ jsx(Input, { name: "catatan_statusprosesperm", label: "Catatan", errors: errors.catatan_statusprosesperm, value: data.catatan_statusprosesperm, onChange: (e) => setData("catatan_statusprosesperm", e.target.value) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 w-full flex justify-between items-center", children: [
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            theme: "black",
            loading: processing,
            type: "submit",
            children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
          }
        ),
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            href: "#",
            theme: "blue",
            onClick: (e) => {
              e.preventDefault();
              setShowModal(false);
            },
            children: /* @__PURE__ */ jsx("span", { children: "Close" })
          }
        )
      ] })
    ] }) }) })
  ] });
}
const CardPermohonan = lazy(() => import("./CardPermohonan-8f262646.js"));
const Create = () => {
  const { transpermohonan, itemprosesperms, prosespermohonans, statusprosesperms } = usePage().props;
  const { data, setData, errors, post, processing, reset } = useForm({
    transpermohonan_id: transpermohonan ? transpermohonan.id : "",
    permohonan: null,
    itemprosesperm_id: "",
    itemprosesperm: void 0,
    catatan_prosesperm: "",
    active: true,
    _method: "POST"
  });
  const [AddMode, setAddMode] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    useSwal.confirm({
      title: "Simpan Data",
      text: "akan menyimpan perubahan?"
    }).then((result) => {
      if (result.isConfirmed) {
        post(route("staf.transaksi.prosespermohonans.store"), {
          onSuccess: () => {
            reset("itemprosesperm", "itemprosesperm_id", "catatan_prosesperm", "active");
            setAddMode(false);
          }
        });
      }
    });
  }
  const setPermohonan = (permohonan) => {
    if (permohonan) {
      setData({ ...data, transpermohonan_id: permohonan.transpermohonan.id, permohonan });
      setValues((prev) => ({ ...prev, transpermohonan_id: permohonan.transpermohonan.id }));
    }
  };
  const params = new URLSearchParams(window.location.search);
  const [values2, setValues] = useState({ transpermohonan_id: params.get("transpermohonan_id"), itemprosesperm_id: params.get("itemprosesperm_id") });
  const prevValues = usePrevious(values2);
  const itemprosesId = itemprosesperms.find((e) => e.value === values2.itemprosesperm_id);
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values2)).length ? pickBy(values2) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values2]);
  return /* @__PURE__ */ jsxs(StafLayout, { children: [
    AddMode ? /* @__PURE__ */ jsx("div", { className: "z-20 absolute h-full w-full left-0" }) : null,
    /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-t mt-2 px-4", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "PROSES PERMOHONAN" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-auto p-4", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center w-full gap-1", children: [
            /* @__PURE__ */ jsx(PermohonanSelect, { className: `w-full ${AddMode ? "z-10" : ""}`, value: transpermohonan == null ? void 0 : transpermohonan.permohonan, onValueChange: setPermohonan, errors: errors.transpermohonan_id }),
            /* @__PURE__ */ jsx(SelectSearch, { className: "z-40 mb-0 w-1/3 text-sm", options: itemprosesperms, value: itemprosesId, onChange: (e) => setValues((prev) => ({ ...prev, itemprosesperm_id: e.value })) })
          ] }),
          /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-52 m-auto", children: "Loading..." }) }), children: /* @__PURE__ */ jsx("div", { children: transpermohonan && transpermohonan.permohonan ? /* @__PURE__ */ jsx(CardPermohonan, { permohonan: transpermohonan.permohonan }) : null }) }),
          transpermohonan && transpermohonan.permohonan ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "z-30 flex justify-end items-center bg-blueGray-400 py-2 px-1 rounded-md shadow-md mb-0 relative", children: AddMode ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LinkButton, { href: "#", theme: "black", onClick: (e) => {
              e.preventDefault();
              setAddMode(false);
            }, children: /* @__PURE__ */ jsx("span", { children: "Tutup" }) }) }) : /* @__PURE__ */ jsx(LinkButton, { href: "#", theme: "black", onClick: (e) => {
              e.preventDefault();
              setAddMode(true);
            }, children: /* @__PURE__ */ jsx("span", { children: "Tambah" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: `z-20 flex flex-wrap lg:items-start transition-all transform ease-linear duration-150 origin-top m-auto mt-2 absolute shadow-slate-500 shadow-lg bg-blueGray-300 w-[95%] rounded-b-md ring-blueGray-400 ring-2 p-2 ${AddMode ? "translate-y-100 opacity-100" : "-translate-y-full opacity-0 "}`, children: [
              /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/5 pr-2", children: /* @__PURE__ */ jsx(
                SelectSearch,
                {
                  name: "itemprosesperm_id",
                  label: "Nama Proses",
                  value: data.itemprosesperm,
                  options: itemprosesperms,
                  onChange: (e) => setData({ ...data, itemprosesperm_id: e ? e.value : "", itemprosesperm: e ? e : {} }),
                  errors: errors.itemprosesperm_id
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/5 pr-2", children: /* @__PURE__ */ jsx(Input, { name: "catatan_prosesperm", autoComplete: "off", multiple: true, label: "Catatan", errors: errors.catatan_prosesperm, value: data.catatan_prosesperm, type: "text", onChange: (e) => setData("catatan_prosesperm", e.target.value) }) }),
              /* @__PURE__ */ jsx("div", { className: "relative h-full lg:mt-8", children: /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "customCheckLogin",
                    type: "checkbox",
                    className: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",
                    checked: data.active,
                    onChange: (e) => setData("active", e.target.checked)
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-semibold text-blueGray-600", children: "Active" })
              ] }) }),
              /* @__PURE__ */ jsx(
                LoadingButton,
                {
                  theme: "black",
                  loading: processing,
                  type: "submit",
                  children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
                }
              )
            ] })
          ] }) : null
        ] }),
        prosespermohonans && prosespermohonans.length > 0 ? /* @__PURE__ */ jsx(CardTableProsespermohonans, { prosespermohonans, statusprosesperms }) : null
      ] })
    ] }) }) })
  ] });
};
export {
  Create as default
};
