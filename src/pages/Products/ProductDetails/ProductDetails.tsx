import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// react icons
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TbBrandPinterest } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
// mui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import MainLayout from "../../../layout/MainLayout";
import "./ProductDetails.scss";
import { Comments, SwiperProducts } from "../../../components";

const ProductDetails: React.FC = () => {
  const [value, setValue] = useState<string>("1");
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef<any>();
  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <MainLayout>
      <div className="product-details">
        <div className="container">
          <div className="product-content">
            <h2 className="title">Adquiera Mas</h2>
            <ul className="navigation">
              <li className="list">
                <Link className="link" to="/">
                  Home
                </Link>
                <IoIosArrowForward className="icon" />
              </li>
              <li className="active">
                <span>Adquiera Mas</span>
              </li>
            </ul>
          </div>
          {/*--------- Product-info------ */}
          <section className="product-info">
            <div className="images-swiper" style={{ width: "50vw" }}>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                onSwiper={(swiper) => {
                  if (swiper1Ref.current !== null) {
                    swiper1Ref.current = swiper;
                  }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-details"
              >
                <SwiperSlide className="slide-item">
                  <figure>
                    <img src="/src/assets/images/1.webp" alt="swiper" />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <figure>
                    <img src="/src/assets/images/2.webp" alt="swiper" />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <figure>
                    <img
                      src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                      alt="swiper"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <figure>
                    <img src="/src/assets/images/4.webp" alt="swiper" />
                  </figure>
                </SwiperSlide>
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-images"
              >
                <SwiperSlide className="slide-image">
                  <img src="/src/assets/images/1.webp" alt="swiper" />
                </SwiperSlide>
                <SwiperSlide className="slide-image">
                  <img src="/src/assets/images/2.webp" alt="swiper" />
                </SwiperSlide>
                <SwiperSlide className="slide-image">
                  <img
                    src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                    alt="swiper"
                  />
                </SwiperSlide>
                <SwiperSlide className="slide-image">
                  <img src="/src/assets/images/4.webp" alt="swiper" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="product-details-info">
              <div className="info-content">
                <h4>Adquiera Mas</h4>
                <span>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </span>
                <div className="prices">
                  <div className="old-price">$ 180.00</div>
                  <div className="new-price">$ 150.00</div>
                </div>
                <div className="in-stock">
                  <IoMdCheckboxOutline className="icon-checkbox" />
                  <span>In Stock</span>
                </div>
                <div className="sku">
                  <span className="title">SKU#:</span>
                  <span className="variant-sku">102511</span>
                </div>
                <p className="description">
                  valle, la vivienda en la vigilancia específica, el reemplazo o
                  la consolidación de la cama, un hombre obsesionado con la
                  reducción de opciones de apuestas ilegales. Wow, mercado muy
                  atractivo, de mis visitantes. Tiempo de desarrollo reciente
                  para odiar, un bar beef tiempo.
                </p>
                <form className="cart-input">
                  <label>Qty:</label>
                  <input type="text" value="1" name="quantity" />
                </form>
                <div className="add-to-cart-favorites">
                  <div className="add-to-cart">
                    <HiOutlineShoppingBag className="add-icon" />
                    <span className="add-btn"> Add to cart</span>
                  </div>
                  <div className="favorites">
                    <GrFavorite className="favorite-icon" />
                  </div>
                </div>
                <div className="social-share">
                  <FaFacebookF className="icon" />
                  <FaTwitter className="icon" />
                  <TiSocialGooglePlus className="icon" />
                  <TbBrandPinterest className="icon" />
                </div>
              </div>
            </div>
          </section>
          {/* ------------Tab------------ */}
          <section className="tab">
            <Box sx={{ width: "87%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Description" value="1" />
                    <Tab label="More information" value="2" />
                    <Tab label="Comments" value="3" />
                    <Tab label="Reviews" value="4" />
                    <Tab label="shipping policy" value="5" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="description">
                    <p>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Mañana, a partir de los
                      botones de opción, sino un poco de dolor. Escribir en el
                      freno ahora. No hay comentarios eran, en el mejor, pero el
                      financiamiento de la atención de la salud o la risa.
                      Bienvenido a aprender más acerca de la cultura popular, y
                      el tiempo, no, ni a crecer fuerte. Miramos a los miembros
                      de televisión por cable de televisión.
                    </p>
                    <p>
                      Por otra parte, denunciamos con indignación a los hombres
                      que son engañados y desmoralizados por los encantos del
                      placer del momento, tan cegados por el deseo, que no
                      pueden prever el dolor y la molestia que se va a producir,
                      y la misma culpa es de los que faltan a su deber por
                      debilidad de la voluntad, que es lo mismo que decir que
                      fallan por la fatiga y el dolor. Estos casos son muy
                      simples y fácil de distinguir. En una hora libre, sin las
                      trabas de nuestro poder de elección y cuando nada impida
                      que seamos capaces de hacer lo que más nos gusta, todo
                      placer es de agradecer y cada dolor se puede evitar. Pero
                      en ciertas circunstancias y debido a las exigencias del
                      deber o de las obligaciones de la empresa, estos placeres
                      tienen que ser repudiados y sus molestias aceptadas .El
                      hombre sabio, por lo tanto, siempre tiene en estos asuntos
                      una elección: rechaza placeres para asegurar otros
                      placeres mayores, o de lo contrario evita los dolores para
                      evitar dolores peores.
                    </p>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="product-information">
                    <br />
                    name: Scanpan Classic Covered
                    <br />
                    color: orange , pink , yellow <br />
                    size: xl, l , m , sl
                    <br />
                    length: 102cm, 110cm , 115cm <br />
                    Brand: Nike, Religion, Diesel, Monki
                    <br />
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <Comments />
                </TabPanel>
                <TabPanel value="4">
                  <div className="review">
                    <div className="review-container">
                      <h2 className="header-title">Customer Reviews</h2>
                      <span className="caption">No reviews yet</span>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="5">
                  <div className="shipping">
                    <h2>Shipping policy for our store</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate
                    </p>
                    <ul>
                      <li>1-2 business days (Typically by end of day)</li>
                      <li>30 days money back guaranty</li>
                      <li>24/7 live support</li>
                      <li>odio dignissim qui blandit praesent</li>
                      <li>luptatum zzril delenit augue duis dolore</li>
                      <li>te feugait nulla facilisi.</li>
                    </ul>
                    <p>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum. Typi non habent claritatem insitam; est usus
                      legentis in iis qui facit eorum
                    </p>
                    <p>
                      claritatem. Investigationes demonstraverunt lectores
                      legere me lius quod ii legunt saepius. Claritas est etiam
                      processus dynamicus, qui sequitur mutationem consuetudium
                      lectorum. Mirum est notare quam littera gothica, quam nunc
                      putamus parum claram, anteposuerit litterarum formas
                      humanitatis per
                    </p>
                    <p>
                      seacula quarta decima et quinta decima. Eodem modo typi,
                      qui nunc nobis videntur parum clari, fiant sollemnes in
                      futurum.
                    </p>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </section>

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
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
