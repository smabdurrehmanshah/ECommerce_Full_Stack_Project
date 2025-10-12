function CheckoutProduct(
  name = "Custom Designed Keyboard",
  price = 299,
  quantity = 2,
  image = {
    url: "https://images.pexels.com/photos/265631/pexels-photo-265631.jpeg",
  },
  color = "#edcf5d"
) {
  return (
    <div className="flex flex-row p-3 rounded-lg bg-gray-100 dark:bg-zinc-900 justify-start items-center gap-3">
      <img src={image.url} alt={name} className="w-20 sm:w-24 rounded-lg" />
      <div className="grid sm:gap-1">
        <h2 className="font-semibold text-sm sm:text-base">
          Custom Designed Keyboard
        </h2>
        <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-[#a4a4a4] text-xs sm:text-sm my-0">
          <span className="font-semibold">
            Color: <span style={{ backgroundColor: color }}>{color}</span>
          </span>
          <span className="hidden sm:block">|</span>
          <span className="font-semibold">
            Qty: <span className="font-medium text-[#edcf5d]">{quantity}</span>
          </span>
          <span className="hidden sm:block">|</span>
          <span className="font-semibold">
            Price:{" "}
            <span className="font-medium text-[#edcf5d]">Rs.{price}</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
