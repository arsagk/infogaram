import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage, useForm } from "@inertiajs/react";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { useRef } from "react";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "react-number-format";
const Create = () => {
  const { akunOpts } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    uraian: "",
    akun_debet: "",
    akun_kredit: "",
    jumlah: "0",
    image: "",
    akundebet: void 0,
    akunkredit: void 0,
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.transaksi.postingjurnals.store"));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-4 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-2", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Posting Jurnal" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-4 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Input, { ref: firstInput, focused: true, name: "uraian", label: "Uraian", errors: errors.uraian, value: data.uraian, onChange: (e) => setData("uraian", e.target.value) }),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "akun_debet",
          label: "Akun Debet",
          value: data.akundebet,
          options: akunOpts,
          className: "w-full",
          onChange: (e) => setData({ ...data, akun_debet: e ? e.value : "", akundebet: e ? e : {} })
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "akun_debet",
          label: "Akun Kredit",
          value: data.akunkredit,
          options: akunOpts,
          className: "w-full",
          onChange: (e) => setData({ ...data, akun_kredit: e ? e.value : "", akunkredit: e ? e : {} })
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "jumlah",
          label: "Sisa Penggunaan",
          errors: errors.jumlah,
          autoComplete: "off",
          value: data.jumlah,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            "jumlah": e.value
          }))
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("admin.transaksi.postingjurnals.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
