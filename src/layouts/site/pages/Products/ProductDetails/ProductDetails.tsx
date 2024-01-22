import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// react icons
import { IoIosArrowForward } from "react-icons/io";

import "./ProductDetails.scss";
import { SwiperProducts, MainLayout, ProductInfo } from "../../../components";
import TabItems from "../../../components/misc/Tabs/TabItems";
import { useEffect, useState } from "react";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";
import { useSelector } from "react-redux";
import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<GetProductItem | null>(null);
  const { token } = useSelector((state: RootState) => state.auth);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest(
          `/site/products/${id}`,
          "get",
          null,
          token
        );

        const productData = res?.data as { data: GetProductItem };
        const product = productData?.data;
        if (product) {
          setProduct(product);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id, token]);

  return (
    <MainLayout>
      <div className="product-details">
        {product && (
          <div className="container">
            <div className="product-content">
              <h2 className="title">{product?.title}</h2>
              <ul className="navigation">
                <li className="list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <IoIosArrowForward className="icon" />
                </li>
                <li className="active">
                  <span>{product?.title}</span>
                </li>
              </ul>
            </div>
            {/*--------- Product-info------ */}
            <ProductInfo product={product} />
            {/* ------------Tab------------ */}
            <TabItems />

            {/* ----------Related Products-------- */}
            <section className="related-products">
              <div className="items">
                <div className="related-title">
                  <h2>FEATURED FASHION DRESS</h2>
                </div>
                <div className="related-products-container">
                  <SwiperProducts />
                </div>
              </div>
            </section>

            <section className="upsell-products">
              <div className="upsell-items">
                <div className="upsell-title">
                  <h2>Upsell Products</h2>
                </div>
                <div className="upsell-products-container">
                  <SwiperProducts />
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
