// react-icons
import { FaRegStar, FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
// mui
// import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addToBasket } from "../../../../../redux/slices/site/basketSlice";
import { handleWishList as handleWishListAction } from "../../../../../redux/slices/site/wishListSlice";
import "./ProductCard.scss";
import { RootState } from "../../../../../redux/types";
import { ProductModal } from "../..";
import { Link, useNavigate } from "react-router-dom";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";
import { GetBasketItem } from "../../../pages/Auth/Login/Login";
import { makeRequest } from "../../../../../services/api";

type Props = {
  product: GetProductItem;
  basketItem: GetBasketItem | null;
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ProductCard = ({ product, basketItem }: Props) => {
  const { _id: id, title, productPrice, salePrice, images } = product;
  const [open, setOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { token, user } = useSelector((state: RootState) => state.auth);

  const [colorClick, setColorClick] = useState<number | undefined>(0);
  const [colorOver, setColorOver] = useState<number | undefined>(0);

  const wishListProducts = useSelector(
    (state: RootState) => state.wishList.wishListProducts
  );
  const isFoundElement = wishListProducts.some((item) => item._id === id);
  const [color, setColor] = useState<boolean>(isFoundElement);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateItemInDb = async () => {
    try {
      if (basketItem) {
        const resBasket = await makeRequest(
          `/site/basket/${basketItem?._id}`,
          "put",
          {
            productCount: basketItem?.productCount + 1,
          },
          token
        );
        return resBasket;
      }
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  const addProductToBasket = async (e: React.ChangeEvent<HTMLDivElement>) => {
    setUpdating(true);
    e.stopPropagation();
    console.log(111);

    if (token && user?.role === "client") {
      console.log(basketItem);

      await updateItemInDb();
    }
    dispatch(addToBasket({ ...product, quantity: 1 }));
    setUpdating(false);
  };

  const handleWishList = () => {
    dispatch(handleWishListAction(product));
    setColor((prev) => !prev);
  };

  const starList = [1, 2, 3, 4, 5];

  function viewedClick(
    value: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    e.stopPropagation();
    setColorClick(value);
  }
  function viewedOver(value: number): void {
    setColorOver(value);
  }
  function viewedLive(): void {
    setColorOver(undefined);
  }

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className="product-card" key={id} onClick={handleClick}>
        <div className="container">
          <div className="product-image">
            {images && images.length > 0 && (
              <img src={images[0].url} alt={"product"} />
            )}
          </div>
          <div className="product-action">
            <Button
              className="btn"
              variant="outlined"
              color="neutral"
              onClick={handleOpen}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <FaRegEye className="eye" />
            </Button>
            <Modal
              variant="outlined"
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={handleClose}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 1300,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                  border: "1px solid white",
                  backgroundColor: "white",
                }}
              >
                <ModalClose
                  variant="plain"
                  sx={{ m: 1 }}
                  onClose={handleClose}
                />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  fontWeight="lg"
                  mb={1}
                >
                  <ProductModal key={product._id} product={product} />
                </Typography>
                <Typography
                  id="modal-desc"
                  textColor="text.tertiary"
                ></Typography>
              </Sheet>
            </Modal>
          </div>
          <div className="product-heart" onClick={handleWishList}>
            {color ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart style={{ color: "black" }} />
            )}
          </div>
          <div className="product-item-content">
            <h4>{title}</h4>
            <div className="product-price-cart">
              <div className="rating-price">
                <div className="product-rating">
                  {starList.map((star) => (
                    <FaRegStar
                      className="icon-star"
                      key={star}
                      onMouseOver={() => viewedOver(star + 1)}
                      onMouseLeave={viewedLive}
                      onClick={() => viewedClick(star + 1)}
                      color={
                        (colorClick || colorOver) > star
                          ? colors.orange
                          : colors.grey
                      }
                    />
                  ))}
                </div>
                <div className="sale-product-prices">
                  <div className="product-price">$ {productPrice}</div>
                  {salePrice ? (
                    <div className="sale-price">{salePrice}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="product-cart"
                onClick={!updating && addProductToBasket}
              >
                <HiOutlineShoppingBag className="cart-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
