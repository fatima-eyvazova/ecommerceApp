import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../redux/slices/counterSlice";
import { RootState } from "../redux/types";
import { ProductCard } from "../components";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <ProductCard name="Shirt" price={200} />
    </div>
  );
};

export default Home;
