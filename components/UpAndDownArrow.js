import { useState } from "react";
import { Link } from "react-scroll";

export default function UpAndDownArrow({}) {
  const [arrow, setArrow] = useState(true);

  const arrowDown = () => {
    setArrow(false);
  };
  return (
    <div className="fixed right-14 flex flex-col gap-36 bottom-0 my-6">
      {/* <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-up  stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </Link> */}

      {arrow && (
        <Link
          to="work"
          onClick={arrowDown}
          spy={true}
          smooth={true}
          className={"z-10"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-down stroke-warmlight transition-transform hover:stroke-mediumer hover:translate-y-1"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </Link>
      )}
    </div>
  );
}
