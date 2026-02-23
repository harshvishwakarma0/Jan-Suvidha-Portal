/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cream: '#f5ebd7',
                'cream-dark': '#e8dcc4',
                'brutal-yellow': '#ffe14f',
                'brutal-orange': '#ff6b35',
                'brutal-orange-dark': '#e05a28',
                'india-blue': '#000080',
                'india-green': '#138808',
                saffron: '#FF9933',
                // Warm dark mode palette
                'dm-bg': '#1c1917',       // stone-900
                'dm-surface': '#292524',   // stone-800
                'dm-card': '#44403c',      // stone-700
                'dm-muted': '#78716c',     // stone-500
                'dm-text': '#fafaf9',      // stone-50
                'dm-text-muted': '#d6d3d1', // stone-300
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            boxShadow: {
                brutal: '4px 4px 0px 0px rgba(0,0,0,1)',
                'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
                'brutal-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
            },
        },
    },
    plugins: [],
}
