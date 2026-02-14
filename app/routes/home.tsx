import type { Route } from "./+types/home";
import titleMarkdown from "../customization/text/title.md?raw";
import homeBlurb from "../customization/text/homeBlurb.md?raw";
import { Box } from "@mui/material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SideBanner from "~/components/SideBanner";
import { backgroundColour, fontColour } from "~/customization/StyleOptions";
import ScrollBackground from "~/components/ScrollBackground";
import ScrollForeground from "~/components/Scroll Foreground";
import type { SxProps } from "@mui/system";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Michelle Johnson" }];
}

export default function Home() {
  return (
    <Box>
      <ScrollBackground
        sx={{ display: { xs: "block", md: "none" } }}
        photo={"../my_photo.jpg"}
        description={"A photo of me on my back porch enjoying a summer day"}
      ></ScrollBackground>

      <ScrollForeground
        children={
          <Box>
            <Box sx={{ backgroundColor: backgroundColour }}>
              <Box
                sx={{
                  mx: "auto",
                  minHeight: "100vh",
                  width: {
                    sm: "600px",
                    md: "900px",
                    lg: "1200px",
                    xl: "1536px",
                  },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <SideBanner
                  sx={{ display: { xs: "none", md: "block" } }}
                  photo={"../my_photo.jpg"}
                  description={
                    "A photo of me on my back porch enjoying a summer day"
                  }
                ></SideBanner>
                <Box>
                  <Box className={"title"} sx={{ py: "2.4rem" }}>
                    <Box
                      sx={{
                        boxShadow: `0 0 5px`,
                        borderRadius: "5px",
                        width: "fit-content",
                        padding: "10px",
                      }}
                    >
                      <Markdown remarkPlugins={[remarkGfm]}>
                        {titleMarkdown}
                      </Markdown>
                    </Box>
                  </Box>
                  <Box>
                    <Markdown remarkPlugins={[remarkGfm]}>{homeBlurb}</Markdown>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        }
      />
    </Box>
  );
}
