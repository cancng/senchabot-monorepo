import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";

import { IconButton } from "@mui/material";
import { useThemeStore } from "../../store/theme-store";

const ColorModeSwitch = () => {
  // const { darkMode, toggleDarkMode } = useContext(ThemeContext)!;
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ColorModeSwitch;
