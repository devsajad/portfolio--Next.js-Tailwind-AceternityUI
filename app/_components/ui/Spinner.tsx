import React from "react";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg width="60" height="60" viewBox="0 0 50 50" className={className}>
      <g fill="none" className="stroke-primary-shade1">
        <g transform="rotate(0 25 25)">
          <ellipse cx="25" cy="25" rx="15" ry="8" strokeWidth="2" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="3s"
              repeatCount="indefinite"
            ></animateTransform>
          </ellipse>
        </g>
        <g transform="rotate(120 25 25)">
          <ellipse cx="25" cy="25" rx="15" ry="8" strokeWidth="2" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="4s"
              repeatCount="indefinite"
            ></animateTransform>
          </ellipse>
        </g>
        <g transform="rotate(240 25 25)">
          <ellipse cx="25" cy="25" rx="15" ry="8" strokeWidth="2" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="5s"
              repeatCount="indefinite"
            ></animateTransform>
          </ellipse>
        </g>
        <circle cx="25" cy="25" r="3" className="fill-primary">
          <animate
            attributeName="r"
            values="3;4;3"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </g>
    </svg>
  );
};
