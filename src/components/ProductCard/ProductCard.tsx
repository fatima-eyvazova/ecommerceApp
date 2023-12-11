import "./ProductCard.scss";

interface Props {
  name: string;
  price: number;
}

const ProductCard = ({ name, price }: Props) => {
  return (
    <div className="flex flex-column">
      <span className="green-span">HELLOOOOOO</span>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
