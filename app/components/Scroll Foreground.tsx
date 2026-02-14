import { Box } from "@mui/material";
import { backgroundColour } from "~/customization/StyleOptions";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ backgroundColor: backgroundColour }}>
      <Box
        sx={{
          mx: "auto",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
