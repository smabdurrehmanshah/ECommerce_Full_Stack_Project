import StarsGenerator from "@/constants/StarsGenerator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ReviewComponent() {
  return (
    <div className="my-10 w-[90vw] lg:w-[70vw] mx-auto ">
      <h2 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center">
        Reviews
      </h2>

      {/* WRITE REVIEW SECTION */}
      <div>
        <h3 className="font-semibold text-lg text-gray-700 dark:text-[#f2f0ea] mb-4">
          Write a review
        </h3>

        <Textarea placeholder="Your Review" className="mb-4" />
        <div className="flex gap-5">
          <Input
            type="number"
            max="5"
            min="1"
            className="mb-4 w-[10rem]"
            placeholder="Rating (1-5)"
          />
          <Button className="cursor-pointer">Submit Review</Button>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="space-y-6 my-10">
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg dark:bg-zinc-900 dark:border-none">
          {/* Reviewer info */}
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt=""
              className="h-10 w-10 rounded-full mr-4 border border-gray-300"
            />
            <div>
              <h4>Abdur Rehman Shah</h4>
              <div className="flex mt-1">
                <StarsGenerator rating={4} size={15} />
              </div>
            </div>
          </div>

          {/* Review Content */}
          <p className="text-gray-700 text-sm dark:text-[#a4a4a4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            consequatur.
          </p>

          {/* Reply Section */}
          <div className="mt-5 bg-gray-50 p-4 rounded-lg border dark:bg-zinc-800">
            <h5 className="font-bold text-sm text-gray-700 mb-3 dark:text-[#edcf5d]">
              Replies (5)
            </h5>
            <div className="space-y-4">
              <div className="flex items-start border-b pb-3 last:border-none">
                <img
                  src="https://via.placeholder.com/40"
                  alt=""
                  className="h-8 w-8 rounded-full mr-2 border border-gray-300"
                />

                <div>
                  <h5 className="font-medium text-gray-800 text-sm dark:text-[#f2f0ea] capitalize">
                    Coder29
                  </h5>
                  <p className="text-gray-700 text-sm dark:text-[#a4a4a4]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reply form */}
          <div className="mt-4">
            <Textarea placeholder="Write your reply..." />
            <Button size="sm" className="mt-4 cursor-pointer">
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
