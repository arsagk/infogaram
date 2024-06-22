import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage, useForm } from "@inertiajs/react";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { useEffect } from "react";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "axios";
const Create = () => {
  const { kelompokakuns } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_akun: "",
    slug: "",
    kelompokakun: void 0,
    kelompokakun_id: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.akuns.store"));
  }
  const getOptions = async (query) => {
    const res = await myapp.backend.get(`/admin/users/api/list/?query=${query}`);
    const data2 = res.data;
    data2.map((d) => ({
      value: d["id"],
      label: d["labelOption"]
    }));
  };
  useEffect(() => {
    getOptions("");
  }, []);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Akun" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Input, { name: "nama_akun", label: "Nama Akun", errors: errors.nama_akun, value: data.nama_akun, onChange: (e) => setData("nama_akun", e.target.value) }),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "kelompokakuns",
          options: kelompokakuns,
          onChange: (e) => setData((prev) => ({ ...prev, kelompokakun: e ? e : void 0, kelompokakun_id: e ? e.value : "" })),
          label: "Kelompok Akun",
          value: data.kelompokakun,
          errors: errors.kelompokakun_id
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("admin.akuns.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
