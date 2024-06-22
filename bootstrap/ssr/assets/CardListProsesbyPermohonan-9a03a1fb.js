import { jsxs, jsx } from "react/jsx-runtime";
import { P as PermohonanSelect } from "./PermohonanSelect-77b2bb7a.js";
import { P as Pilihstatusprosesperm } from "./PilihStatusprosesperm-50875269.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { usePage, router } from "@inertiajs/react";
import { pickBy } from "lodash";
import { useState, useEffect } from "react";
import { usePrevious } from "react-use";
import { P as Pagination } from "./Pagination-30af682d.js";
import moment from "moment";
const CardFilterProsesbyPermohonan = ({ itemprosespermsOpts }) => {
  const {
    itemprosesperm_id,
    statusprosesperms,
    statusprosesperm_id,
    transpermohonan_id,
    permohonan
  } = usePage().props;
  const [values, setValues] = useState({
    itemprosesperm_id,
    statusprosesperm_id,
    transpermohonan_id,
    permohonan
  });
  const prevValues = usePrevious(values);
  const itemprosesperm = itemprosespermsOpts.find(
    (e) => e.value == itemprosesperm_id
  );
  const statusprosesperm = statusprosesperms.find(
    (e) => e.id == statusprosesperm_id
  );
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(
        route(route().current() ? route().current() + "" : ""),
        query,
        {
          replace: true,
          preserveState: true
        }
      );
    }
  }, [values]);
  return /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blueGray-100 shadow-md rounded-md flex flex-col", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lightBlue-700 mb-2", children: "Permohonan" }),
    /* @__PURE__ */ jsx(
      PermohonanSelect,
      {
        value: permohonan,
        className: "mb-1",
        onValueChange: (e) => {
          setValues((v) => ({
            ...v,
            permohonan: e.id,
            transpermohonan_id: e.transpermohonan.id
          }));
        }
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lightBlue-700 mb-2", children: "Nama Proses" }),
    /* @__PURE__ */ jsx(
      SelectSearch,
      {
        options: itemprosespermsOpts,
        value: itemprosesperm,
        onChange: (e) => {
          setValues((v) => ({ ...v, itemprosesperm_id: e.value }));
        }
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lightBlue-700 mb-2", children: "Status Proses" }),
    /* @__PURE__ */ jsx(
      Pilihstatusprosesperm,
      {
        statusprosesperms,
        statusprosesperm,
        setStatusprosesperm: (e) => {
          setValues((v) => ({ ...v, statusprosesperm_id: e.id }));
        }
      }
    )
  ] });
};
const CardListProsesbyPermohonan = ({
  prosespermohonans: { data, links }
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col text-xs bg-blueGray-100 rounded-md shadow-lg", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg text-lightBlue-700", children: "Proses Permohonan" }),
    /* @__PURE__ */ jsx("ul", { className: "list-none", children: data && data.map((p, i) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-row justify-between rounded-t-md mt-2 px-2 pt-2 bg-white text-lightBlue-700 font-bold text-xs", children: [
        /* @__PURE__ */ jsx("span", { children: p.itemprosesperm.nama_itemprosesperm }),
        /* @__PURE__ */ jsx("span", { children: p.transpermohonan.jenispermohonan.nama_jenispermohonan })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-2 mt-0 bg-white px-2 shadow", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full flex items-start flex-wrap", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "Pelepas" }),
          /* @__PURE__ */ jsx("div", { className: "w-3/4", children: p.transpermohonan.permohonan.nama_pelepas }),
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "Penerima" }),
          /* @__PURE__ */ jsx("div", { className: "w-3/4", children: p.transpermohonan.permohonan.nama_penerima }),
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "Alas Hak" }),
          /* @__PURE__ */ jsxs("div", { className: "w-3/4", children: [
            p.transpermohonan.permohonan.jenishak.singkatan,
            ".",
            p.transpermohonan.permohonan.nomor_hak,
            ",",
            " ",
            p.transpermohonan.permohonan.jenishak.singkatan == "C" ? "Ps " + p.transpermohonan.permohonan.persil + ", " + p.transpermohonan.permohonan.klas : null,
            " ",
            "L.",
            p.transpermohonan.permohonan.luas_tanah,
            "M2"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full flex items-start flex-wrap", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "Atas Nama" }),
          /* @__PURE__ */ jsx("div", { className: "w-3/4", children: p.transpermohonan.permohonan.atas_nama }),
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "Lokasi" }),
          /* @__PURE__ */ jsxs("div", { className: "w-3/4", children: [
            "Desa",
            " ",
            p.transpermohonan.permohonan.desa.nama_desa,
            ",",
            " ",
            p.transpermohonan.permohonan.desa.kecamatan.nama_kecamatan
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-1/4", children: "User" }),
          /* @__PURE__ */ jsx("div", { className: "w-3/4", children: p.transpermohonan.permohonan.users && p.transpermohonan.permohonan.users.length > 0 && p.transpermohonan.permohonan.users.map(
            (u, i2) => /* @__PURE__ */ jsxs("span", { children: [
              i2 > 0 ? ", " : "",
              u.name
            ] }, i2)
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full rounded-b-md px-2 py-2 pb-2 bg-white text-red-700 text-xs shadow", children: p.statusprosesperms && p.statusprosesperms.map((e, i2) => /* @__PURE__ */ jsxs(
        "ol",
        {
          className: "flex flex-wrap w-full list-disc ml-3 gap-1",
          children: [
            /* @__PURE__ */ jsx("li", { children: moment(
              e.pivot.created_at
            ).format("DD MMM YYYY HH:mm") }),
            /* @__PURE__ */ jsx("li", { className: "ml-4", children: e.nama_statusprosesperm }),
            e.pivot.catatan_statusprosesperm ? /* @__PURE__ */ jsx("li", { className: "ml-4", children: e.pivot.catatan_statusprosesperm }) : null
          ]
        },
        i2
      )) })
    ] }, i)) }),
    /* @__PURE__ */ jsx(Pagination, { links })
  ] });
};
export {
  CardFilterProsesbyPermohonan as C,
  CardListProsesbyPermohonan as a
};
