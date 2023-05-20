import React, { useMemo } from "react";
import type { NextPage } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { landingDarkTheme, lightTheme } from "../utils/theme";
import { CssBaseline } from "@mui/material";
import Header from "../components/common/Header";
import LandingAppBar from "../components/landing/LandingAppBar";
import LandingTexts from "../components/landing/LandingTexts";
import LandingFooter from "../components/landing/LandingFooter";
import VersionText from "src/components/common/VersionText";
import { useThemeStore } from "../store/theme-store";

const Landing: NextPage = () => {
  const { darkMode } = useThemeStore();

  const theme = useMemo(
    () => (darkMode ? landingDarkTheme : lightTheme),
    [darkMode],
  );

  return (
    <>
      <Header title="Landing" index={true} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingAppBar />
        <LandingTexts />

        <VersionText />

        <LandingFooter />
      </ThemeProvider>
    </>
  );
};

export default Landing;
