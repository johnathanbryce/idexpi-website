import type { Metadata } from "next";
// Styles
import "../styles/styles.scss";
import "../styles/globals.css";
// MUI
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
// Layout
import Header from "./layout/header/Header";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEXPI ",
  description: "IDEXPI's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Container
              maxWidth="lg"
              sx={{
                border: "2px solid red",
              }}
            >
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
