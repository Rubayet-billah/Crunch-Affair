import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import React from "react";

const CAImage = ({
  children,
  src,
  alt = "Image",
  quality = 100,
  className = "",
  bgImage = false,
  loading = "lazy",
  priority = false,
  placeholder = "blur",
  blurDataURL = "/images/blur-bg.jpg",
  objectFit = "cover", // Allow dynamic object fit
  width = 1000,
  height = 1000,
  ...rest
}) => {
  // Merge classNames dynamically using clsx and twMerge
  const mergedClassName = twMerge(clsx(className));

  if (bgImage) {
    return (
      <div className={twMerge(clsx("relative", mergedClassName))}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            alt={alt}
            src={src}
            placeholder={placeholder}
            loading={loading}
            priority={priority}
            blurDataURL={blurDataURL}
            quality={quality}
            fill
            style={{
              objectFit: objectFit, // Dynamically set object fit
            }}
            {...rest}
          />
        </div>
        {/* Foreground Content */}
        <div className="relative z-[1]">{children}</div>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      src={src}
      placeholder={placeholder}
      loading={loading}
      priority={priority}
      blurDataURL={blurDataURL}
      quality={quality}
      width={width}
      height={height}
      className={mergedClassName}
      style={{
        width: "100%", // Maintain full width
        objectFit: objectFit, // Dynamically set object fit
      }}
      {...rest}
    />
  );
};

export default CAImage;
