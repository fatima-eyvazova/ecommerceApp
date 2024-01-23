import { FaRegEye, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import "./DiscountProduct.scss";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";
import { useState } from "react";
import { ProductModal } from "../..";

type Props = {
  product: GetProductItem;
};

const DiscountProduct = ({ product }: Props) => {
  const [open, setOpen] = useState(false);
  const [colorClick, setColorClick] = useState<number | undefined>(0);
  const [colorOver, setColorOver] = useState<number | undefined>(0);
  const { _id: id, title, productPrice, salePrice, images } = product;
  const starList = [1, 2, 3, 4, 5];
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  function viewedClick(value: number): void {
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
  return (
    <div className="deal-product">
      <div className="item-deal">
        <div className="deal-img-container">
          <div className="deal-action">
            <span className="icon">
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
            </span>

            <span className="icon">
              <HiOutlineShoppingBag />
            </span>
          </div>
          <div className="deal-img">
            {images && images.length > 0 && (
              <img src={images[0].url} alt={"product"} />
            )}
          </div>
        </div>
        <div className="deal-product-content">
          <h4>{product?.title}</h4>
          <div className="stars">
            {starList.map((star) => (
              <FaRegStar
                className="icon-star"
                key={star}
                onMouseOver={() => viewedOver(star + 1)}
                onMouseLeave={viewedLive}
                onClick={() => viewedClick(star + 1)}
                color={
                  (colorClick || colorOver) > star ? colors.orange : colors.grey
                }
              />
            ))}
          </div>
          <p>{product?.description}</p>
          <div className="product-price">
            <span className="money-new">{product?.salePrice} $</span>
            <span className="money-old">{product?.productPrice} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
