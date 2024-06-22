import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "./bootstrap-37cb65ea.js";
import "firebase/messaging";
import { A as AdminLayout } from "./AdminLayout-f25634a4.js";
import "axios";
import "./NotificationDropdown-c6384417.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "@inertiajs/react";
import "react-hot-toast";
const app = initializeApp({
  apiKey: "AIzaSyC3BIzLf83xWQBhOdjp9ZN_Ztp9dT-OmVc",
  authDomain: "fblaravel-4a310.firebaseapp.com",
  databaseURL: "https://fblaravel-4a310-default-rtdb.firebaseio.com",
  projectId: "fblaravel-4a310",
  storageBucket: "fblaravel-4a310.appspot.com",
  messagingSenderId: "1066486198695",
  appId: "1:1066486198695:web:fc9c6bf2b760dc9721c682"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
getAuth(app);
getFirestore(app);
const AuthContext = createContext(null);
function useAuth() {
  return useContext(AuthContext);
}
const Test = ({ auth }) => {
  const { sendMessage } = useAuth();
  return /* @__PURE__ */ jsx(
    AdminLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-4/12 h-auto ", children: /* @__PURE__ */ jsx("div", { className: "relative w-full xl:w-8/12 mb-12 xl:mb-0", children: /* @__PURE__ */ jsx("button", { onClick: (e) => {
        sendMessage({ title: "judul", body: "hallo semua" });
      }, children: "send message" }) }) })
    }
  );
};
export {
  Test as default
};
