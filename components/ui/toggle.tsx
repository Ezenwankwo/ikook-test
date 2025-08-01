import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  className = "",
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-[37px] h-5 relative bg-[#FCC01C] rounded-[33.333px] border-[0.667px] border-solid border-[#F9DF98] transition-all duration-200 ${className}`}
    >
      <div
        className={`absolute top-0.5 w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 ${
          checked ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.17704" cy="8.99931" r="8.82353" fill="white" />
        </svg>
      </div>
    </button>
  );
};
