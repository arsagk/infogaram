import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { M as Modal } from "./Modal-1ab71745.js";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { usePage, useForm } from "@inertiajs/react";
import { I as Input } from "./Input-c50f8cbe.js";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
const ModalBayarbiayaperms = ({ showModal, setShowModal, biayaperm_id }) => {
  const [bayarbiayaperms, setBayarbiayaperms] = useState([]);
  const getBayarbiayaperms = async (biayaperm_id2) => {
    let xlink = `/transaksi/bayarbiayaperms/api/list?biayaperm_id=${biayaperm_id2}`;
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setBayarbiayaperms(data.data);
  };
  useEffect(() => {
    if (biayaperm_id && showModal) {
      getBayarbiayaperms(biayaperm_id);
    }
  }, [showModal]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "2xl", closeable: true, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blueGray-100 rounded-md text-xs", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full absolute right-1 top-1 flex justify-between items-center px-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg mb-1 font-semibold text-blueGray-500 ml-4", children: "List Pembayaran" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-lightBlue-500 background-transparent font-bold uppercase px-0 py-0 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
          type: "button",
          onClick: (e) => setShowModal(false),
          children: /* @__PURE__ */ jsx("i", { className: "fa fa-times-circle", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("table", { className: "w-full shadow-md bottom-2 mt-5", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-y-2 font-semibold bg-slate-300", children: [
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "5%", children: "No" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "15%", children: "Tanggal" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "15%", children: "Metode Bayar" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "20%", children: "Info Rekening" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "15%", align: "right", children: "Saldo Awal" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "15%", align: "right", children: "Jumlah Bayar" }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", width: "15%", align: "right", children: "Saldo Akhir" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: bayarbiayaperms && bayarbiayaperms.map((bayarbiayaperm, idx) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", children: idx + 1 }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", children: bayarbiayaperm.tgl_bayarbiayaperm }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", children: bayarbiayaperm.metodebayar.nama_metodebayar }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", children: bayarbiayaperm.info_rekening }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", align: "right", children: bayarbiayaperm.saldo_awal }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", align: "right", children: bayarbiayaperm.jumlah_bayar }),
        /* @__PURE__ */ jsx("td", { className: "px-1 py-2", align: "right", children: bayarbiayaperm.saldo_akhir })
      ] }, bayarbiayaperm.id)) })
    ] })
  ] }) });
};
const ModalKeluarBiayaperm = ({ showModal, setShowModal, transpermohonan }) => {
  const { metodebayars, itemkegiatansOpts } = usePage().props;
  const { data, setData, errors, post, processing, reset } = useForm({
    transpermohonan_id: transpermohonan.id || "",
    jumlah_keluarbiayaperm: "",
    itemkegiatan_id: "",
    itemkegiatan: void 0,
    akun: void 0,
    akun_id: "",
    metodebayar: metodebayars.length > 0 ? metodebayars[0] : void 0,
    metodebayar_id: "",
    catatan_keluarbiayaperm: "",
    image_keluarbiayaperm: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    useSwal.confirm({
      title: "Simpan Data",
      text: "apakah akan menyimpan?"
    }).then((result) => {
      if (result.isConfirmed) {
        post(route("transaksi.keluarbiayaperms.store"), {
          onSuccess: () => {
            setShowModal(false);
          }
        });
      }
    });
  }
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      transpermohonan_id: transpermohonan.id || "",
      jumlah_keluarbiayaperm: "0",
      metodebayar_id: metodebayars.length > 0 ? metodebayars[0].value : "",
      metodebayar: metodebayars.length > 0 ? metodebayars[0] : void 0,
      catatan_keluarbiayaperm: "",
      image_keluarbiayaperm: ""
    }));
  }, [transpermohonan]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "md", closeable: false, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-blueGray-100 rounded-md", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl text-blueGray-700 mb-4", children: "PENGELUARAN BIAYA" }),
    /* @__PURE__ */ jsx(
      SelectSearch,
      {
        name: "metodebayar",
        options: metodebayars,
        onChange: (e) => setData((prev) => ({ ...prev, metodebayar: e ? e : void 0, metodebayar_id: e ? e.value : "" })),
        label: "Metode Pembayaran",
        value: data.metodebayar,
        errors: errors.metodebayar_id
      }
    ),
    /* @__PURE__ */ jsx(
      SelectSearch,
      {
        name: "itemkegiatan",
        options: itemkegiatansOpts,
        onChange: (e) => setData((prev) => ({ ...prev, itemkegiatan: e ? e : void 0, itemkegiatan_id: e ? e.value : "" })),
        label: "Item Kegiatan",
        value: data.itemkegiatan,
        errors: errors.itemkegiatan_id
      }
    ),
    /* @__PURE__ */ jsx(MoneyInput, { name: "jumlah_keluarbiayaperm", label: "Jumlah Bayar", errors: errors.jumlah_keluarbiayaperm, value: data.jumlah_keluarbiayaperm, onValueChange: (e) => {
      setData("jumlah_keluarbiayaperm", e.value);
    } }),
    /* @__PURE__ */ jsx(Input, { name: "catatan_keluarbiayaperm", label: "Catatan", errors: errors.catatan_keluarbiayaperm, value: data.catatan_keluarbiayaperm, onChange: (e) => setData("catatan_keluarbiayaperm", e.target.value) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 w-full flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(
        LoadingButton,
        {
          theme: "black",
          loading: processing,
          type: "submit",
          children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
        }
      ),
      /* @__PURE__ */ jsx(
        LinkButton,
        {
          href: "#",
          theme: "blue",
          onClick: (e) => {
            e.preventDefault();
            setShowModal(false);
          },
          children: /* @__PURE__ */ jsx("span", { children: "Close" })
        }
      )
    ] })
  ] }) }) });
};
const ModalAddBiayaperm = ({ showModal, setShowModal }) => {
  const { transpermohonan } = usePage().props;
  const { data, setData, errors, post, processing, reset } = useForm({
    transpermohonan_id: (transpermohonan == null ? void 0 : transpermohonan.id) || "",
    jumlah_biayaperm: "0",
    jumlah_bayar: "0",
    kurang_bayar: "0",
    catatan_biayaperm: "",
    image_biayaperms: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    useSwal.confirm({
      title: "Simpan Data",
      text: "apakah akan menyimpan?"
    }).then((result) => {
      if (result.isConfirmed) {
        post(route("transaksi.biayaperms.store"), {
          onSuccess: () => {
            reset();
            setShowModal(false);
          }
        });
      }
    });
  }
  const getKurangBayar = (jmlBiaya, jmlBayar) => {
    let xkurang = jmlBiaya > jmlBayar ? jmlBiaya - jmlBayar : 0;
    return xkurang.toString();
  };
  useEffect(() => {
    if (transpermohonan) {
      setData("transpermohonan_id", transpermohonan.id);
    }
  }, [transpermohonan]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "md", closeable: false, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-blueGray-100 rounded-md", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl text-blueGray-700 mb-4", children: "ADD BIAYA PERMOHONAN" }),
    /* @__PURE__ */ jsx(
      MoneyInput,
      {
        name: "jumlah_biayaperm",
        label: "Jumlah Biaya",
        errors: errors.jumlah_biayaperm,
        autoComplete: "off",
        value: data.jumlah_biayaperm,
        onValueChange: (e) => setData((prev) => ({
          ...prev,
          "jumlah_biayaperm": e.value,
          "kurang_bayar": getKurangBayar(Number.parseInt(e.value), Number.parseInt(data.jumlah_bayar))
        }))
      }
    ),
    /* @__PURE__ */ jsx(
      MoneyInput,
      {
        disabled: true,
        name: "jumlah_bayar",
        label: "Jumlah Bayar",
        errors: errors.jumlah_bayar,
        autoComplete: "off",
        value: data.jumlah_bayar,
        onValueChange: (e) => setData((prev) => ({
          ...prev,
          "jumlah_bayar": e.value,
          "kurang_bayar": getKurangBayar(Number.parseInt(data.jumlah_biayaperm), Number.parseInt(e.value))
        }))
      }
    ),
    /* @__PURE__ */ jsx(MoneyInput, { name: "kurang_bayar", label: "Kurang Bayar", disabled: true, errors: errors.kurang_bayar, value: data.kurang_bayar, onValueChange: (e) => {
      setData("kurang_bayar", e.value);
    } }),
    /* @__PURE__ */ jsx(Input, { name: "catatan_biayaperm", label: "Catatan", errors: errors.catatan_biayaperm, value: data.catatan_biayaperm, onChange: (e) => setData("catatan_biayaperm", e.target.value) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 w-full flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(
        LoadingButton,
        {
          theme: "black",
          loading: processing,
          type: "submit",
          children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
        }
      ),
      /* @__PURE__ */ jsx(
        LinkButton,
        {
          href: "#",
          theme: "blue",
          onClick: (e) => {
            e.preventDefault();
            setShowModal(false);
          },
          children: /* @__PURE__ */ jsx("span", { children: "Close" })
        }
      )
    ] })
  ] }) }) });
};
export {
  ModalBayarbiayaperms as M,
  ModalKeluarBiayaperm as a,
  ModalAddBiayaperm as b
};
