import StarsGenerator from "../../constants/StarsGenerator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function ProductCard({
  name = "Product Title",
  price = 2000,
  rating = 4,
  image = {
    url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    id: "3fdsf4efds",
  },
}) {
  return (
    <div className="relative w-fit border overflow-clip rounded-2xl">
      <img
        src={image.url}
        alt={name}
        className="object-cover w-[30rem] h-[20rem]"
      />
      <div className="px-3 grid gap-2 py-2 bg-white dark:bg-zinc-900 w-full absolute bottom-0 translate-y-[3rem] hover:translate-y-0 transition-all ease-in-out duration-300 rounded-xl">
        <h2 className="text-lg">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex">
            <StarsGenerator rating={3} />
          </div>
          <span>{price}</span>
        </div>

        <Link to={`/product/${image.id}`}>
          <Button className="w-full">View Product</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
