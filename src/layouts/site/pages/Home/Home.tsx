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
  return (
    <MainLayout>
      <div>
        <BannerSwiper />
        <BannerCard />
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
