import React from "react";

const FancyButton = ({ text = "Button", href = "#" }) => {
  return (
    <a href={href} className="inline-block">
      <button
        className="
        relative group z-10
        flex items-center justify-between
        px-4 py-0.5 pl-4
        bg-yellow-400
        border-2 border-black
        rounded-xl
        shadow-[3px_4px_0px_#000]
        overflow-hidden
        transition-all duration-200
        hover:translate-x-[1px] hover:translate-y-[1px]
        hover:shadow-[1px_2px_0px_#000]
        active:saturate-75
        "
      >
        {/* background hover */}
        <span
          className="
          absolute inset-0 -z-10
          bg-pink-300
          -translate-x-full
          transition-transform duration-200
          group-hover:translate-x-0
          "
        />

        {/* text */}
        <div className="relative overflow-hidden max-w-[110px] text-sm font-semibold">
          <span
            className="
            block
            transition-transform duration-200
            group-hover:translate-x-[5px]
            "
          >
            {text}
  
          </span>
        </div>

        {/* arrow */}
        <div
          className="
          relative z-10 ml-2 mr-1
          p-2
          border-2 border-black
          rounded-full
          bg-pink-300
          overflow-hidden
          transition-all duration-200
          group-hover:translate-x-[2px]
          active:translate-x-[3px]
          "
        >
          {/* arrow bg */}
          <span
            className="
            absolute inset-0 -z-10
            bg-yellow-400
            -translate-x-full
            transition-transform duration-200
            group-hover:translate-x-0
            "
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 45 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
              fill="black"
            />
          </svg>
        </div>
      </button>
    </a>
  );
};

export default FancyButton;
