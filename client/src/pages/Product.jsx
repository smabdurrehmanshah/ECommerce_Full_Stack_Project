import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Circle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import ReviewComponent from "../components/custom/ReviewComponent";
import StarsGenerator from "@/constants/StarsGenerator";

function Product() {
  const imagesArray = [
    {
      url: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
      id: 1,
    },
    {
      url: "https://images.pexels.com/photos/265631/pexels-photo-265631.jpeg",
      id: 2,
    },
    {
      url: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg",
      id: 3,
    },
    {
      url: "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg",
      id: 4,
    },
  ];

  const [productQuantity, setProductQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [purchaseProduct, setPurchaseProduct] = useState(false);
  const [address, setAddress] = useState("");

  const productStock = 5;
  return (
    <>
      <div>
        <main className="w-[90vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          {/* LEFT SIDE */}
          <div className="grid sm:w-[50%] gap-3">
            <img
              src={imagesArray[0].url}
              alt=""
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />

            <div className="grid grid-cols-4 gap-3">
              {imagesArray.map(({ url, id }) => (
                <img
                  src={url}
                  key={id}
                  className="h-[6rem] w-full object-cover object-center rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-300 border dark:border-none"
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:w-[50%] lg:w-[30%]">
            <div className="pb-5">
              <h2 className="text-2xl font-extrabold">My First Keyboard</h2>
              <p className="text-sm my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis, aspernatur ipsum voluptates dolores explicabo sit
                possimus deleniti voluptatem expedita praesentium?
              </p>
              <div className="flex items-center">
                <StarsGenerator rating={4} size={15} />
                <span className="ml-1">(2)</span>
              </div>
            </div>

            <div className="py-5 border-t border-b">
              <h3 className="font-bold text-xl">Rs.560 or Rs.34/month</h3>
              <p className="text-sm">
                Suggested payments with 6 months special financing
              </p>
            </div>

            <div className="py-5 border-b">
              <h3 className="font-bold text-lg">Choose Color</h3>
              <div className="flex items-center my-2">
                <Circle
                  fill="#f2f0ea"
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                  cursor={"pointer"}
                />
                <Circle
                  fill="#edcf5d"
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                  cursor={"pointer"}
                />
              </div>
            </div>

            <div className="py-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-5 bg-gray-100 rounded-full px-3 py-2 w-fit">
                  <Minus
                    stroke="#a4a4a4"
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                  />
                  <span className="text-slate-950">{productQuantity}</span>
                  <Plus
                    stroke="#a4a4a4"
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((prev) =>
                        prev < productStock ? prev + 1 : prev
                      )
                    }
                  />
                </div>

                {productStock - productQuantity > 0 && (
                  <div className="grid text-sm font-semibold text-gray-600">
                    <span>
                      Only{" "}
                      <span className="text-[#edcf5d]">
                        {productStock - productQuantity} items{" "}
                      </span>
                      left!
                    </span>
                    <span>Don't miss it!</span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-3 my-5">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter Your Pincode Here..."
                  onChange={(e) => setPincode(e.target.value)}
                />
                <Button className="cursor-pointer">Check Availability</Button>
              </div>
              <p className="text-sm px-2">{availabilityMessage}</p>

              <div className="flex gap-3">
                <Button
                  onClick={() => setPurchaseProduct(true)}
                  className="cursor-pointer"
                >
                  Buy Now
                </Button>
                <Button variant="outline" className="cursor-pointer">
                  Add to Cart
                </Button>
              </div>

              {purchaseProduct && (
                <div className="my-2 space-y-2">
                  <Input placeholder="Enter Your Address Here..." />
                  <Button className="cursor-pointer">Confirm Order</Button>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* REVIEW SECTION */}

        <ReviewComponent />
      </div>
    </>
  );
}

export default Product;
