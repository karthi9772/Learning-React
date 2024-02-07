import useCount from "./useCount";
const Count = () => {
  const [Num, AddOne, MinusOne, reset] = useCount(10);
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={AddOne}>+</button>
      <button onClick={MinusOne}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Count;
