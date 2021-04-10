import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const Alerts = alert => {
  const message = alert.message;

  if (alert.success) {
    toast.success(message, { autoClose: 2000 });
  } else {
    toast.error(message, { autoClose: 2000 });
  }
};
