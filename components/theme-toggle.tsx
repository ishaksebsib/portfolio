"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="font-label text-xs hover:text-accent-cyan hover:underline decoration-accent-cyan underline-offset-4 pointer-events-auto cursor-pointer"
        >
            [ THEME::{theme === "dark" ? "DARK" : "LIGHT"} ]
        </button>
    );
}
