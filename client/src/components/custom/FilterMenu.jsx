import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function FilterMenu() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");

  const categoryData = {
    title: "Category",
    items: ["keyboard", "mouse", "headset"],
  };

  const priceData = {
    title: "Price",
    items: [1000, 2000, 3000, 4000],
  };

  return (
    <div className="w-[90vw] mx-auto my-10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
      {/* DROPDOWN FILTERS */}
      <div className="flex gap-3 w-full sm:w-[30%]">
        {/* For Category */}
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={categoryData.title} />
          </SelectTrigger>
          <SelectContent>
            {categoryData.items.map((item) => (
              <SelectItem key={item} className="capitalize" value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* For Price */}
        <Select onValueChange={(value) => setPrice(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={priceData.title} />
          </SelectTrigger>
          <SelectContent>
            {priceData.items.map((item) => (
              <SelectItem key={item} className="capitalize" value={item}>
                Less than {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* SEARCH INPUT */}
      <div className="sm:w-[60%] w-full">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Here..."
        />
      </div>
    </div>
  );
}

export default FilterMenu;
