import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { M as Modal } from "./Modal-1ab71745.js";
import { m as myapp } from "./bootstrap-37cb65ea.js";
import { createPortal } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThreeDots } from "react-loader-spinner";
const LaporanIframe = ({
  children,
  src,
  ...props
}) => {
  var _a, _b, _c, _d;
  const [contentRef, setContentRef] = useState(null);
  const [loadingIframe, setLoadingIframe] = useState(true);
  const cache = createCache({
    key: "css",
    container: (_b = (_a = contentRef == null ? void 0 : contentRef.contentWindow) == null ? void 0 : _a.document) == null ? void 0 : _b.head,
    prepend: true
  });
  const mountNode = (_d = (_c = contentRef == null ? void 0 : contentRef.contentWindow) == null ? void 0 : _c.document) == null ? void 0 : _d.body;
  return /* @__PURE__ */ jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "iframe",
      {
        ...props,
        ref: setContentRef,
        className: "w-full h-600-px",
        src,
        onLoad: () => setLoadingIframe(false),
        loading: "lazy",
        children: mountNode && createPortal(children, mountNode)
      }
    ),
    loadingIframe ? /* @__PURE__ */ jsx("div", { className: "m-auto h-full w-full flex justify-center items-center absolute", children: /* @__PURE__ */ jsx(
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
    ) }) : null
  ] }) });
};
const ModalCetakLaporan = ({ showModal, setShowModal, src }) => {
  const [dataBase64, setDataBase64] = useState();
  const [isLoading, setisLoading] = useState(false);
  const base64toBlob = (data) => {
    const base64WithoutPrefix = data.substring("data:application/pdf;base64,".length);
    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);
    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }
    return new Blob([out], { type: "application/pdf" });
  };
  useEffect(() => {
    setisLoading(true);
    const getLaporan = async () => {
      const response = await myapp.backend.get(src);
      const data = response.data;
      setDataBase64(URL.createObjectURL(base64toBlob(data)));
      setisLoading(false);
    };
    if (showModal) {
      getLaporan();
    }
  }, [showModal]);
  return /* @__PURE__ */ jsx(Modal, { show: showModal, maxWidth: "2xl", closeable: true, onClose: () => setShowModal(false), children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blueGray-100 rounded-md text-xs", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full absolute right-1 top-1 flex justify-between items-center px-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg mb-2 font-semibold text-blueGray-500 ml-4 ", children: "Cetak Laporan" }),
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
    isLoading && /* @__PURE__ */ jsx("div", { className: "m-auto mt-6 h-16 w-full flex justify-center items-center absolute z-50", children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("div", { className: "w-full relative bg-slate-500 rounded-sm mt-6", children: dataBase64 ? /* @__PURE__ */ jsx(LaporanIframe, { src: dataBase64, title: "Laporan" }) : null })
  ] }) });
};
export {
  ModalCetakLaporan as M
};
