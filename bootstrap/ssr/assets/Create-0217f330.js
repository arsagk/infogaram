import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import { usePage, useForm } from "@inertiajs/react";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { useEffect, useRef } from "react";
import { A as AsyncSelectSearch } from "./AsyncSelectSearch-18bdafe3.js";
import { I as InputWithMask, L as ListCheckbox } from "./ListCheckbox-4ae11412.js";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "axios";
import "react-select/async";
import "react-input-mask";
const Create = () => {
  var _a;
  const jenisTanahOptions = [
    { label: "Pertanian", value: "pertanian" },
    { label: "Non Pertanian", value: "non_pertanian" }
  ];
  const { permohonanUsers, jenishaks, jenispermohonans } = usePage().props;
  const { data, setData, errors, post, processing, transform } = useForm({
    nama_pelepas: "",
    nama_penerima: "",
    jenishak_id: jenishaks.length > 0 ? jenishaks[0].value : "",
    nomor_hak: "",
    persil: "",
    klas: "",
    luas_tanah: 0,
    atas_nama: "",
    jenis_tanah: jenisTanahOptions[1].value,
    jenistanah: jenisTanahOptions[1],
    desa_id: "",
    users: permohonanUsers,
    jenispermohonans: [],
    active: true,
    jenishak: jenishaks.length > 0 ? jenishaks[0] : "",
    desa: void 0,
    bidang: 1,
    kode_unik: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    const code = `${data.jenishak_id}.${parseInt(data.nomor_hak, 10)}${data.persil}${data.klas}.${data.desa_id}.${data.bidang}`;
    transform((data2) => ({
      ...data2,
      kode_unik: code
    }));
    post(route("admin.permohonans.store"));
  }
  const getOptions = async (query) => {
    const res = await myapp.backend.get(
      `/admin/users/api/list/?query=${query}`
    );
    const data2 = res.data;
    data2.map((d) => ({
      value: d["id"],
      label: d["labelOption"]
    }));
  };
  const getDesaOptions = async (query) => {
    const res = await myapp.backend.get(
      `/admin/desas/api/list/?query=${query}`
    );
    const data2 = res.data;
    data2.map((d) => ({
      value: d["id"],
      label: d["labelOption"]
    }));
  };
  const onChange = (selectedOptions) => setData("users", selectedOptions);
  useEffect(() => {
    getOptions("");
    getDesaOptions("");
  }, []);
  const firstInput = useRef(null);
  const klasFilter = /([DS])/;
  const romawiFilter = /([IV])/;
  const mask = [klasFilter, ".", romawiFilter, romawiFilter, romawiFilter];
  const beforeMaskedStateChange = ({ nextState }) => {
    let { value } = nextState;
    if (value.endsWith("/")) {
      value = value.slice(0, -1);
    }
    return {
      ...nextState,
      value
    };
  };
  const setSelectedJenisPermohonan = (id) => {
    let dts = [...data.jenispermohonans];
    for (let index = 0; index < dts.length; index++) {
      const elm = dts[index];
      dts[index].active = elm.value == id;
    }
    setData("jenispermohonans", dts);
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "PERMOHONAN BARU" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-4 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-8 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap md:flex-nowrap", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            ref: firstInput,
            focused: true,
            name: "nama_pelepas",
            label: "Nama Pelepas",
            errors: errors.nama_pelepas,
            value: data.nama_pelepas,
            type: "text",
            onChange: (e) => setData(
              "nama_pelepas",
              e.target.value
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "nama_penerima",
            label: "Nama Penerima",
            type: "text",
            errors: errors.nama_penerima,
            value: data.nama_penerima,
            onChange: (e) => setData(
              "nama_penerima",
              e.target.value
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap ", children: [
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            name: "jenishak_id",
            label: "Jenis Hak",
            value: data.jenishak,
            options: jenishaks,
            className: "w-full lg:w-2/5 pr-1",
            onChange: (e) => setData({
              ...data,
              jenishak_id: e ? e.value : "",
              jenishak: e ? e : {}
            })
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "nomor_hak",
            pattern: "[0-9]*",
            onInput: (evt) => {
              const dt = evt.target.validity.valid ? evt.target.value : data.nomor_hak;
              setData("nomor_hak", dt);
            },
            label: "Nomor Hak",
            errors: errors.nomor_hak,
            value: data.nomor_hak,
            type: "text",
            className: "w-full lg:w-1/5 px-1"
          }
        ),
        ((_a = data.jenishak) == null ? void 0 : _a.label.toLowerCase()) === "hak milik adat" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "w-full lg:w-1/5 px-1",
              name: "persil",
              label: "Persil",
              errors: errors.persil,
              value: data.persil,
              type: "text",
              onChange: (e) => setData(
                "persil",
                e.target.value
              )
            }
          ),
          /* @__PURE__ */ jsx(
            InputWithMask,
            {
              mask,
              className: "w-full lg:w-1/5 px-1",
              name: "klas",
              label: "Klas",
              errors: errors.klas,
              value: data.klas,
              beforeMaskedStateChange,
              maskPlaceholder: null,
              onChange: (e) => setData(
                "klas",
                e.target.value
              )
            }
          )
        ] }) : null,
        errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.kode_unik }) : null
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap md:flex-nowrap gap-1 ", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "luas_tanah",
            pattern: "[0-9]*",
            onInput: (evt) => {
              const v = evt.target.validity.valid ? evt.target.value : data.luas_tanah;
              setData("luas_tanah", v);
            },
            label: "Luas Tanah",
            errors: errors.luas_tanah,
            value: data.luas_tanah,
            type: "text",
            className: "w-1/2 lg:w-1/5 px-1"
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "bidang",
            pattern: "[0-9]*",
            onInput: (evt) => {
              const v = evt.target.validity.valid ? evt.target.value : data.bidang;
              setData("bidang", v);
            },
            label: "Bidang",
            errors: errors.luas_tanah,
            value: data.bidang,
            type: "text",
            className: "w-1/2 lg:w-1/6 px-1"
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "atas_nama",
            label: "Atas Nama",
            errors: errors.atas_nama,
            value: data.atas_nama,
            type: "text",
            onChange: (e) => setData("atas_nama", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap md:flex-nowrap", children: [
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            isMulti: true,
            name: "jenispermohonans",
            label: "Jenis Permohonan",
            value: data.jenispermohonans,
            options: jenispermohonans,
            onChange: (e) => setData({
              ...data,
              jenispermohonans: e ? e : {}
            }),
            errors: errors.jenispermohonans
          }
        ),
        /* @__PURE__ */ jsx(
          SelectSearch,
          {
            name: "jenis_tanah",
            label: "Jenis Tanah",
            value: data.jenistanah,
            options: jenisTanahOptions,
            onChange: (e) => setData({
              ...data,
              jenis_tanah: e ? e.value : "",
              jenistanah: e ? e : {}
            }),
            errors: errors.jenis_tanah
          }
        )
      ] }),
      data.jenispermohonans && data.jenispermohonans.length ? /* @__PURE__ */ jsx(
        ListCheckbox,
        {
          list: data.jenispermohonans,
          onItemChange: (e) => setSelectedJenisPermohonan(e)
        }
      ) : null,
      /* @__PURE__ */ jsx(
        AsyncSelectSearch,
        {
          name: "desa",
          url: "/admin/desas/api/list/",
          isClearable: true,
          label: "Desa",
          onChange: (e) => setData({
            ...data,
            desa_id: e ? e.value : "",
            desa: e ? e : {}
          }),
          value: data.desa,
          optionLabels: [
            "nama_desa",
            "nama_kecamatan"
          ],
          optionValue: "id",
          errors: errors.desa_id
        }
      ),
      /* @__PURE__ */ jsx(
        AsyncSelectSearch,
        {
          name: "users",
          url: "/admin/users/api/list/",
          isMulti: true,
          label: "User",
          onChange,
          value: data.users,
          optionLabels: ["name", "email"],
          optionValue: "id"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "customCheckLogin",
            type: "checkbox",
            className: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",
            checked: data.active,
            onChange: (e) => setData(
              "active",
              e.target.checked
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-semibold text-blueGray-600", children: "Active" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route("admin.permohonans.index"),
            children: /* @__PURE__ */ jsx("span", { children: "Kembali" })
          }
        ),
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
