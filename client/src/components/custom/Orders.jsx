import { Card } from "../ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import OrderProductTitle from "./OrderProductTitle";

function Orders() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 ml-3">Orders</h1>
      <div className="flex flex-col gap-5 mx-auto">
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="grid space-y-1 gap-2">
            <Card className="py-0 px-3 pb-2 shadow-md">
              <div className="grid sm:grid-cols-3 sm:gap-2">
                <OrderProductTitle />
                <OrderProductTitle />
                <OrderProductTitle />
              </div>
              <hr />
              <div>
                <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                  <span className="font-bold">Total:</span>
                  <span className="text-sm text-[#a4a4a4]">Rs.500</span>
                </p>

                <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                  <span className="font-bold">Address:</span>
                  <span className="text-sm text-[#a4a4a4]">
                    Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem ipsum
                    dolor sit amet.
                  </span>
                </p>

                <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                  <span className="font-bold">Name:</span>
                  <span className="text-sm text-[#a4a4a4]">
                    Abdur Rehman Shah
                  </span>
                </p>

                <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                  <span className="font-bold">Email:</span>
                  <span className="text-sm text-[#a4a4a4]">abc@xyz.com</span>
                </p>

                <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                  <span className="font-bold">Payment Id:</span>
                  <span className="text-sm text-[#a4a4a4]">
                    fdr4rfdsf342r4wrdf
                  </span>
                </p>
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pending" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="packed">Packed</SelectItem>
                  <SelectItem value="in transit">In transit</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          </div>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default Orders;
