import { jsx, jsxs } from "react/jsx-runtime";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { useForm } from "@inertiajs/react";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import moment from "moment";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Create = ({ instansiOpts, kasbonOpts, metodebayarOpts, base_route }) => {
  const { data, setData, errors, post, processing } = useForm({
    instansi: void 0,
    metodebayar: void 0,
    kasbon: void 0,
    instansi_id: "",
    metodebayar_id: "",
    kasbon_id: "",
    jumlah_kasbon: "0",
    jumlah_penggunaan: "0",
    sisa_penggunaan: "0",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "transaksi.keluarbiayapermusers.store"));
  }
  return /* @__PURE__ */ jsx(StafLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center relative -top-2", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-11/12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-100 border-0", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-1 px-4 py-2 ", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-2 bg-lightBlue-800 text-lightBlue-100 px-2 py-2 shadow-md rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "PENGELUARAN BIAYA PERMOHONAN" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-left md:text-right", children: moment(/* @__PURE__ */ new Date()).format("DD MMM YYYY HH:mm") })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            name: "instansi_id",
            label: "Instansi",
            value: data.instansi,
            options: instansiOpts,
            onChange: (e) => setData({ ...data, instansi: e ? e : {}, instansi_id: e ? e.value : "" }),
            errors: errors.instansi_id
          }
        ),
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            name: "metodebayar_id",
            label: "Metode Bayar",
            value: data.metodebayar,
            options: metodebayarOpts,
            onChange: (e) => setData({ ...data, metodebayar: e ? e : {}, metodebayar_id: e ? e.value : "" }),
            errors: errors.metodebayar_id
          }
        ),
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            name: "kasbon_id",
            label: "Kasbon",
            value: data.kasbon,
            options: kasbonOpts,
            onChange: (e) => setData({ ...data, kasbon: e ? e : {}, kasbon_id: e ? e.value : "" }),
            errors: errors.kasbon_id
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route(base_route + "transaksi.keluarbiayapermusers.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
    ] }) })
  ] }) }) }) });
};
export {
  Create as default
};
