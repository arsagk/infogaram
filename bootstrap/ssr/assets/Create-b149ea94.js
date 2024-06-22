import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { useForm } from "@inertiajs/react";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import "react";
import "tailwind-merge";
import "classnames";
import "react-number-format";
import "lodash";
import "react-select";
import "react-select/async";
import "./bootstrap-37cb65ea.js";
import "axios";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Create = ({ statuskasbonOpts, isAdmin }) => {
  const { data, setData, errors, post, processing } = useForm({
    jumlah_kasbon: "0",
    jumlah_penggunaan: "0",
    sisa_penggunaan: "0",
    keperluan: "",
    status_kasbon: statuskasbonOpts[0].value,
    statuskabonOpt: statuskasbonOpts[0] || void 0,
    user: void 0,
    user_id: "",
    _method: "POST"
  });
  const getSisaPenggunaan = (jmlKasbon, jmlPenggunaan) => {
    let xsisaPenggunaan = jmlKasbon > jmlPenggunaan ? jmlKasbon - jmlPenggunaan : 0;
    return xsisaPenggunaan.toString();
  };
  function handleSubmit(e) {
    e.preventDefault();
    post(route("staf.transaksi.kasbons.store"));
  }
  return /* @__PURE__ */ jsx(StafLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-100 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-4 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-2", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Kasbon" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-4 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "jumlah_kasbon",
          label: "Jumlah Kasbon",
          errors: errors.jumlah_kasbon,
          autoComplete: "off",
          value: data.jumlah_kasbon,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            "jumlah_kasbon": e.value,
            "sisa_penggunaan": getSisaPenggunaan(Number.parseInt(e.value), Number.parseInt(data.jumlah_penggunaan))
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "jumlah_penggunaan",
          label: "Jumlah Penggunaan",
          errors: errors.jumlah_penggunaan,
          autoComplete: "off",
          disabled: true,
          value: data.jumlah_penggunaan,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            "jumlah_penggunaan": e.value,
            "sisa_penggunaan": getSisaPenggunaan(Number.parseInt(data.jumlah_kasbon), Number.parseInt(e.value))
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "sisa_penggunaan",
          label: "Sisa Penggunaan",
          errors: errors.sisa_penggunaan,
          autoComplete: "off",
          disabled: true,
          value: data.sisa_penggunaan,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            "sisa_penggunaan": e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(Input, { name: "keperluan", label: "Keperluan", errors: errors.keperluan, value: data.keperluan, onChange: (e) => setData("keperluan", e.target.value) }),
      isAdmin ? /* @__PURE__ */ jsx(
        AsyncSelectSearch,
        {
          placeholder: "Pilih User",
          label: "User",
          value: data.user,
          name: "users",
          url: "/admin/users/api/list/",
          errors: errors.user_id,
          onChange: (e) => setData((v) => ({ ...v, user: e, user_id: e ? e.value : "" })),
          isClearable: true,
          optionLabels: ["name"],
          optionValue: "id",
          className: "text-blueGray-900"
        }
      ) : null,
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "status_kasbon",
          label: "Status",
          value: data.statuskabonOpt,
          options: statuskasbonOpts,
          onChange: (e) => setData({ ...data, statuskabonOpt: e ? e : {}, status_kasbon: e ? e.value : "" }),
          errors: errors.status_kasbon
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("staf.transaksi.kasbons.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
