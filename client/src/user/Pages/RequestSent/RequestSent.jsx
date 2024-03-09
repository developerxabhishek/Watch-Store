import "./RequestSent.css";
import { ImCheckmark } from "react-icons/im";
const RequestSent = () => {
  return (
    <>
      <center>
        <div className="verify">
          <div className="rightlogo">
            <ImCheckmark />
          </div>
          <h1>Your Request Send Successfully!!</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
          <div className="note">
            <h2>See Who's Accept Your Request</h2>
          </div>
        </div>
      </center>
    </>
  );
};
export default RequestSent;
