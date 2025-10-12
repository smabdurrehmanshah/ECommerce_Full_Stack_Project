import { Edit, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";

function AllProducts() {
  return (
    <div className="mx-auto px-4 sm:px-8 -z-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="mb-8">
        <form className="flex gap-4 sm:w-[70vw]">
          <div className="flex-1 space-y-1">
            <Label htmlFor="search" className="text-gray-400">
              Search Products
            </Label>
            <div className="relative">
              <Input
                id="search"
                placeholder="Search by name or description"
                className="pl-10"
              />
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="category" className="text-gray-400">
              Category
            </Label>
            <Select id="category">
              <SelectTrigger>
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="headset">Headset</SelectItem>
                <SelectItem value="keyboard">Keyboard</SelectItem>
                <SelectItem value="mouse">Mouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 sm:mx-0">
        <Card className="flex flex-col p-0">
          <div>
            <img
              src="https://images.pexels.com/photos/265631/pexels-photo-265631.jpeg"
              alt=""
              className="rounded-t-lg"
            />
          </div>

          <CardContent className="px-3 pt-0 flex-grow">
            <h3 className="text-lg font-semibold mb-1">Ant Esports Keyboard</h3>
            <p className="text-sm text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, laborum!
            </p>
            <p className="text-lg font-bold">Rs.568.00</p>
          </CardContent>

          <CardFooter className="px-3 pt-0 flex justify-between mb-2">
            <Button variant="outline" size={"sm"} className="cursor-pointer">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>

            <Button size={"sm"} className="cursor-pointer">
              Blacklist Product
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={false}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Products</DialogTitle>
          </DialogHeader>

          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input type="number" id="price" name="price" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" id="category">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="headset">Headset</SelectItem>
                    <SelectItem value="mouse">Mouse</SelectItem>
                    <SelectItem value="keyboard">Keyboard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter type="submit" className="mt-2">
              <Button className="cursor-pointer">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AllProducts;
