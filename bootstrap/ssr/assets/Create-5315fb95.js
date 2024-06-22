import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage, useForm } from "@inertiajs/react";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { useEffect } from "react";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
import "tailwind-merge";
import "classnames";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "axios";
import "lodash";
import "react-select/async";
const Create = () => {
  const { users, pemohonUsers } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_pemohon: "",
    email_pemohon: "",
    alamat_pemohon: "",
    nik_pemohon: "",
    users: pemohonUsers,
    telp_pemohon: "",
    nodaftar_pemohon: 0,
    thdaftar_pemohon: 0,
    active: true,
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.pemohons.store"));
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
  const onChange = (selectedOptions) => setData("users", selectedOptions);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Pemohon" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Input, { name: "nama_pemohon", label: "Nama Pemohon", errors: errors.nama_pemohon, value: data.nama_pemohon, onChange: (e) => setData("nama_pemohon", e.target.value) }),
      /* @__PURE__ */ jsx(Input, { name: "email_pemohon", label: "Email Pemohon", errors: errors.email_pemohon, value: data.email_pemohon, type: "email_pemohon", onChange: (e) => setData("email_pemohon", e.target.value) }),
      /* @__PURE__ */ jsx(Input, { name: "alamat_pemohon", label: "Alamat Pemohon", errors: errors.alamat_pemohon, value: data.alamat_pemohon, type: "alamat_pemohon", onChange: (e) => setData("alamat_pemohon", e.target.value) }),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "telp_pemohon",
          pattern: "[0-9]*",
          onInput: (evt) => {
            const dt = evt.target.validity.valid ? evt.target.value : data.telp_pemohon;
            setData("telp_pemohon", dt);
          },
          label: "Telp",
          errors: errors.telp_pemohon,
          value: data.telp_pemohon,
          type: "telp_pemohon"
        }
      ),
      /* @__PURE__ */ jsx(Input, { name: "nik_pemohon", label: "NIK", errors: errors.nik_pemohon, value: data.nik_pemohon, type: "nik_pemohon", onChange: (e) => setData("nik_pemohon", e.target.value) }),
      /* @__PURE__ */ jsx(AsyncSelectSearch, { name: "users", url: "/admin/users/api/list/", isMulti: true, label: "User", onChange, value: data.users, optionLabels: ["name", "email"], optionValue: "id" }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("admin.pemohons.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
