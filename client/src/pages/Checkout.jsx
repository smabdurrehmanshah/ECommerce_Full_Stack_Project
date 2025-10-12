import CheckoutProduct from "@/components/custom/CheckoutProduct";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Checkout() {
  return (
    <>
      <div className="w-[90vw] sm:w-[60vw] mx-auto sm:my-20">
        <div className="flex flex-col sm:flex-row gap-5 mx-auto my-10">
          {/* Product Details */}
          <div className="space-y-8">
            <div className="p-4 space-y-4">
              <h2 className="text-xl font-medium">Order Summary</h2>

              <div className="space-y-1 text-3xl">
                <CheckoutProduct />
              </div>

              <hr />

              <div className="p-3 rounded-md">
                <p className="flex justify-between items-center">
                  <span className="font-semibold text-[#a4a4a4]">
                    Subtotal:
                  </span>
                  <span className="font-bold">Rs.599</span>
                </p>

                <p className="flex justify-between items-center">
                  <span className="font-semibold text-[#a4a4a4]">Tax:</span>
                  <span className="font-bold">Rs.0</span>
                </p>

                <p className="flex justify-between items-center">
                  <span className="font-semibold text-[#a4a4a4]">
                    Shipping:
                  </span>
                  <span className="font-bold">Rs.0</span>
                </p>
              </div>

              <hr />

              <p className="flex justify-between items-center px-3">
                <span className="font-bold">Total:</span>
                <span className="font-bold">Rs.599</span>
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="w-[90vw] sm:w-[20vw]">
            <Card className="p-4 space-y-2 shadow-md">
              <h2 className="text-xl font-medium">Billing Information</h2>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Abdur Rehman Shah"
                  className="w-full"
                />
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@xyz.com"
                  className="w-full"
                />
                <Label htmlFor="address">Shipping Address</Label>
                <Textarea
                  id="address"
                  rows="7"
                  placeholder="Main Str, city, state"
                  className="w-full"
                />
              </div>
              <Button className="w-full cursor-pointer">Place Order</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
