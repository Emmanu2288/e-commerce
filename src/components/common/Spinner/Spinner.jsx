import PuffLoader from "react-spinners/PuffLoader";
import "./Spinner.css";

const Spinner = () => (
  <div className="spinner-container">
    <PuffLoader color="#034988" size={120} />
  </div>
);

export default Spinner;
