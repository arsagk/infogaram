import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { E as EditActiveIcon, a as EditInactiveIcon, D as DeleteActiveIcon, b as DeleteInactiveIcon } from "./index-0c7aab93.js";
import { useEffect, useState, lazy, Suspense } from "react";
import { M as Modal } from "./Modal-1ab71745.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { usePage, useForm, router } from "@inertiajs/react";
import { I as Input } from "./Input-c50f8cbe.js";
import { M as MoneyInput } from "./MoneyInput-f1968521.js";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { M as ModalBayarbiayaperms, a as ModalKeluarBiayaperm, b as ModalAddBiayaperm } from "./ModalAddBiayaperm-7082be11.js";
import { D as DropdownMenu } from "./DropdownMenu-25aa95ab.js";
import { Menu, Tab } from "@headlessui/react";
import { ListBulletIcon, TrashIcon } from "@heroicons/react/20/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { pickBy } from "lodash";
import { usePrevious } from "react-use";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { ThreeDots } from "react-loader-spinner";
import { P as PermohonanSelect } from "./PermohonanSelect-77b2bb7a.js";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import "sweetalert2";
import "classnames";
import "tailwind-merge";
import "react-number-format";
import "react-select";
import "axios";
import "swr";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
const ModalBayarBiayaperm = ({ showModal, setShowModal, biayaperm }) => {
  const { metodebayars } = usePage().props;
  const { data, setData, errors, post, processing, reset } = useForm({
    biayaperm_id: biayaperm.id || "",
    saldo_awal: biayaperm.kurang_bayar.toString() || "",
    jumlah_bayar: biayaperm.kurang_bayar.toString() || "",
    saldo_akhir: "0",
    akun: void 0,
    akun_id: "",
    metodebayar: void 0,
    metodebayar_id: "",
    info_rekening: "",
    catatan_bayarbiayaperm: "",
    image_bayarbiayaperm: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    useSwal.confirm({
      title: "Simpan Data",
      text: "apakah akan menyimpan?"
    }).then((result) => {
      if (result.isConfirmed) {
        post(route("transaksi.bayarbiayaperms.store"), {
          onSuccess: () => {
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
    setData((prev) => ({
      ...prev,
      biayaperm_id: biayaperm.id || "",
      saldo_awal: biayaperm.kurang_bayar.toString() || "0",
      jumlah_bayar: biayaperm.kurang_bayar.toString() || "0",
      saldo_akhir: "0",
      metodebayar_id: "",
      metodebayar: void 0,
      info_rekening: "",
      catatan_bayarbiayaperm: "",
      image_bayarbiayaperm: ""
    }));
  }, [biayaperm]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "md", closeable: false, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-blueGray-100 rounded-md", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl text-blueGray-700 mb-4", children: "BAYAR BIAYA PERMOHONAN" }),
    /* @__PURE__ */ jsx(
      MoneyInput,
      {
        name: "saldo_awal",
        label: "Jumlah Biaya",
        errors: errors.saldo_awal,
        value: data.saldo_awal,
        disabled: true,
        onValueChange: (e) => setData((prev) => ({
          ...prev,
          "saldo_awal": e.value,
          "saldo_akhir": getKurangBayar(Number.parseInt(e.value), Number.parseInt(data.jumlah_bayar))
        }))
      }
    ),
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
    /* @__PURE__ */ jsx(Input, { name: "info_rekening", label: "Info Pembayaran", errors: errors.info_rekening, value: data.info_rekening, onChange: (e) => setData("info_rekening", e.target.value) }),
    /* @__PURE__ */ jsx(
      MoneyInput,
      {
        name: "jumlah_bayar",
        label: "Jumlah Bayar",
        errors: errors.jumlah_bayar,
        value: data.jumlah_bayar,
        onValueChange: (e) => setData((prev) => ({
          ...prev,
          "jumlah_bayar": e.value,
          "saldo_akhir": getKurangBayar(Number.parseInt(data.saldo_awal), Number.parseInt(e.value))
        }))
      }
    ),
    /* @__PURE__ */ jsx(MoneyInput, { name: "saldo_akhir", label: "Kurang Bayar", disabled: true, errors: errors.saldo_akhir, value: data.saldo_akhir, onValueChange: (e) => {
      setData("saldo_akhir", e.value);
    } }),
    /* @__PURE__ */ jsx(Input, { name: "catatan_biayaperm", label: "Catatan", errors: errors.catatan_bayarbiayaperm, value: data.catatan_bayarbiayaperm, onChange: (e) => setData("catatan_bayarbiayaperm", e.target.value) }),
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
const ModalEditBiayaperm = ({ showModal, setShowModal, biayaperm }) => {
  const { data, setData, errors, post, processing, reset } = useForm({
    transpermohonan_id: biayaperm.transpermohonan.id || "",
    jumlah_biayaperm: biayaperm.jumlah_biayaperm.toString() || "",
    jumlah_bayar: biayaperm.jumlah_bayar.toString() || "",
    kurang_bayar: biayaperm.kurang_bayar.toString() || "",
    catatan_biayaperms: biayaperm.catatan_biayaperm || "",
    image_biayaperms: biayaperm.image_biayaperm || "",
    _method: "PUT"
  });
  function handleSubmit(e) {
    e.preventDefault();
    useSwal.confirm({
      title: "Simpan Data",
      text: "apakah akan menyimpan?"
    }).then((result) => {
      if (result.isConfirmed) {
        post(route("transaksi.biayaperms.update", biayaperm.id), {
          onSuccess: () => {
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
    setData((prev) => ({
      ...prev,
      transpermohonan_id: biayaperm.transpermohonan.id || "",
      jumlah_biayaperm: biayaperm.jumlah_biayaperm.toString() || "0",
      jumlah_bayar: biayaperm.jumlah_bayar.toString() || "0",
      kurang_bayar: biayaperm.kurang_bayar.toString() || "0",
      catatan_biayaperms: biayaperm.catatan_biayaperm || "",
      image_biayaperms: biayaperm.image_biayaperm || ""
    }));
  }, [biayaperm]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "md", closeable: false, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-blueGray-100 rounded-md", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl text-blueGray-700 mb-4", children: "EDIT BIAYA PERMOHONAN" }),
    /* @__PURE__ */ jsx(
      MoneyInput,
      {
        name: "jumlah_biayaperm",
        label: "Jumlah Biaya",
        errors: errors.jumlah_biayaperm,
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
        name: "jumlah_bayar",
        disabled: true,
        label: "Jumlah Bayar",
        errors: errors.jumlah_bayar,
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
    /* @__PURE__ */ jsx(Input, { name: "catatan_biayaperm", label: "Catatan", errors: errors.catatan_biayaperms, value: data.catatan_biayaperms, onChange: (e) => setData("catatan_biayaperms", e.target.value) }),
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
function CardTableBiayaperms({ biayaperms }) {
  const handleRemoveData = (biayaperm_id) => {
    router.delete(route("transaksi.biayaperms.destroy", [biayaperm_id]));
  };
  const params = new URLSearchParams(window.location.search);
  const { permohonan_id, transpermohonan_id } = usePage().props;
  const [values, setValues] = useState({ permohonan_id, transpermohonan_id, biayaperm_id: params.get("biayaperm_id") });
  const prevValues = usePrevious(values);
  const [showModalBiayaperm, setShowModalBiayaperm] = useState(false);
  const [showModalBayarbiayaperm, setShowModalBayarbiayaperm] = useState(false);
  const [showModalBayarbiayaperms, setShowModalBayarbiayaperms] = useState(false);
  const [biayapermId, setBiayapermId] = useState();
  const { biayaperm } = usePage().props;
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
        // only: ['biayaperm']
      });
    }
  }, [values]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full mt-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full px-4 justify-center items-center rounded-t-md text-xs bg-lightBlue-600 border-blueGray-400 py-2  text-lightBlue-50 font-semibold", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: "No" }),
      /* @__PURE__ */ jsx("div", { className: "w-[10%]", children: "Tanggal" }),
      /* @__PURE__ */ jsx("div", { className: "w-[25%] md:w-[12%]", children: "Jumlah Biaya" }),
      /* @__PURE__ */ jsx("div", { className: "w-[25%] md:w-[12%]", children: "Jumlah Bayar" }),
      /* @__PURE__ */ jsx("div", { className: "w-[25%] md:w-[12%]", children: "Kurang Bayar" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-[20%]", children: "Catatan" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[19%]", children: "User" }),
      /* @__PURE__ */ jsx("div", { className: "w-[10%] flex justify-center items-center", children: /* @__PURE__ */ jsx("span", { children: "Menu" }) })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md", children: biayaperms && biayaperms.map((biayaperm2, index) => /* @__PURE__ */ jsx("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-100 px-4 border-b-2 border-lightBlue-200", children: /* @__PURE__ */ jsxs("div", { className: "flex text-xs py-2 items-center justify-center font-semibold text-lightBlue-600 ", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[5%] ", children: index + 1 }),
      /* @__PURE__ */ jsx("div", { className: "w-[10%]", children: biayaperm2.tgl_biayaperm }),
      /* @__PURE__ */ jsx("div", { className: "w-[20%] md:w-[12%]", children: biayaperm2.jumlah_biayaperm }),
      /* @__PURE__ */ jsx("div", { className: "w-[20%] md:w-[12%]", children: biayaperm2.jumlah_bayar }),
      /* @__PURE__ */ jsx("div", { className: "w-[20%] md:w-[12%]", children: biayaperm2.kurang_bayar }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[20%]", children: biayaperm2.catatan_biayaperm }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[19%]", children: /* @__PURE__ */ jsx("span", { children: biayaperm2.user.name }) }),
      /* @__PURE__ */ jsx("div", { className: "w-[10%] flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "absolute", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
            onClick: (e) => {
              setValues((prev) => ({ ...prev, transpermohonan_id: biayaperm2.transpermohonan.id, biayaperm_id: biayaperm2.id }));
              setShowModalBiayaperm(true);
            },
            children: [
              active ? /* @__PURE__ */ jsx(
                EditActiveIcon,
                {
                  className: "mr-2 h-5 w-5",
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx(
                EditInactiveIcon,
                {
                  className: "mr-2 h-5 w-5",
                  "aria-hidden": "true"
                }
              ),
              "Edit"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
            onClick: (e) => useSwal.confirm({
              title: "Hapus Data",
              text: "apakah akan menghapus?"
            }).then((result) => {
              if (result.isConfirmed) {
                handleRemoveData(biayaperm2.id);
              }
            }),
            children: [
              active ? /* @__PURE__ */ jsx(
                DeleteActiveIcon,
                {
                  className: "mr-2 h-5 w-5",
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx(
                DeleteInactiveIcon,
                {
                  className: "mr-2 h-5 w-5",
                  "aria-hidden": "true"
                }
              ),
              "Hapus"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
            onClick: (e) => {
              setValues((prev) => ({ ...prev, transpermohonan_id: biayaperm2.transpermohonan.id, biayaperm_id: biayaperm2.id }));
              setShowModalBayarbiayaperm(true);
            },
            disabled: biayaperm2.kurang_bayar <= 0,
            children: [
              active ? /* @__PURE__ */ jsx(
                CurrencyDollarIcon,
                {
                  className: "mr-2 h-5 w-5",
                  stroke: "#C4B5FD",
                  fill: "none",
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx(
                CurrencyDollarIcon,
                {
                  className: "mr-2 h-5 w-5",
                  stroke: "#A78BFA",
                  fill: "none",
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }
              ),
              "Bayar"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
            onClick: (e) => {
              setBiayapermId(biayaperm2.id);
              setShowModalBayarbiayaperms(true);
            },
            children: [
              active ? /* @__PURE__ */ jsx(
                ListBulletIcon,
                {
                  className: "mr-2 h-4 w-4",
                  stroke: "#C4B5FD",
                  fill: "none",
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx(
                ListBulletIcon,
                {
                  className: "mr-2 h-4 w-4",
                  stroke: "#A78BFA",
                  fill: "none",
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }
              ),
              "List Pembayaran"
            ]
          }
        ) })
      ] }) }) })
    ] }) }, biayaperm2.id)) }),
    biayaperm && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ModalEditBiayaperm, { biayaperm, showModal: showModalBiayaperm, setShowModal: setShowModalBiayaperm }),
      /* @__PURE__ */ jsx(ModalBayarBiayaperm, { biayaperm, showModal: showModalBayarbiayaperm, setShowModal: setShowModalBayarbiayaperm })
    ] }),
    biayapermId && /* @__PURE__ */ jsx(ModalBayarbiayaperms, { biayaperm_id: biayapermId, showModal: showModalBayarbiayaperms, setShowModal: setShowModalBayarbiayaperms })
  ] });
}
const SubCardNeracaTblKeluarBiayaPermUser = ({ neracas, totDebet, totKredit }) => {
  return /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx(
    "li",
    {
      className: "relative rounded-md p-2 hover:bg-gray-100 text-sm",
      children: neracas ? /* @__PURE__ */ jsxs("div", { className: "p-1 w-full flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full font-bold mb-2", children: "NERACA" }),
        /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-y-2 font-semibold bg-slate-300", children: [
            /* @__PURE__ */ jsx("td", { width: "10%", children: "Kode" }),
            /* @__PURE__ */ jsx("td", { width: "50%", children: "Nama Akun" }),
            /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: "Debet" }),
            /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: "Kredit" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: neracas.map((neraca, i) => /* @__PURE__ */ jsx("tr", { className: "border-b-2", children: Object.keys(neraca).map((item, idx) => /* @__PURE__ */ jsx(
            "td",
            {
              className: `${idx > 1 ? "text-right" : ""}`,
              children: neraca[item]
            },
            idx
          )) }, i)) }),
          /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsxs("tr", { className: "font-semibold border-b-2 bg-slate-300", children: [
            /* @__PURE__ */ jsx("td", { width: "10%", children: " " }),
            /* @__PURE__ */ jsx("td", { width: "50%", children: "Total" }),
            /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: totDebet }),
            /* @__PURE__ */ jsx("td", { width: "20%", align: "right", children: totKredit })
          ] }) })
        ] })
      ] }) : null
    }
  ) });
};
function CardTableKeluarbiayaperms({ transpermohonan }) {
  const [keluarbiayaperms, setKeluarbiayaperms] = useState();
  const [keluarbiayapermusers, setKeluarbiayapermusers] = useState();
  const [isloading, setIsloading] = useState(false);
  const [isloadingTotal, setIsloadingTotal] = useState(false);
  const [isloadingNeraca, setIsloadingNeraca] = useState(false);
  const [totalPengeluaran, setTotalPengeluaran] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [prevLink, setPrevLink] = useState(null);
  const [totalPengeluaranUser, setTotalPengeluaranUser] = useState(null);
  const [nextLinkUser, setNextLinkUser] = useState(null);
  const [prevLinkUser, setPrevLinkUser] = useState(null);
  const [neracas, setNeracas] = useState();
  const [totDebet, setTotDebet] = useState();
  const [totKredit, setTotKredit] = useState();
  const handleRemoveData = (id) => {
    router.delete(route("transaksi.keluarbiayaperms.destroy", id));
  };
  const [showModalKeluarbiayaperm, setShowModalKeluarbiayaperm] = useState(false);
  const getKeluarbiayaperms = async (transpermohonan_id, link = null) => {
    setIsloading(true);
    let xlink = `/transaksi/keluarbiayaperms/api/list?transpermohonan_id=${transpermohonan_id}`;
    if (link) {
      xlink = link;
    }
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setNextLink(data.links.next);
    setPrevLink(data.links.prev);
    setKeluarbiayaperms(data.data);
    setIsloading(false);
  };
  const getTotalPengeluaran = async (transpermohonan_id) => {
    setIsloadingTotal(true);
    let xlink = `/transaksi/keluarbiayaperms/api/totalpengeluaran?transpermohonan_id=${transpermohonan_id}`;
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setTotalPengeluaran(data);
    setIsloadingTotal(false);
  };
  const getKeluarbiayapermusers = async (transpermohonan_id, link = null) => {
    setIsloading(true);
    let xlink = `/transaksi/dkeluarbiayapermusers/api/list?transpermohonan_id=${transpermohonan_id}`;
    if (link) {
      xlink = link;
    }
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setNextLinkUser(data.links.next);
    setPrevLinkUser(data.links.prev);
    setKeluarbiayapermusers(data.data);
  };
  const getTotalPengeluaranusers = async (transpermohonan_id) => {
    setIsloadingTotal(true);
    let xlink = `/transaksi/dkeluarbiayapermusers/api/totalpengeluaran?transpermohonan_id=${transpermohonan_id}`;
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setTotalPengeluaranUser(data);
  };
  const getNeracas = async (transpermohonan_id) => {
    setIsloadingNeraca(true);
    let xlink = `/transaksi/jurnalumums/api/neracapermohonan?transpermohonan_id=${transpermohonan_id}`;
    const response = await myapp.backend.get(xlink);
    const data = response.data;
    setNeracas(data.neracas);
    setTotDebet(data.totDebet);
    setTotKredit(data.totKredit);
    setIsloadingNeraca(false);
  };
  useEffect(() => {
    if (transpermohonan) {
      Promise.all(
        [
          getKeluarbiayaperms(transpermohonan.id),
          getTotalPengeluaran(transpermohonan.id),
          getKeluarbiayapermusers(transpermohonan.id),
          getTotalPengeluaranusers(transpermohonan.id),
          getNeracas(transpermohonan.id)
        ]
      );
    }
  }, [transpermohonan]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return /* @__PURE__ */ jsxs("div", { className: "w-full px-1 py-1 sm:px-0", children: [
    /* @__PURE__ */ jsxs(Tab.Group, { children: [
      /* @__PURE__ */ jsxs(Tab.List, { className: "flex space-x-1 rounded-xl bg-blue-900/20 p-2", children: [
        /* @__PURE__ */ jsx(
          Tab,
          {
            className: ({ selected }) => classNames(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              selected ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            ),
            children: "Pengeluaran"
          }
        ),
        /* @__PURE__ */ jsx(
          Tab,
          {
            className: ({ selected }) => classNames(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              selected ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            ),
            children: "Pengeluaran Staf"
          }
        ),
        /* @__PURE__ */ jsx(
          Tab,
          {
            className: ({ selected }) => classNames(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              selected ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            ),
            children: "Neraca"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Tab.Panels, { className: "mt-2", children: [
        /* @__PURE__ */ jsx(
          Tab.Panel,
          {
            className: "rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs(
              "li",
              {
                className: "relative rounded-md py-1 px-2 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "w-full mt-2 flext flex-col", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full px-4 justify-center items-center rounded-t-md text-xs bg-lightBlue-600 border-blueGray-400 py-2  text-lightBlue-50 font-semibold", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: "No" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[10%]", children: "Tanggal" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: "Metode" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[20%]", children: "Item Kegiatan" }),
                      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-[10%]", children: "Catatan" }),
                      /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[15%]", children: "User" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: "Jumlah" }),
                      /* @__PURE__ */ jsx("div", { className: "flex md:w-[10%]", children: "Menu" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md", children: [
                      isloading && /* @__PURE__ */ jsx("div", { className: "m-auto h-24 w-full flex justify-center items-center absolute", children: /* @__PURE__ */ jsx(
                        ThreeDots,
                        {
                          visible: true,
                          height: "80",
                          width: "80",
                          color: "#4fa94d",
                          radius: "9",
                          ariaLabel: "three-dots-loading",
                          wrapperStyle: {},
                          wrapperClass: ""
                        }
                      ) }),
                      keluarbiayaperms && keluarbiayaperms.map((keluarbiayaperm, index) => /* @__PURE__ */ jsx("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-100 px-4 border-b-2 border-lightBlue-200", children: /* @__PURE__ */ jsxs("div", { className: "flex text-xs py-1 items-center justify-center font-semibold text-lightBlue-600 ", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-[5%] ", children: index + 1 }),
                        /* @__PURE__ */ jsx("div", { className: "w-[10%]", children: keluarbiayaperm.tgl_keluarbiayaperm }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: keluarbiayaperm.metodebayar.nama_metodebayar }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[20%]", children: keluarbiayaperm.itemkegiatan.nama_itemkegiatan }),
                        /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-[10%]", children: keluarbiayaperm.catatan_keluarbiayaperm }),
                        /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[15%]", children: /* @__PURE__ */ jsx("span", { children: keluarbiayaperm.user.name }) }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: keluarbiayaperm.jumlah_keluarbiayaperm }),
                        /* @__PURE__ */ jsx("div", { className: "flex md:w-[10%]", children: /* @__PURE__ */ jsx(
                          "button",
                          {
                            onClick: (e) => useSwal.confirm({
                              title: "Hapus Data",
                              text: "apakah akan menghapus?"
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleRemoveData(keluarbiayaperm.id);
                              }
                            }),
                            className: "text-lightBlue-500 background-transparent font-bold px-3 py-0 text-xs outline-none focus:outline-none hover:text-lightBlue-100 hover:scale-105 mr-1 mb-1 ease-linear transition-all duration-150",
                            type: "button",
                            children: /* @__PURE__ */ jsx(TrashIcon, { className: "m-auto h-4 w-4", stroke: "#58c4fa", fill: "none", strokeWidth: 2 })
                          }
                        ) })
                      ] }) }, keluarbiayaperm.id))
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-2 mt-2", children: [
                    isloadingTotal && /* @__PURE__ */ jsx("div", { className: "m-auto h-16 w-full flex justify-center items-center absolute", children: /* @__PURE__ */ jsx(
                      ThreeDots,
                      {
                        visible: true,
                        height: "80",
                        width: "80",
                        color: "#4fa94d",
                        radius: "9",
                        ariaLabel: "three-dots-loading",
                        wrapperStyle: {},
                        wrapperClass: ""
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-[79%] flex justify-between text-xs font-bold gap-2 text-blueGray-500", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex justify-start items-center", children: /* @__PURE__ */ jsxs(LinkButton, { href: "#", theme: "black", className: "shrink-0 py-1 mt-0 mb-0 text-xs", onClick: (e) => {
                        e.preventDefault();
                        setShowModalKeluarbiayaperm(true);
                      }, children: [
                        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "hidden md:block w-4 h-4 text-sm mr-1 ", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" }) }),
                        /* @__PURE__ */ jsx("span", { children: " Tambah" })
                      ] }) }),
                      totalPengeluaran ? /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                        "Total : ",
                        totalPengeluaran
                      ] }) : null
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "w-[30%] md:w-[21%] flex justify-end items-center", children: [
                      prevLink ? /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "text-lightBlue-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: (e) => getKeluarbiayaperms(transpermohonan.id, prevLink),
                          children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-left", "aria-hidden": "true" })
                        }
                      ) : /* @__PURE__ */ jsx("span", { className: "text-blueGray-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-left", "aria-hidden": "true" }) }),
                      nextLink ? /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "text-lightBlue-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: (e) => getKeluarbiayaperms(transpermohonan.id, nextLink),
                          children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-right", "aria-hidden": "true" })
                        }
                      ) : /* @__PURE__ */ jsx("span", { className: "text-blueGray-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-right", "aria-hidden": "true" }) })
                    ] })
                  ] })
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          Tab.Panel,
          {
            className: "rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs(
              "li",
              {
                className: "relative rounded-md py-1 px-2 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "w-full mt-2 flext flex-col", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full px-4 justify-center items-center rounded-t-md text-xs bg-lightBlue-600 border-blueGray-400 py-2  text-lightBlue-50 font-semibold", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-[5%]", children: "No" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: "Tanggal" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[13%]", children: "Instansi" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[10%]", children: "Metode" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: "Item Kegiatan" }),
                      /* @__PURE__ */ jsx("div", { className: "md:block w-[15%]", children: "Jumlah Biaya" }),
                      /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[15%]", children: "Ket Biaya" }),
                      /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[12%]", children: "User" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-none container-snap max-h-80 overflow-x-hidden rounded-b-md", children: [
                      isloading && /* @__PURE__ */ jsx("div", { className: "m-auto h-24 w-full flex justify-center items-center absolute", children: /* @__PURE__ */ jsx(
                        ThreeDots,
                        {
                          visible: true,
                          height: "80",
                          width: "80",
                          color: "#4fa94d",
                          radius: "9",
                          ariaLabel: "three-dots-loading",
                          wrapperStyle: {},
                          wrapperClass: ""
                        }
                      ) }),
                      keluarbiayapermusers && keluarbiayapermusers.map((dkeluarbiayapermuser, index) => /* @__PURE__ */ jsx("li", { className: "w-full flex flex-col overflow-hidden bg-lightBlue-100 px-4 border-b-2 border-lightBlue-200", children: /* @__PURE__ */ jsxs("div", { className: "flex text-xs py-1 items-center justify-center font-semibold text-lightBlue-600 ", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-[5%] ", children: index + 1 }),
                        /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: dkeluarbiayapermuser.created_at }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35% md:w-[13%]", children: dkeluarbiayapermuser.instansi.nama_instansi }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[10%]", children: dkeluarbiayapermuser.metodebayar.nama_metodebayar }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: dkeluarbiayapermuser.itemkegiatan.nama_itemkegiatan }),
                        /* @__PURE__ */ jsx("div", { className: "w-[35%] md:w-[15%]", children: dkeluarbiayapermuser.jumlah_biaya }),
                        /* @__PURE__ */ jsx("div", { className: "md:block md:w-[15%]", children: dkeluarbiayapermuser.ket_biaya }),
                        /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-[12%]", children: /* @__PURE__ */ jsx("span", { children: dkeluarbiayapermuser.user.name }) })
                      ] }) }, dkeluarbiayapermuser.id))
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-2 mt-2", children: [
                    isloadingTotal && /* @__PURE__ */ jsx("div", { className: "m-auto h-16 w-full flex justify-center items-center absolute", children: /* @__PURE__ */ jsx(
                      ThreeDots,
                      {
                        visible: true,
                        height: "80",
                        width: "80",
                        color: "#4fa94d",
                        radius: "9",
                        ariaLabel: "three-dots-loading",
                        wrapperStyle: {},
                        wrapperClass: ""
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-[79%] flex justify-between text-xs font-bold gap-2 text-blueGray-500", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex justify-start items-center" }),
                      totalPengeluaran ? /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                        "Total : ",
                        totalPengeluaranUser
                      ] }) : null
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "w-[30%] md:w-[21%] flex justify-end items-center", children: [
                      prevLinkUser ? /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "text-lightBlue-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: (e) => getKeluarbiayapermusers(transpermohonan.id, prevLinkUser),
                          children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-left", "aria-hidden": "true" })
                        }
                      ) : /* @__PURE__ */ jsx("span", { className: "text-blueGray-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-left", "aria-hidden": "true" }) }),
                      nextLinkUser ? /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "text-lightBlue-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: (e) => getKeluarbiayapermusers(transpermohonan.id, nextLinkUser),
                          children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-right", "aria-hidden": "true" })
                        }
                      ) : /* @__PURE__ */ jsx("span", { className: "text-blueGray-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", children: /* @__PURE__ */ jsx("i", { className: "fa fa-chevron-right", "aria-hidden": "true" }) })
                    ] })
                  ] })
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          Tab.Panel,
          {
            className: "rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            children: /* @__PURE__ */ jsx(SubCardNeracaTblKeluarBiayaPermUser, { neracas, totDebet, totKredit })
          }
        )
      ] })
    ] }),
    transpermohonan && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ModalKeluarBiayaperm, { transpermohonan, showModal: showModalKeluarbiayaperm, setShowModal: setShowModalKeluarbiayaperm }) })
  ] });
}
const CardPermohonan = lazy(() => import("./CardPermohonan-8f262646.js"));
const Create = () => {
  const { permohonan, biayaperms, transpermohonan, transpermohonanopt, transpermohonans, permohonan_id, transpermohonan_id } = usePage().props;
  const { data, setData, errors, post, processing, reset } = useForm({
    permohonan_id: permohonan ? permohonan.id : "",
    permohonan: null,
    jumlah_biayaperm: "",
    jumlah_bayar: "",
    kurang_bayar: "",
    catatan_biayaperm: "",
    _method: "POST"
  });
  const [AddMode, setAddMode] = useState(false);
  const setPermohonan = (permohonan2) => {
    if (permohonan2) {
      setData({ ...data, permohonan_id: permohonan2.id });
      setValues((prev) => ({ ...prev, permohonan_id: permohonan2.id, transpermohonan_id: permohonan2 == null ? void 0 : permohonan2.transpermohonan.id }));
    }
  };
  const [values2, setValues] = useState({ permohonan_id, transpermohonan_id });
  const prevValues = usePrevious(values2);
  const [showModalBiayaperm, setShowModalBiayaperm] = useState(false);
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values2)).length ? pickBy(values2) : {};
      router.get(route(route().current() ? route().current() + "" : ""), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values2]);
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    AddMode ? /* @__PURE__ */ jsx("div", { className: "z-20 absolute h-full w-full left-0" }) : null,
    /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-10/12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-t mt-2 px-4", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "BIAYA PERMOHONAN" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-auto px-4 py-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-center w-full gap-1", children: /* @__PURE__ */ jsx(PermohonanSelect, { isStaf: false, className: `w-full ${AddMode ? "z-10" : ""}`, value: permohonan, onValueChange: setPermohonan, errors: errors.permohonan_id }) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-52 m-auto", children: "Loading..." }) }), children: /* @__PURE__ */ jsx("div", { children: permohonan ? /* @__PURE__ */ jsx(CardPermohonan, { permohonan }) : null }) }),
        permohonan ? /* @__PURE__ */ jsxs("div", { className: "bg-blueGray-300 rounded-md shadow-md py-2 px-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1/2 md:w-1/3", children: /* @__PURE__ */ jsx(
            SelectSearch,
            {
              options: transpermohonans,
              value: transpermohonanopt,
              onChange: (e) => setValues((prev) => ({ ...prev, transpermohonan_id: e ? e.value : "" })),
              className: "mb-0",
              placeholder: "Pilih Jenis Permohonan"
            }
          ) }),
          /* @__PURE__ */ jsxs(LinkButton, { href: "#", theme: "black", className: "shrink-0 py-2 mt-1  mb-0 text-xs", onClick: (e) => {
            e.preventDefault();
            setShowModalBiayaperm(true);
          }, children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "hidden md:block w-4 h-4 text-sm mr-1 ", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" }) }),
            /* @__PURE__ */ jsx("span", { children: " Tambah" })
          ] })
        ] }) : null,
        biayaperms && biayaperms.length > 0 ? /* @__PURE__ */ jsx(CardTableBiayaperms, { biayaperms }) : null,
        transpermohonan && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(CardTableKeluarbiayaperms, { transpermohonan }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(ModalAddBiayaperm, { showModal: showModalBiayaperm, setShowModal: setShowModalBiayaperm })
  ] });
};
export {
  Create as default
};
