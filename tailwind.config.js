/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ajusta la ruta según tu proyecto
    theme: {
        extend: {
            colors: {
                blanco: {
                    500: "#ffffff",
                },
                negro: {
                    500: "#000000",
                },
                primary: {
                    500: "#2a003a",
                },
                secondary: {
                    500: "#01008a",
                },
                terciary: {
                    500: "#46d5b3",
                },
            },
            fontFamily: {
                body: ["Work Sans", "sans-serif"],
                header: ["Segoe UI", "sans-serif"],
            },
            fontWeight: {
                bold: "700",
                medium: "500",
                regular: "400",
            },
            letterSpacing: {
                md: "-0.0625rem",
                lg: "0.125rem",
            },
            lineHeight: {
                md: "8.75rem",
            },
            fontSize: {
                sm: "0.875rem", // 14px
                md: "1rem", // 16px
                lg: "1.5rem", // 24px
                xl: "2.5rem", // 40px
                "2xl": "4rem", // 64px
            },
        },
    },
    plugins: [],
};
