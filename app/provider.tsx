// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider 
           attribute="class" 
           defaultTheme="dark" // Set dark as the default theme
           enableSystem={false} // Disable system theme detection
           {...props}
         >
           {children}
         </NextThemesProvider>;
}