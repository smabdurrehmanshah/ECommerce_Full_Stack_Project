import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AdminLogin() {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh]">
        <div className="w-[60vw] sm:w-[25vw] mx-auto m-20 grid gap-3">
          <h1 className="text-2xl font-bold">Login into Your Account</h1>
          <form className="grid gap-4">
            <Input placeholder="Enter Your Username..." type="text" name="username" />
            <Input
              placeholder="Enter Your Password"
              type="password"
              name="password"
            />

            <Button className="cursor-pointer">Login</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;
