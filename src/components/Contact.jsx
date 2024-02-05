import { useContext } from "react";
import { AppContext } from "../App";

const Contact = () => {
  const { userName } = useContext(AppContext);
  return <div>Contact the user is :{userName}</div>;
};

export default Contact;
