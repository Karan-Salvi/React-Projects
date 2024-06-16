import { useSelector } from "react-redux";

let DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Counter current Value :{counterVal}</p>
    </>
  );
};
export default DisplayCounter;
