import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="min-h-[70vh]">
        <div className="w-[60vw] sm:w-[25vw] mx-auto my-10 grid gap-3">
          <h1 className="text-2xl font-bold">Register Your Account</h1>
          <form className="grid gap-3">
            <Input placeholder="Enter Your Name" type="text" name="name" />
            <Input placeholder="Enter Your Email" type="email" name="email" />
            <Input placeholder="Enter Your Phone" type="tel" name="phone" />
            <Input
              placeholder="Enter Your Password"
              type="password"
              name="password"
            />
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                onCheckedChange={(e) => setEnabled(e)}
                className="border border-black dark:border-white cursor-pointer"
              />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>

            <Button disabled={!enabled} className="cursor-pointer">
              Sign Up
            </Button>

            <div className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
