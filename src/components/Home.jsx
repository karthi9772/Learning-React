import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { userName } = useContext(AppContext);
  return <div>this is the home page of {userName}</div>;
};

export default Home;
