import { jsx, jsxs } from "react/jsx-runtime";
function EditInactiveIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ...props,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4 13V16H7L16 7L13 4L4 13Z",
          fill: "#EDE9FE",
          stroke: "#A78BFA",
          strokeWidth: "2"
        }
      )
    }
  );
}
function EditActiveIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ...props,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4 13V16H7L16 7L13 4L4 13Z",
          fill: "#8B5CF6",
          stroke: "#C4B5FD",
          strokeWidth: "2"
        }
      )
    }
  );
}
function DeleteInactiveIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...props,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "5",
            y: "6",
            width: "10",
            height: "10",
            fill: "#EDE9FE",
            stroke: "#A78BFA",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M3 6H17", stroke: "#A78BFA", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M8 6V4H12V6", stroke: "#A78BFA", strokeWidth: "2" })
      ]
    }
  );
}
function DeleteActiveIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...props,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "5",
            y: "6",
            width: "10",
            height: "10",
            fill: "#8B5CF6",
            stroke: "#C4B5FD",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M3 6H17", stroke: "#C4B5FD", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M8 6V4H12V6", stroke: "#C4B5FD", strokeWidth: "2" })
      ]
    }
  );
}
export {
  DeleteActiveIcon as D,
  EditActiveIcon as E,
  EditInactiveIcon as a,
  DeleteInactiveIcon as b
};
