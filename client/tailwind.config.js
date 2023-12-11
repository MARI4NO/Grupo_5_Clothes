/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                night: "#141414",
                snow: "#FFFAFB",
                wisteria: "#c797ee",
                palePurple: "#fee9ff",
                pompPower: "#879c9c",
            },
        },
    },
    plugins: [],
};
