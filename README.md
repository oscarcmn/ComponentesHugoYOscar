# Sistema de Diseño con Tailwind CSS y React

Este proyecto implementa un **Sistema de Diseño** basado en un diseño previamente definido en **Figma**. El sistema de diseño está implementado usando **React** con **TypeScript** para los componentes y **Tailwind CSS** para la estilización.

### Autores
Hugo Martin y Oscar Carmena

## Capturas de Pantalla

A continuación se muestran algunas capturas de pantalla del diseño en **Figma** y el código de **Tailwind CSS**:

### Diseño en Figma

![Diseño en Figma](/public/SISTEMADISEÑO1.png)

![Diseño en Figma](/public/SISTEMADISEÑO2.png)


### Código de Tailwind CSS
````
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
````
## Enlace al Sistema de Diseño en Figma

Puedes ver el sistema de diseño completo en Figma a través del siguiente enlace:

[Ver sistema de diseño en Figma](https://www.figma.com/design/6HbfCuUtZqTB9fQ4XTjP2D/P4.1-BOCETO?node-id=36-2&p=f&t=k4ux2wKeQ8S9RDYR-0)

---

## Descripción del Proyecto

El repositorio contiene un sistema de diseño modular que incluye los siguientes elementos:

- **Paleta de colores personalizada**.
- **Fuentes y tamaños de texto**.
- **Componentes reutilizables** como botones, inputs, cards, header y footer
- Implementación con **React** y **TypeScript**


