import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import { usePage, useForm } from "@inertiajs/react";
import "react";
import "tailwind-merge";
import "classnames";
import "react-number-format";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Edit = () => {
  var _a;
  const { kasbon, statuskasbonOpts, statuskasbonOpt } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    jumlah_kasbon: kasbon.jumlah_kasbon.toString() || "0",
    jumlah_penggunaan: kasbon.jumlah_penggunaan.toString() || "0",
    sisa_penggunaan: kasbon.sisa_penggunaan.toString() || "0",
    keperluan: kasbon.keperluan || "",
    status_kasbon: kasbon.status_kasbon || "",
    statuskabonOpt: statuskasbonOpt || void 0,
    user: kasbon.user,
    _method: "PUT"
  });
  const getSisaPenggunaan = (jmlKasbon, jmlPenggunaan) => {
    let xsisaPenggunaan = jmlKasbon > jmlPenggunaan ? jmlKasbon - jmlPenggunaan : 0;
    return xsisaPenggunaan.toString();
  };
  function handleSubmit(e) {
    e.preventDefault();
    post(route("staf.transaksi.kasbons.update", kasbon.id));
  }
  console.log(kasbon);
  return /* @__PURE__ */ jsx(StafLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-100 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-2", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Edit Kasbon" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-4 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "jumlah_kasbon",
          label: "Jumlah Kasbon",
          errors: errors.jumlah_kasbon,
          autoComplete: "off",
          value: data.jumlah_kasbon,
          disabled: true,
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
      /* @__PURE__ */ jsx(Input, { name: "user", label: "User", value: (_a = data.user) == null ? void 0 : _a.name, disabled: true }),
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
  Edit as default
};
