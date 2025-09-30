import { createContext } from "react";
5;
import { type Theme } from "@/types";
import { useState, type ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  let currentTheme = localStorage.getItem("theme") as Theme;
  if (currentTheme !== "light" && currentTheme !== "dark") {
    currentTheme = "dark";
  }
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
