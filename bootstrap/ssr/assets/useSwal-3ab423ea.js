import Swal from "sweetalert2";
const confirm = ({ title, text, icon }) => Swal.fire({
  title: title ? title : "Are you sure?",
  text: text ? text : "You won't be able to revert this!",
  icon: icon ? icon : "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes"
});
const useSwal = { confirm };
export {
  useSwal as u
};
