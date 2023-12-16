import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../../redux/slices/counterSlice";
import { RootState } from "../../redux/types";
import {
  ProductsTab,
  Innovations,
  BannerSwiper,
  BannerCard,
  WeekDeals,
  Services,
} from "../../components";
import MainLayout from "../../layout/MainLayout";
import "../Home/Home.scss";
const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <div>
        <BannerSwiper />
        <BannerCard />
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

        {/* <ProductCard name="Shirt" price={200} /> */}
        <ProductsTab />
        <Innovations />
        <WeekDeals />
        <Services />
      </div>
    </MainLayout>
  );
};

export default Home;
