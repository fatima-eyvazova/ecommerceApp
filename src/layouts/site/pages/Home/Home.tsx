import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../../../../redux/slices/counterSlice";
import { RootState } from "../../../../redux/types";
import {
  Innovations,
  BannerSwiper,
  BannerCard,
  WeekDeals,
  Services,
  Testimonials,
  Featured,
  Blogs,
  ProductsTab,
  MainLayout,
} from "../../components";
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
        <ProductsTab />
        <Innovations />
        <WeekDeals />
        <Services />
        <Testimonials />
        <Featured />
        <Blogs />
      </div>
    </MainLayout>
  );
};

export default Home;
