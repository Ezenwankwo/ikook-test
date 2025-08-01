"use client";

import React from "react";

interface SocialIconsProps {
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/77dea1fdcbc96694e3ad749f15af5312fe8e0cbc?placeholderIfAbsent=true",
      alt: "Facebook",
      className: "aspect-[1] object-contain w-[30px] shrink-0",
      url: "https://facebook.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/4b46f7a7cf8d0259e3693a646e1e3464e666367b?placeholderIfAbsent=true",
      alt: "Twitter",
      className: "aspect-[1] object-contain w-[30px] shrink-0",
      url: "https://twitter.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/b64b0f4814b721159e3cbd43791319d79f5c3138?placeholderIfAbsent=true",
      alt: "Instagram",
      className: "aspect-[0.87] object-contain w-[26px] shrink-0",
      url: "https://instagram.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/f1918811a320630d8dc671f2581218dcd98f80df?placeholderIfAbsent=true",
      alt: "LinkedIn",
      className: "aspect-[1] object-contain w-[30px] shrink-0",
      url: "https://linkedin.com",
    },
  ];

  return (
    <div className={`flex gap-[22px] my-auto ${className}`}>
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label={`Visit our ${icon.alt} page`}
        >
          <img src={icon.src} alt={icon.alt} className={icon.className} />
        </a>
      ))}
    </div>
  );
};
