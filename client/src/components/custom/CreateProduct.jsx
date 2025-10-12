import { useRef, useState } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader2, Upload, X } from "lucide-react";
import { Textarea } from "../ui/textarea";

function CreateProduct() {
  const [currentColor, setCurrentColor] = useState("#000");
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const addColor = () => {
    if (!colors.includes(currentColor)) setColors([...colors, currentColor]);
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  const removeImage = (imageToRemoveIndex) => {
    setImages(images.filter((image, index) => index !== imageToRemoveIndex));
  };

  const handleImageUpload = () => {};

  return (
    <div className="w-full max-w-2xl -z-10">
      <CardHeader className="my-5">
        <CardTitle className="text-2xl">Add New Product</CardTitle>
        <CardDescription>
          Enters the detail for the new product you want to add to your
          e-commerce store
        </CardDescription>
      </CardHeader>

      <form>
        <div className="flex flex-col lg:flex-row lg:w-[70vw] gap-3">
          <CardContent className="w-full space-y-3">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                row={4}
                placeholder="Enter product description"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                min="0"
                placeholder="10"
                required
              />
            </div>
          </CardContent>

          <CardContent className="w-full space-y-3">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="headset">Headset</SelectItem>
                  <SelectItem value="mouse">Mouse</SelectItem>
                  <SelectItem value="keyboard">Keyboard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Colors</Label>
              <div className="flex items-center space-x-3">
                <Input
                  type="color"
                  id="color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                  className="w-12 h-12 rounded-md p-1"
                />
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={addColor}
                >
                  Add Color
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center bg-gray-100 rounded-full pl-2 pr-1 py-1"
                    >
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      ></div>

                      <span className="text-sm mr-1 dark:text-slate-900">
                        {color}
                      </span>
                      <Button
                        variant="ghost"
                        className="w-6 h-6 rounded-full p-0 cursor-pointer"
                        onClick={() => removeColor(color)}
                      >
                        <X className="w-4 h-4" />
                        <span className="sr-only">Remove Color</span>
                      </Button>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2">
                <Label htmlFor="images">Product Images</Label>
                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
                      alt="Product Image 1"
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                      <span className="sr-only">Remove Image</span>
                    </Button>
                  </div>
                  {images.length >= 0 && (
                    <Button
                      variant="outline"
                      className="w-[100px] h-[100px] cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-6 h-6" />
                      <span className="sr-only">Upload Image</span>
                    </Button>
                  )}
                </div>

                <Input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                />
                <p className="text-sm text-muted-foreground my-2">
                  Upload up to 4 images. Supported Formats: JPG, PNG, GIF
                </p>
              </div>
            </div>
          </CardContent>
        </div>

        <CardFooter className="lg:w-[35vw]">
          <Button type="submit" className="w-full cursor-pointer mt-2" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Adding Product..." : "Add Product"}
          </Button>
        </CardFooter>
      </form>
    </div>
  );
}

export default CreateProduct;
