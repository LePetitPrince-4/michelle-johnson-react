import { Box } from "@mui/material";
import { fontColour } from "~/customization/StyleOptions";
import { Image } from "@mui/icons-material";

interface ScrollBackgroundProps {
  photo?: string;
  description: string;
  sx: any;
}

export default function ScrollBackground({
  photo,
  description,
  sx,
}: ScrollBackgroundProps) {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        alignSelf: "center",
        ...sx,
      }}
    >
      <img src={photo} alt={description} style={{ width: "100%" }}></img>
    </Box>
  );
}
