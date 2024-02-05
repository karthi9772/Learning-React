import ChangeProfile from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      This is the Profile page of {userName}
      <div>
        <ChangeProfile />
      </div>
    </div>
  );
};

export default Profile;
