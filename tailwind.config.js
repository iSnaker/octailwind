const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        brand: {
            'DEFAULT': '#00b8d6',
            'hover': '#129bb1'
        },
    },
}

module.exports = {
    mode: "development",
    darkMode: "media",
    content: [
        "./layouts/*.{htm,js,css,html}",
        "./assets/*.{js,css}",
        "./partials/*.htm",
        "./partials/*/*.htm",
        "./pages/*.htm",
    ],
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: colors
        },
    },
    variants: {
        display: ['group-hover']
    },
    plugins: []
}
