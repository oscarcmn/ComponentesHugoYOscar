/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                blanco: '#ffffff',
                negro: '#000000',
                primary: '#2a003a',
                secondary: '#01008a',
                terciary: '#46d5b3',
            },
            fontFamily: {
                body: ['"Work Sans"', 'sans-serif'],
                header: ['"Segoe UI"', 'sans-serif'],
            },
            fontSize: {
                sm: '0.875rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2.5rem',
                '2xl': '4rem',
            },
            fontWeight: {
                bold: 'bold',
                medium: '500',
                regular: '400',
            },
            letterSpacing: {
                md: '-0.0625rem',
                lg: '0.125rem',
            },
            lineHeight: {
                md: '8.75rem',
            },
        },
    },
    plugins: [],
};
