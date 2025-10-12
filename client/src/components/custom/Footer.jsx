// Footer.jsx

import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F3F4F6] dark:bg-zinc-800 py-[2rem] px-[1rem] text-center my10">
      <p>&copy; {new Date().getFullYear()} <b>CodeStore.</b> All rights reserved.</p>

      <div className="flex gap-5 mt-2 mx-auto w-fit">
        <Link to="/">
          <Facebook strokeWidth={1.3} />
        </Link>

        <Link to="/">
          <Linkedin strokeWidth={1.3} />
        </Link>

        <Link to="/">
          <Github strokeWidth={1.3} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
