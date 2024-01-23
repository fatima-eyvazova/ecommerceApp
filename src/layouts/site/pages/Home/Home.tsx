import { useSelector } from "react-redux";
import { makeRequest } from "../../../../services/api";
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
import { RootState } from "../../../../redux/types";
import { useEffect, useState } from "react";
import { GetBasketItem } from "../Auth/Login/Login";

const Home = () => {
  const basketProducts = useSelector(
    (state: RootState) => state.basket.basketProducts
  );
  const { token, user } = useSelector((state: RootState) => state.auth);
  const [basketDb, setBasketDb] = useState<GetBasketItem[]>([]);

  const postNewBasket = async (token: string) => {
    try {
      const list = basketProducts?.map((pr) => ({
        productId: pr?._id,
        productCount: pr?.quantity,
      }));
      const basketPayload = { basket: list };
      const res = await makeRequest(
        "/site/basket",
        "post",
        basketPayload,
        token
      );
      return res;
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  const getBasketFromDb = async (token: string) => {
    try {
      const resBasket = await makeRequest("/site/basket", "get", null, token);
      return resBasket;
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  useEffect(() => {
    const userRole = user?.role;
    if (userRole && userRole === "client") {
      getBasketFromDb(token).then(
        (data: { data: { data?: GetBasketItem[] } }) => {
          const basketList = data?.data?.data;

          if (!basketList || !basketList?.length) {
            console.log({ basketList });

            postNewBasket(token);
          } else if (basketList.length) {
            setBasketDb(basketList);
          }
        }
      );
    }
  }, [token]);

  return (
    <MainLayout>
      <div>
        <BannerSwiper />
        <BannerCard />
        <ProductsTab basketDb={basketDb} />
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
