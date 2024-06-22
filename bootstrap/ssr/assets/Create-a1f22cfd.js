import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { useForm } from "@inertiajs/react";
import "react";
import "tailwind-merge";
import "classnames";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const Create = () => {
  const { data, setData, errors, post, processing, progress } = useForm({
    nama_statusprosesperm: "",
    image_statusprosesperm: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.statusprosesperms.store"), {
      forceFormData: true
    });
  }
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Status Proses" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Input, { name: "nama_statusprosesperm", label: "Nama Item Proses Permohonan", errors: errors.nama_statusprosesperm, value: data.nama_statusprosesperm, onChange: (e) => setData("nama_statusprosesperm", e.target.value) }),
      /* @__PURE__ */ jsx(Input, { type: "file", name: "image_statusprosesperm", label: "Gambar", errors: errors.image_statusprosesperm, onChange: (e) => setData("image_statusprosesperm", e.target.files[0]) }),
      progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
        progress.percentage,
        "%"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between ", children: [
        /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route("admin.statusprosesperms.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
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
