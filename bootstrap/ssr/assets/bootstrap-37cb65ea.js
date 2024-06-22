import axios from "axios";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var lvToken = document.querySelector('meta[name="csrf-token"]');
var laravelToken = lvToken ? lvToken.getAttribute("content") : "";
window.backend = axios.create({
  timeout: 1e3,
  headers: { "X-CSRF-TOKEN": laravelToken }
});
const xmeta = document.querySelector('meta[name="refresh-token"]');
const refreshToken = xmeta ? xmeta.getAttribute("content") : "";
const myapp = { backend: window.backend, refreshToken };
export {
  myapp as m
};
