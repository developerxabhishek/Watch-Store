import Admin from "../src/Admin/Admin.jsx";
import User from "./user/User.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const userDetails = useSelector((state) => state.userDetailsReducer.value);
const check=Object.keys(userDetails).length;
  const handle = () => {
    if (userDetails.isAdmin === true) {
      return <Admin />;
    } else {
      return <User />;
    }
  };

  return <>{handle()}</>;
};
export default App;
