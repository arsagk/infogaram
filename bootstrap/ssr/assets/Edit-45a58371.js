import { jsxs, jsx } from "react/jsx-runtime";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { usePage, router, useForm } from "@inertiajs/react";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import moment from "moment";
import { useState, useRef, useEffect } from "react";
import { P as Pagination } from "./Pagination-30af682d.js";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { B as Button } from "./Button-deab8ed4.js";
import { M as ModalCetakLaporan } from "./ModalCetakLaporan-1f197389.js";
import { M as Modal } from "./Modal-1ab71745.js";
import { S as StafLayout } from "./StafLayout-8d1a6752.js";
import "tailwind-merge";
import "classnames";
import "react-number-format";
import "lodash";
import "react-select";
import "sweetalert2";
import "./bootstrap-37cb65ea.js";
import "axios";
import "react-dom";
import "@emotion/react";
import "@emotion/cache";
import "react-loader-spinner";
import "@headlessui/react";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const CardDkeluarbiayaList = ({ keluarbiaya }) => {
  const { dkeluarbiayas: { data, links, meta } } = usePage().props;
  const handleRemoveData = (id) => {
    router.delete(route("staf.transaksi.dkeluarbiayas.destroy", id));
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full mt-4 flex flex-col mb-2", children: [
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-56 overflow-x-hidden", children: /* @__PURE__ */ jsxs("li", { className: "flex uppercase gap-1 flex-row w-full items-center rounded-t-md text-xs border justify-start bg-lightBlue-600 border-blueGray-400 px-2 py-2  text-lightBlue-50 font-semibold", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: "No" }),
      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[35%]", children: "Nama Kegiatan" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-[40%]", children: "Keterangan" }),
      /* @__PURE__ */ jsx("div", { className: "w-[15%] text-right pr-2", children: "Jumlah" }),
      /* @__PURE__ */ jsx("div", { className: "w-[5%] text-center", children: "Menu" })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md shadow-md", children: data && data.map((item, index) => /* @__PURE__ */ jsx("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-300", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full gap-1 text-xs px-2 py-0 items-center justify-start text-lightBlue-900 border-b-2 border-lightBlue-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-1 w-[5%]", children: [
        index + 1,
        "."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pb-1 w-[35%] md:w-[35%]", children: item.nama_itemkegiatan }),
      /* @__PURE__ */ jsx("div", { className: "pb-1 hidden md:block md:w-[40%]", children: item.ket_biaya }),
      /* @__PURE__ */ jsx("div", { className: "pb-1 w-[15%] text-right pr-2", children: item.jumlah_biaya }),
      /* @__PURE__ */ jsx("div", { className: "pb-1 w-[5%] flex justify-center items-center gap-2", children: /* @__PURE__ */ jsx("button", { disabled: keluarbiaya.status_keluarbiaya == "approved", onClick: (e) => useSwal.confirm({
        title: "Hapus Data",
        text: "apakah akan menghapus?"
      }).then((result) => {
        if (result.isConfirmed) {
          handleRemoveData(item.id);
        }
      }), className: "text-lightBlue-500 background-transparent text-lg font-bold uppercase px-0 py-0 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", children: /* @__PURE__ */ jsx("i", { className: "fa fa-trash", "aria-hidden": "true" }) }) })
    ] }) }, item.id)) }),
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md shadow-md", children: /* @__PURE__ */ jsxs("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-600 px-2 py-1  font-semibold text-lightBlue-50", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full gap-1 text-xs px-2 py-1 items-center justify-start border-b-2 border-lightBlue-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[60%]" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[20%] text-right", children: "Total Biaya" }),
        /* @__PURE__ */ jsx("div", { className: "w-[15%] text-right", children: keluarbiaya.jumlah_biaya }),
        /* @__PURE__ */ jsx("div", { className: "w-[5%] flex justify-start items-center gap-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full gap-1 text-xs px-2 py-1 items-center justify-start border-b-2 border-lightBlue-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[60%]" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[20%] text-right", children: "Kasbon" }),
        /* @__PURE__ */ jsx("div", { className: "w-[15%] text-right", children: keluarbiaya.saldo_awal }),
        /* @__PURE__ */ jsx("div", { className: "w-[5%] flex justify-start items-center gap-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full gap-1 text-xs px-2 py-1 items-center justify-start border-b-2 border-lightBlue-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[60%]" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[20%] text-right", children: "Sisa Saldo" }),
        /* @__PURE__ */ jsx("div", { className: "w-[15%] text-right", children: keluarbiaya.saldo_akhir }),
        /* @__PURE__ */ jsx("div", { className: "w-[5%] flex justify-start items-center gap-2" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { links: meta.links, labelLinks: links })
  ] });
};
const Create = ({ keluarbiaya, itemkegiatanOpts, status_keluarbiayas, is_admin, base_route }) => {
  var _a, _b;
  const selStatusKeluarbiayapermuser = status_keluarbiayas.find((item) => item.value == keluarbiaya.status_keluarbiaya);
  const [statusKeluarbiayapermuser, setStatusKeluarbiayapermuser] = useState(selStatusKeluarbiayapermuser ? selStatusKeluarbiayapermuser : null);
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const { data, setData, errors, processing, post, reset } = useForm({
    itemkegiatan: void 0,
    itemkegiatan_id: "",
    jumlah_biaya: "0",
    ket_biaya: "",
    permohonan: void 0,
    transpermohonan_id: "",
    _method: "PUT"
  });
  const firstInput = useRef();
  const [showModalLaporan, setShowModalLaporan] = useState(false);
  function handleUpdateStatus(e) {
    e.preventDefault();
    const data2 = {
      status_keluarbiaya: statusKeluarbiayapermuser == null ? void 0 : statusKeluarbiayapermuser.value
    };
    router.put(route(base_route + "transaksi.keluarbiayas.status.update", keluarbiaya.id), data2, {
      onSuccess: (e2) => {
        setShowStatusDialog(false);
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    post(
      route(base_route + "transaksi.keluarbiayas.update", keluarbiaya.id),
      {
        onSuccess: () => {
          reset();
          firstInput.current.value = "";
          firstInput.current.focus();
        }
      }
    );
  }
  function prosesLaporan(e) {
    e.preventDefault();
    setShowModalLaporan(true);
  }
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs(StafLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center relative -top-2", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-11/12 px-4 ", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-100 border-0", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-t mb-1 px-4 py-4 ", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-2 bg-lightBlue-800 text-lightBlue-100 px-4 py-2 shadow-md rounded-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "PENGELUARAN BIAYA" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-left md:text-right", children: moment(keluarbiaya.created_at, "DD MMM YYYY hh:mm").format("DD MMM YYYY hh:mm") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-auto px-4 lg:px-6 py-4 pt-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsx(Input, { name: "instansi", label: "Instansi", disabled: true, defaultValue: (_a = keluarbiaya.instansi) == null ? void 0 : _a.nama_instansi }),
          /* @__PURE__ */ jsx(Input, { name: "metodebayar", label: "Metode Bayar", disabled: true, defaultValue: (_b = keluarbiaya.metodebayar) == null ? void 0 : _b.nama_metodebayar }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 font-bold text-xs", children: "KASBON" }),
            /* @__PURE__ */ jsx("div", { className: "px-2 py-2 rounded text-sm bg-blueGray-200 text-blueGray-600", children: keluarbiaya.kasbons.length > 0 ? keluarbiaya.kasbons.map((e, i) => /* @__PURE__ */ jsxs("span", { children: [
              e.id,
              ":",
              e.jumlah_kasbon
            ] }, i)) : /* @__PURE__ */ jsx("span", { children: "No Kasbon" }) })
          ] })
        ] }),
        keluarbiaya && keluarbiaya.status_keluarbiaya == "wait_approval" ? /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-2 gap-2", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(
              SelectSearch,
              {
                placeholder: "Pilih Kegiatan",
                name: "itemkegiatan_id",
                value: data.itemkegiatan,
                options: itemkegiatanOpts,
                onChange: (e) => setData({ ...data, itemkegiatan: e ? e : {}, itemkegiatan_id: e ? e.value : "" }),
                errors: errors.itemkegiatan_id
              }
            ),
            /* @__PURE__ */ jsx(Input, { name: "ket_biaya", placeholder: "Keterangan", errors: errors.ket_biaya, value: data.ket_biaya, onChange: (e) => setData("ket_biaya", e.target.value) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-2 items-start", children: [
            /* @__PURE__ */ jsx(
              MoneyInput,
              {
                name: "jumlah_biaya",
                errors: errors.jumlah_biaya,
                autoComplete: "off",
                value: data.jumlah_biaya,
                placeholder: "Jumlah",
                onValueChange: (e) => setData((prev) => ({
                  ...prev,
                  "jumlah_biaya": e.value
                }))
              }
            ),
            /* @__PURE__ */ jsx(
              LoadingButton,
              {
                theme: "black",
                loading: processing,
                type: "submit",
                className: "pb-3 text-sm",
                children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
              }
            ),
            /* @__PURE__ */ jsx(Button, { disabled: !is_admin, theme: "blueGrey", className: "py-2 text-sm text-blueGray-500", onClick: (e) => {
              e.preventDefault();
              setShowStatusDialog(true);
            }, children: /* @__PURE__ */ jsx("span", { children: keluarbiaya.status_keluarbiaya }) })
          ] })
        ] }) }) }) : /* @__PURE__ */ jsx(Button, { disabled: !is_admin, theme: "blueGrey", className: "py-2 text-sm text-blueGray-500", onClick: (e) => {
          e.preventDefault();
          setShowStatusDialog(true);
        }, children: /* @__PURE__ */ jsx("span", { children: keluarbiaya.status_keluarbiaya }) }),
        /* @__PURE__ */ jsx("div", { className: "w-full flex items-start", children: /* @__PURE__ */ jsx(CardDkeluarbiayaList, { keluarbiaya }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(LinkButton, { theme: "blueGrey", href: route(base_route + "transaksi.keluarbiayas.index"), children: /* @__PURE__ */ jsx("span", { children: "Kembali" }) }),
          /* @__PURE__ */ jsx(Button, { disabled: parseInt(keluarbiaya.jumlah_biaya) == 0, theme: "blue", onClick: (e) => prosesLaporan(e), children: /* @__PURE__ */ jsx("span", { children: "Cetak" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(ModalCetakLaporan, { showModal: showModalLaporan, setShowModal: setShowModalLaporan, src: route(base_route + "transaksi.keluarbiayas.lap.staf", keluarbiaya.id) }),
    showStatusDialog ? /* @__PURE__ */ jsx(Modal, { closeable: true, show: showStatusDialog, maxWidth: "md", onClose: () => setShowStatusDialog(false), children: /* @__PURE__ */ jsxs("div", { className: "w-full p-4 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("h1", { children: "Update Status Pengeluaran" }),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          placeholder: "Status",
          name: "status_keluarbiaya",
          value: statusKeluarbiayapermuser,
          options: status_keluarbiayas,
          onChange: (e) => setStatusKeluarbiayapermuser(e)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsx(Button, { theme: "blue", onClick: (e) => handleUpdateStatus(e), children: /* @__PURE__ */ jsx("span", { children: "Simpan" }) }),
        /* @__PURE__ */ jsx(Button, { theme: "blueGrey", onClick: (e) => setShowStatusDialog(false), children: /* @__PURE__ */ jsx("span", { children: "Batal" }) })
      ] })
    ] }) }) : null
  ] });
};
export {
  Create as default
};
