import { Link } from "react-router-dom";

const className =
  "inline-block rounded-full  bg-yellow-400  px-4 py-2 font-semibold  uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 md:py-3";

export default function Button({ children, disabled, to }) {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}