import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "./UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase ">
      <Link to="/" className="tracking-widest">
        React Fast Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}
