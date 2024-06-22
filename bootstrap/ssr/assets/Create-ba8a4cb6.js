import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage, useForm } from "@inertiajs/react";
import "react";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Create = () => {
  const { instansiopts, grupitemkegiatanopts, akunopts } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_itemkegiatan: "",
    instansi_id: "",
    instansi: void 0,
    akun_id: "",
    akun: void 0,
    grupitemkegiatans: [],
    isunique: false,
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.itemkegiatans.store"));
  }
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-4 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-2", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Item Kegiatan" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-4 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Input, { name: "nama_itemkegiatan", label: "Nama Item Kegiatan", errors: errors.nama_itemkegiatan, value: data.nama_itemkegiatan, onChange: (e) => setData("nama_itemkegiatan", e.target.value) }),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "instansi_id",
          label: "Instansi",
          value: data.instansi,
          options: instansiopts,
          className: "w-full",
          onChange: (e) => setData({ ...data, instansi_id: e ? e.value : "", instansi: e ? e : {} })
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "akun_id",
          label: "Akun",
          value: data.akun,
          options: akunopts,
          className: "w-full",
          onChange: (e) => setData({ ...data, akun_id: e ? e.value : "", akun: e ? e : {} })
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          isMulti: true,
          name: "grupitemkegiatans_id",
          label: "Grup Item",
          value: data.grupitemkegiatans,
          options: grupitemkegiatanopts,
          className: "w-full",
          onChange: (e) => setData({ ...data, grupitemkegiatans: e ? e : {} })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "customCheckLogin",
            type: "checkbox",
            className: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",
            checked: data.isunique,
            onChange: (e) => setData("isunique", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-semibold text-blueGray-600", children: "Unique" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("admin.itemkegiatans.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
