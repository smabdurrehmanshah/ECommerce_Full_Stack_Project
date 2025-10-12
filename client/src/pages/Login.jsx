import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="min-h-[70vh]">
        <div className="w-[60vw] sm:w-[25vw] mx-auto m-20 grid gap-3">
          <h1 className="text-2xl font-bold">Login into Your Account</h1>
          <form className="grid gap-4">
            <Input placeholder="Enter Your Email" type="email" name="email" />
            <Input
              placeholder="Enter Your Password"
              type="password"
              name="password"
            />

            <Button className="cursor-pointer">Login</Button>

            <div className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="font-bold">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
