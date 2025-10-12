import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Success() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col gap-1 justify-center items-center w-screen h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold">Payment Successful!</h1>
      <Link to="/" className="underline text-sm sm:text-base">
        Go to Home (Redirecting you in {count} seconds!)
      </Link>
    </div>
  );
}

export default Success;
