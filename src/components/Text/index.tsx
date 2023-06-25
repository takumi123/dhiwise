import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPlusJakartaSansRomanBold15: "font-bold font-plusjakartasans",
  txtPlusJakartaSansBold40: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular20Bluegray800:
    "font-normal font-plusjakartasans",
  txtPoppinsRegular16Blue500: "font-normal font-poppins",
  txtPlusJakartaSansRomanRegular20Black900: "font-normal font-plusjakartasans",
  txtPlusJakartaSansMedium48: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold40: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanMedium32: "font-medium font-plusjakartasans",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPlusJakartaSansRomanBold32: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular20: "font-normal font-plusjakartasans",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPlusJakartaSansRomanRegular22: "font-normal font-plusjakartasans",
  txtPlusJakartaSansExtraBold30: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansExtraBold40: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular22Black900: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular15: "font-normal font-plusjakartasans",
  txtPlusJakartaSansBold48: "font-bold font-plusjakartasans",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtPlusJakartaSansRomanRegular20Gray60001: "font-normal font-plusjakartasans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
