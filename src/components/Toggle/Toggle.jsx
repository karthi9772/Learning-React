import useToggle from "./useToggle";

const Toggle = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      <h1>{isVisible && "Hidden text ssss"}</h1>
    </div>
  );
};

export default Toggle;
