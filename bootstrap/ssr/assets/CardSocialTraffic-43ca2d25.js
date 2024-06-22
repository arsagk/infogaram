import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React from "react";
import Chart from "chart.js/auto";
function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: (/* @__PURE__ */ new Date()).getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false
          },
          {
            label: (/* @__PURE__ */ new Date()).getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white"
        },
        legend: {
          labels: {
            fontColor: "white"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          x: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white"
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          },
          y: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white"
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }
        }
      }
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    var myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-full flex-grow flex-1", children: [
      /* @__PURE__ */ jsx("h6", { className: "uppercase text-blueGray-100 mb-1 text-xs font-semibold", children: "Overview" }),
      /* @__PURE__ */ jsx("h2", { className: "text-white text-xl font-semibold", children: "Sales value" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "p-4 flex-auto", children: /* @__PURE__ */ jsx("div", { className: "relative h-350-px", children: /* @__PURE__ */ jsx("canvas", { id: "line-chart" }) }) })
  ] }) });
}
function CardPageVisits({ recentActivities }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 border-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsx("div", { className: "relative w-full px-2 max-w-full flex-grow flex-1", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base text-blueGray-700", children: "Recent Activities" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Tanggal" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Nama Penerima" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Identitas" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Proses" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: recentActivities && recentActivities.map(({ nama_itemprosesperm, identitas, tanggal, catatan_proses_perm, nama_penerima }, idx) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left", children: tanggal }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: nama_penerima }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: identitas }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: nama_itemprosesperm })
      ] }, idx)) })
    ] }) })
  ] }) });
}
function CardSocialTraffic({ traffics }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 border-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-full flex-grow flex-1", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base text-blueGray-700", children: "Trafik Permohonan" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { className: "thead-light", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Jumlah" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: traffics && traffics.map(
        ({
          nama_jenispermohonan,
          jumlah,
          percentage,
          bg_color
        }, idx) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left", children: nama_jenispermohonan }),
          /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: jumlah }),
          /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
              percentage,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden h-2 text-xs flex rounded bg-red-200", children: /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: `${percentage}%`,
                  backgroundColor: bg_color
                },
                className: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center `
              }
            ) }) })
          ] }) })
        ] }, idx)
      ) })
    ] }) })
  ] }) });
}
export {
  CardLineChart as C,
  CardSocialTraffic as a,
  CardPageVisits as b
};
