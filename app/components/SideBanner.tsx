import { Box } from "@mui/material";
import { fontColour } from "~/customization/StyleOptions";
import { Image } from "@mui/icons-material";

interface SideBannerProps {
  photo?: string;
  description: string;
  sx: any;
}

export default function SideBanner({
  photo,
  description,
  sx,
}: SideBannerProps) {
  return (
    <Box
      sx={{
        minWidth: { xs: "100vw", md: "25%" },
        height: { xs: "fit-content", md: "100vh" },
        backgroundColor: fontColour,
        mr: "2rem",
        boxShadow: `0 0 10px ${fontColour}`,
          ...sx,
      }}
    >
      <img src={photo} alt={description} style={{ width: "100%" }}></img>
    </Box>
  );
}
