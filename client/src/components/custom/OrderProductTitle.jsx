function OrderProductTitle() {
  return (
    <div className="flex justify-between items-start sm:items-center p-3 mt-2 rounded-lg bg-gray-100 dark:bg-zinc-800">
      <div className="flex items-center gap-2">
        <img
          src="https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg"
          alt=""
          className="w-20 sm:w24 rounded-lg"
        />

        <div className="grid sm:gap-1">
          <h1 className="font-semibold text-sm sm:text-base">
            Cosmic byte keyboard
          </h1>
          <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-[#a4a4a4] text-xs sm:text-sm my-0">
            <span className="font-semibold">
              Color: <span style={{ backgroundColor: "#fff" }}>#ffff</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Qty: <span className="font-medium text-[#edcf5d]">2</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Price: <span className="font-medium text-[#edcf5d]">Rs.299</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductTitle;
