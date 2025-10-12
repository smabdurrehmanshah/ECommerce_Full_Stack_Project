import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-screen h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold">404 Page Not Found!</h1>
      <Link to="/" className="underline text-sm sm:text-lg">
        Click here to go to Home page!
      </Link>
    </div>
  );
}

export default Error;
