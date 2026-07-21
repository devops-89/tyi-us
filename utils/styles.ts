import { Colors } from "./enum";

export const STYLES = {
  CONTAINER: {
    maxWidth: "1280px",
    margin: "0 auto",
    px: { xs: 2, sm: 4, md: 6 },
  },
  SECTION_PADDING: {
    py: { xs: 6, md: 10 },
  },
  HEADING: {
    fontWeight: 800,
    color: Colors.PRIMARY,
    lineHeight: 1.2,
  },
  SUBHEADING: {
    color: Colors.GRAY_DARK,
    opacity: 0.8,
    maxWidth: "600px",
  },
  GLASS: {
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.7)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};
