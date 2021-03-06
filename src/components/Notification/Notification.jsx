import T from "prop-types";
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={s.message}>{message}</p>;
};

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;
