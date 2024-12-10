import { defineConfig } from "astro/config"
import remarkToc from "remark-toc"
import remarkCollapse from "remark-collapse"

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		},
		remarkPlugins: [
			remarkToc,
			[
				remarkCollapse,
				{
					test: "Table of contents",
				},
			],
		],
	},
})
