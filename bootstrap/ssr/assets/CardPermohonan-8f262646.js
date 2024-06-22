import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function CardPermohonan({ permohonan }) {
  return /* @__PURE__ */ jsx(Fragment, { children: permohonan ? /* @__PURE__ */ jsx("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 mt-2 shadow-lg rounded-lg bg-blueGray-50 border-0 text-xs", children: /* @__PURE__ */ jsx("div", { className: "flex-auto px-2 lg:px-4 py-4 pt-0", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full mt-2 grid grid-cols-2 md:grid-cols-4", children: [
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "No Daftar" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.no_daftar
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Tgl Daftar" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.tgl_daftar
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Nama Pelepas" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.nama_pelepas
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Nama Penerima" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.nama_penerima
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Alas Hak" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.nomor_hak
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Atas Nama" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.atas_nama
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Luas Tanah" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.luas_tanah,
      " M2"
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Letak Obyek" }),
    /* @__PURE__ */ jsxs("span", { children: [
      " ",
      permohonan.letak_obyek
    ] }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Jenis Permohonan" }),
    permohonan.transpermohonan && /* @__PURE__ */ jsx("span", { children: permohonan.transpermohonan.jenispermohonan.nama_jenispermohonan }),
    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Users" }),
    /* @__PURE__ */ jsx("span", { children: permohonan.users && permohonan.users.map((user, i) => /* @__PURE__ */ jsxs("span", { children: [
      i > 0 ? ", " : "",
      user.name
    ] }, i)) })
  ] }) }) }) : null });
}
export {
  CardPermohonan as default
};
