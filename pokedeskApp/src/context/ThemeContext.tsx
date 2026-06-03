import React, { createContext, useContext, useState } from "react";

import { darkColors } from "../themes/dark";
import { lightColors } from "../themes/light";

type ThemeContextData = {
  colors: typeof darkColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((old) => !old);
  }

  return (
    <ThemeContext.Provider
      value={{
        colors: isDark ? darkColors : lightColors,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}