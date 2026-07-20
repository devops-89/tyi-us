"use client";

import React from "react";
import Image from "next/image";
import { Stack, Typography, Box } from "@mui/material";
import { ibmPlexSans } from "@/utils/fonts";
import { Colors } from "@/utils/enum";
import { ISparkleText } from "@/utils/types";
import { ASSETS } from "@/utils/assets";

interface SparkleLabelProps {
  text: string | ISparkleText;
  color?: string;
  sparkleColor?: string;
  sparklePosition?: "left" | "right" | "both";
  sparkleSize?: number | string;
  fontSize?: any;
  type?: "diamond" | "flower" | "red-star" | "blue-star";
  customIcon?: React.ReactNode;
}

const SparkleLabel: React.FC<SparkleLabelProps> = ({
  text,
  color: propColor,
  sparklePosition: propSparklePosition,
  sparkleSize = 14,
  fontSize = "14px",
  type = "flower",
  customIcon,
}) => {
  const isObject = typeof text !== "string";
  const displayText = isObject ? text.text : text;

  const color =
    propColor || (isObject && text.color ? text.color : Colors.SECONDARY);

  const sparklePosition =
    propSparklePosition ||
    (isObject && text.sparklePosition ? text.sparklePosition : "both");

  const iconSrc =
    type === "flower"
      ? ASSETS.IMAGES.ICON_FLOWER
      : type === "red-star"
      ? ASSETS.IMAGES.ICON_RED_STAR
      : type === "blue-star"
      ? ASSETS.IMAGES.ICON_BLUESTAR
      : ASSETS.IMAGES.ICON_BLUESTAR;

  const iconSize =
    typeof sparkleSize === "number"
      ? sparkleSize
      : parseInt(sparkleSize as string) || 14;

  const renderIcon = () => {
    if (customIcon) return customIcon;

    return (
      <Box
        sx={{
          width: iconSize,
          height: iconSize,
          minWidth: iconSize,
          position: "relative",
          flexShrink: 0,
          lineHeight: 0,
        }}
      >
        <Image src={iconSrc} alt="*" fill style={{ objectFit: "contain" }} />
      </Box>
    );
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        display: "inline-flex",
        width: "fit-content",
        maxWidth: "100%",
        gap: {
          xs: "6px",
          sm: "8px",
          md: "10px",
        },
        flexWrap: "nowrap",
        whiteSpace: { xs: "normal", sm: "nowrap" },
      }}
    >
      {(sparklePosition === "left" || sparklePosition === "both") &&
        renderIcon()}

      <Typography
        component="span"
        sx={{
          fontFamily: ibmPlexSans.style.fontFamily,
          fontWeight: 600,
          fontSize,
          color,
          letterSpacing: "0.5px",
          lineHeight: { xs: 1.3, sm: 1 },
          whiteSpace: { xs: "pre-line", sm: "nowrap" },
          textAlign: "center",
        }}
      >
        {displayText}
      </Typography>

      {(sparklePosition === "right" || sparklePosition === "both") &&
        renderIcon()}
    </Stack>
  );
};

export default SparkleLabel;