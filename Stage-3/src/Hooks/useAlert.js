import { useContext } from "react";
import AlertContext from "../UI/AlertContext/AlertContext";

const useAlert = () => useContext(AlertContext);

export default useAlert