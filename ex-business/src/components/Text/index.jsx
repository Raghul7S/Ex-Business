import React from "react";

export default function Text({
  children,
  as = "span",

  /* Font Sizes */
  fs12,
  fs14,
  fs16,
  fs60,
  fs20,
  fs30,
  fs56,

  /* Colors */
  textBlack,
  textGreen,
  textWhite,
  textGrey,
  textGlow,

  /* Font Family */
  fontMont,
  fontPlay,

  /* Styles */
  weight = true,
  uppercase = false,
  margin = false,
  style = {},
}) {
  const Component = as;

  const getColor = () => {
    if (textGreen) return "var(--text-green)";
    if (textWhite) return "var(--text-white)";
    if (textGrey) return "var(--text-grey)";
    if (textGlow) return "var(--text-glow)";
    return "var(--text-black)"; //default
  };

  const fontFamily = () => {
    if (fontMont) return "'Montserrat', sans-serif";
    if (fontPlay) return "'Playfair Display', serif";
    return "'Playfair Display', serif"; // default
  };

  const getFontSize = () => {
    if (fs60) return "var(--fs-60)";
    if (fs16) return "var(--fs-16)";
    if (fs14) return "var(--fs-14)";
    if (fs12) return "var(--fs-12)";
    if (fs20) return "var(--fs-20)";
    if (fs30) return "var(--fs-30)";
    if (fs56) return "var(--fs-56)";
    return "var(--fs-14)"; // default
  };

  return (
    <Component
      style={{
        fontSize: getFontSize(),
        fontFamily: fontFamily(),
        color: getColor(),
        fontWeight: weight ? 600 : null,
        marginBottom: margin ? "16px" : null,
        textTransform: uppercase ? "uppercase" : "none",
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
