import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme1' : '#155EEF',
        'theme2' : '#00359E',
        'theme3' : '#454444',
        'theme4' : '#F9FAFB',
        'theme5' : '#344054',
        'theme6' : '#EAECF0',
        'theme7' : '#F2F4F7',
        'theme8' : '#D0D5DD',
        'theme9' : '#475467',
        'theme10': '#787676',
        'theme11': '#D9D9D9',
        'theme12': '#155EEF',
        'theme13': '#667085',
        'theme14': '#101828',
        'theme15': '#F2FCFF',
        'theme16': '#EFF8FF',
        'theme17': '#1D2939',
        'theme18': '#2D86F',
        'theme19': '#D1E9FF',
        'theme20': '#504F4F',
        'theme21': '#EFF4FF',
        'theme22': '#F5FAFF',
        'theme23': '#2D86FF',
        'theme24': '#D1E0FF',
        'theme25': '#B2CCFF',
        'theme26': '#F5F8FF',
        'theme27': '#DCE0E4',
        'theme28': '#004EEB',
        'theme29': '#D1CECE',
        'theme30': '#0B1C3F',
        'theme31': '#40588B',
        'theme32': '#EDFBFF',
        'theme33': '#1F1622',
        'theme34': '#006C9C',
        'theme35': '#D6F4F9',
        'theme36': '#353F4A',
        'theme37': '#72818D',
        'theme38': "#D7DCE1"
      },
      fontFamily: {
        inter: [
          'Inter',
          'Inter Fallback'
        ],
        barlow : ['Barlow', 'serif'],
        poppins : ['Poppins', 'serif']
      },
      animation: {
        'loader-expand': 'loaderExpand 2s ease-in-out infinite',
      },
      keyframes: {
        loaderExpand: {
          '0%': { inset: '0 100% 0 0' },
          '100%': { inset: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
