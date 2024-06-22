import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import { I as Input } from "./Input-c50f8cbe.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import "tailwind-merge";
import "classnames";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("section", { className: "relative w-full h-full py-30 min-h-screen", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full",
        style: {
          backgroundImage: "url(/img/register_bg_2.png)"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 h-full", children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-4/12 px-4 h-screen flex justify-center flex-col", children: [
      status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
      /* @__PURE__ */ jsx("div", { className: "relative flex ite flex-col min-w-0 break-words justify-center w-full mb-6 shadow-md rounded-lg bg-blueGray-200 border-0 p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "text-blueGray-400 text-center mb-3 font-bold", children: /* @__PURE__ */ jsx("span", { children: "SIGN IN" }) }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsx(Input, { name: "email", label: "Email", errors: errors.email, value: data.email, type: "email", onChange: (e) => setData("email", e.target.value) }),
          /* @__PURE__ */ jsx(Input, { name: "password", autoComplete: "false", label: "Password", errors: errors.password, value: data.password, type: "password", onChange: (e) => setData("password", e.target.value) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsx(
            LoadingButton,
            {
              theme: "black",
              className: "w-full items-center justify-center",
              loading: processing,
              type: "submit",
              children: /* @__PURE__ */ jsx("span", { children: "Log In" })
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap relative", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1/2", children: canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            onClick: (e) => e.preventDefault(),
            className: "text-blueGray-200 hover:text-blueGray-500",
            children: /* @__PURE__ */ jsx("span", { children: "Forgot password?" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 text-right", children: /* @__PURE__ */ jsx(Link, { href: "register", className: "text-blueGray-200 hover:text-blueGray-500", children: /* @__PURE__ */ jsx("span", { children: "Register" }) }) })
      ] })
    ] }) }) })
  ] }) });
}
export {
  Login as default
};
