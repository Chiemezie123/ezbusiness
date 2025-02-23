import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		xs: "320px",
		sm: "480px",
		md: "768px",
		lg: "1050px",
		xl: "1280px",
		"2xl": "1440px",
		mxl: { max: "1279px" },
		mlg: { max: "1049px" },
		mmlg: { max: "976px" },
		mmd: { max: "768px" },
		msm: { max: "639px" },
		mxs: { max: "480px" },
		mxxs: { max: "400px" },
		mxxss: { max: "375px" },
		mxxssw: { max: "355px" },
		mxxxs: { max: "320px" },
		"ms-height": { raw: "(max-height: 700px)" },
		"mxl-height": { raw: "(max-height: 850px)" },
	  },
	  fontFamily: {
        Inter: ['var(--font-inter)', ...fontFamily.sans], 
      },
  	extend: {
		fontSize: {
			// Headings element styles
			"h-xxl": ["3rem", { lineHeight: "48px", fontWeight: 700 }],
			"h-xl": ["2.4004375rem", { lineHeight: "40px", fontWeight: 700 }],
			"h-lm": ["1.867rem", { lineHeight: "24px", fontWeight: 700 }],
			"h-l": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
			"h-m": ["1.20025rem", { lineHeight: "24px", fontWeight: 700 }],
			"h-s": ["1rem", { lineHeight: "24px", fontWeight: 700 }],
			"h-xs": [".75rem", { lineHeight: "15.96px", fontWeight: 700 }],
	
			// Paragraph element styles
			"p-xxl": ["1.5rem", { lineHeight: "32px", fontWeight: 400 }],
			"p-xl": ["1.1875rem", { lineHeight: "28px", fontWeight: 400 }],
			"p-l": ["1rem", { lineHeight: "16px", fontWeight: 400 }],
			"p-m": ["0.9rem", { lineHeight: "20.02px", fontWeight: 400 }],
			"p-s": ["0.75rem", { lineHeight: "15.96px", fontWeight: 400 }],
			"p-sx": ["0.5rem", { lineHeight: "15.96px", fontWeight: 400 }],
			// Controls element styles
			"c-xxl": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
			"c-xl": ["1.1875rem", { lineHeight: "19px", fontWeight: 700 }],
			"c-l": ["1rem", { lineHeight: "24px", fontWeight: 700 }],
			"c-m": ["0.875rem", { lineHeight: "15.96px", fontWeight: 700 }],
			"c-s": ["0.75rem", { lineHeight: "12px", fontWeight: 700 }],
		  },
		  
  		colors: {
			'fruit-salad': {
				'50': '#f5f9f4',
				'100': '#e9f2e6',
				'200': '#d2e5cd',
				'300': '#adcfa6',
				'400': '#82b177',
				'500': '#629956',
				'600': '#4a7940',
				'700': '#3d6035',
				'800': '#334d2e',
				'900': '#2b4027',
				'950': '#132211',
			},
				'fuscous-gray': {
				'50': '#f6f6f6',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#535353',
				'800': '#454545',
				'900': '#3d3d3d',
				'950': '#262626',
			},
			'tuatara': {
			'50': '#f6f6f6',
			'100': '#e7e7e7',
			'200': '#d1d1d1',
			'300': '#b0b0b0',
			'400': '#888888',
			'500': '#6d6d6d',
			'600': '#5d5d5d',
			'700': '#4f4f4f',
			'800': '#454545',
			'900': '#383838',
			'950': '#262626',
		},


  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
