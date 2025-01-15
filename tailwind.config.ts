import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'marquee': {
			  '0%': { transform: 'translateX(0%)' },
			  '100%': { transform: 'translateX(-100%)' },
			},
			'marquee2': {
				'0%': { transform: 'translateX(100%)' },
				'100%': { transform: 'translateX(0%)' },
			  },
			'slideDown': {
				'0%': { transform: 'translateY(-75%)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' },
			},
			'slideUp': {
				'0%': { transform: 'translateY(25%)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' },
			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'marquee': 'marquee 25s linear infinite',
			'marquee2': 'marquee2 25s linear infinite',
			'slideDown': 'slideDown 0.5s ease-out',
			'slideUp': 'slideUp 0.75s ease-out',
  		},
		height: {
		'40vh': '40vh',
		'50vh': '50vh',
		'70vh': '70vh',
		'100vh': '100vh',
		'120vh': '120vh',
		'150vh': '150vh',
		'200': '200',
		'225': '225',
		'250': '250',
		'300': '300',
		'400': '400',
		'500': '500',
		},
		fontSize: {
		'10xl': '20.87rem',
		},
		fontFamily: {
			Montserrat: "Montserrat",
			Playfair: "Playfair",
			LeagueSpartan: "League Spartan"
		}
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
