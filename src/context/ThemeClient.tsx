import React from "react";
import { ThemeProvider } from "next-themes";

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient;