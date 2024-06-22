import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { N as NotificationDropdown, U as UserDropdown, a as Navbar, H as HeaderBlank, T as ToastMessages } from "./NotificationDropdown-c6384417.js";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
const MenuItem = ({ expanded = true, label, children }) => {
  const [expand, setExpand] = useState(expanded);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ul", { className: `md:flex-col md:min-w-full flex flex-col list-none relative`, children: [
    /* @__PURE__ */ jsx("li", { className: "items-center px-2 " + (expand ? "bg-lightBlue-100 rounded-md " : ""), children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#",
        className: "text-xs uppercase py-3 font-bold flex flex-row justify-start items-center w-full transition-all duration-150 " + (window.location.href.indexOf("/admin/settings") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
        onClick: (e) => {
          e.preventDefault();
          setExpand(!expand);
        },
        children: [
          /* @__PURE__ */ jsx(
            "i",
            {
              className: "fas fa-tools mr-2 text-sm " + (expand ? "opacity-75" : "text-blueGray-300")
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex-1 uppercase w-auto", children: label }),
          /* @__PURE__ */ jsx("i", { className: `fa-solid ${expand ? "fa-chevron-up" : "fa-chevron-down"}` })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: `relative`, children: /* @__PURE__ */ jsx("div", { className: `duration-300 delay-75 transition-all origin-top ease-in-out overflow-hidden relative ${expand ? "h-full scale-y-100" : "h-0 scale-y-0"}`, children }) })
  ] }) });
};
function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const currentRoute = route().current();
  const isTransaksiRoute = currentRoute ? currentRoute.includes("transaksi") : false;
  const isInformasiRoute = currentRoute ? currentRoute.includes("informasi") : false;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "container-snap md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6", children: /* @__PURE__ */ jsxs("div", { className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
        type: "button",
        onClick: () => setCollapseShow("bg-white m-2 py-3 px-6"),
        children: /* @__PURE__ */ jsx("i", { className: "fas fa-bars" })
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
        href: "",
        children: "UD CAP BATERAY"
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: "md:hidden items-center flex flex-wrap list-none", children: [
      /* @__PURE__ */ jsx("li", { className: "inline-block relative", children: /* @__PURE__ */ jsx(NotificationDropdown, {}) }),
      /* @__PURE__ */ jsx("li", { className: "inline-block relative", children: /* @__PURE__ */ jsx(UserDropdown, {}) })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow,
        children: [
          /* @__PURE__ */ jsx("div", { className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6/12", children: /* @__PURE__ */ jsx(
              Link,
              {
                className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                href: "/",
                children: "PPAT APP"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "w-6/12 flex justify-end", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                onClick: () => setCollapseShow("hidden"),
                children: /* @__PURE__ */ jsx("i", { className: "fas fa-times" })
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx("form", { className: "mt-6 mb-4 md:hidden", children: /* @__PURE__ */ jsx("div", { className: "mb-3 pt-0", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search",
              className: "border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            }
          ) }) }),
          /* @__PURE__ */ jsx("hr", { className: "my-4 md:min-w-full" }),
          /* @__PURE__ */ jsx("h6", { className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline", children: "MENU ADMIN" }),
          /* @__PURE__ */ jsxs("ul", { className: "md:flex-col md:min-w-full flex flex-col list-none", children: [
            /* @__PURE__ */ jsx("li", { className: "items-center px-2", children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "text-xs uppercase py-3 font-bold block " + (currentRoute === "admin.index" ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                href: route("admin.index"),
                children: [
                  /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "fas fa-tv mr-2 text-sm" + (window.location.href.indexOf(
                        "/admin"
                      ) !== -1 ? "opacity-75" : "text-blueGray-300")
                    }
                  ),
                  " ",
                  "Dashboard"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs(
              MenuItem,
              {
                expanded: currentRoute ? currentRoute.includes("admin") && isTransaksiRoute == false && isInformasiRoute == false : false,
                label: "Admin",
                children: [
                  /* @__PURE__ */ jsx("li", { className: "items-center px-2", children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      className: "text-xs uppercase py-3 font-bold block " + (currentRoute === "admin.users.index" ? " text-lightBlue-500 hover:text-lightBlue-600 " : " text-blueGray-700 hover:text-blueGray-500 "),
                      href: route("admin.users.index"),
                      children: [
                        /* @__PURE__ */ jsx(
                          "i",
                          {
                            className: "fas fa-tv mr-2 text-sm " + (currentRoute === "admin.users.index" ? "opacity-75" : "text-blueGray-300")
                          }
                        ),
                        " ",
                        "Users"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { className: "items-center px-2", children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      className: "text-xs uppercase py-3 font-bold block " + (currentRoute === "admin.permissions.index" ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                      href: route("admin.permissions.index"),
                      children: [
                        /* @__PURE__ */ jsx(
                          "i",
                          {
                            className: "fas fa-tv mr-2 text-sm " + (currentRoute === "admin.permissions.index" ? "opacity-75" : "text-blueGray-300")
                          }
                        ),
                        " ",
                        "Permissions"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { className: "items-center px-2", children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      className: "text-xs uppercase py-3 font-bold block " + (currentRoute === "admin.roles.index" ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                      href: route("admin.roles.index"),
                      children: [
                        /* @__PURE__ */ jsx(
                          "i",
                          {
                            className: "fas fa-tv mr-2 text-sm " + (currentRoute === "admin.roles.index" ? "opacity-75" : "text-blueGray-300")
                          }
                        ),
                        " ",
                        "Roles"
                      ]
                    }
                  ) })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) }) });
}
const AdminLayout = ({
  children
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative md:ml-64 bg-blueGray-100", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(HeaderBlank, {}),
      /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-10 mx-auto w-full -m-40 relative h-full", children: [
        /* @__PURE__ */ jsx(ToastMessages, {}),
        children
      ] })
    ] })
  ] });
};
const AdminLayout$1 = AdminLayout;
export {
  AdminLayout$1 as A
};
