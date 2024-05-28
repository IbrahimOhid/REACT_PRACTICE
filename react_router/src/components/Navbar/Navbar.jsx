import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center ">
      <nav className="self-center w-full max-w-7xl  ">
        <div className="flex flex-col lg:flex-row justify-around items-center border-b-2">
          <h1 className="uppercase pl-5 py-4 text-xl font-sans font-bold">
            <span className="text-red-500">React</span> <span className="text-blue-600">Router</span>
          </h1>
          <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
            <li className="hover:underline  underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/home'}>Home</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/services'}>Services</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/about'}>About</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/pricing'}>Pricing</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              <Link to={'/product'}>Product</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
