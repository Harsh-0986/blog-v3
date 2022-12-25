import Link from "next/link";
import { DiCssdeck } from "react-icons/di";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <DiCssdeck size={"3rem"} className="hidden lg:inline xl:inline" />
          <h1 className="text-center">Code with harsh</h1>
        </Link>
      </div>

      <div>
        <Link
          target="_blank"
          className="text-[#fff] px-5 py-3 text-sm md:text-base bg-gray-900 flex items-center rounded-full text-center"
          href="https://www.harsh-shah.tk"
        >
          Visit my website
        </Link>
      </div>
    </header>
  );
}

export default Header;
