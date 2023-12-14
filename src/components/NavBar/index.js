import Link from "next/link";
import InputSeacrh from "./InputSearch";
const NavBar = () => {
  return (
    <header className=" bg-orange-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-dark text-2xl ">
          CUYANIMELIST
        </Link>
        <InputSeacrh />
      </div>
    </header>
  );
};

export default NavBar;
