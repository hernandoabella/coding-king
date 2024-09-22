/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'verdana': ['Verdana', 'sans-serif']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"], // Define whether to include all themes or specific themes (light, dark, cupcake)
    darkTheme: "dark", // Specify the name of the dark mode theme
    base: true, // Apply background color and foreground color for the root element by default
    styled: true, // Include DaisyUI colors and design decisions for all components
    utils: true, // Add responsive and modifier utility classes
    prefix: "", // Prefix for DaisyUI classnames (components, modifiers, and responsive class names, but not colors)
    logs: true, // Show info about DaisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
