import { useState, useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const { SetUserName } = useContext(AppContext);
  const [newUserName, SetNewUserName] = useState("");
  return (
    <div>
      <input
        value={newUserName}
        onChange={(e) => SetNewUserName(e.target.value)}
      />
      <button
        onClick={() => {
          SetUserName(newUserName);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ChangeProfile;
