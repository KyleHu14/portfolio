import type { Site, SocialObjects } from "./types"

export const SITE: Site = {
	website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
	author: "Sat Naing",
	profile: "https://satnaing.dev/",
	desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
	title: "Kyle Hu",
	ogImage: "astropaper-og.jpg",
	lightAndDarkMode: true,
	postPerIndex: 4,
	postPerPage: 3,
	scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
	showArchives: true,
	editPost: {
		url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
		text: "Suggest Changes",
		appendFilePath: true,
	},
}

export const SOCIALDATA: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/KyleHu14",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/kyle-vic-hu/",
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: "Mail",
		href: "mailto:kylebusiness1688@gmail.com",
		linkTitle: `Send an email to ${SITE.title}`,
		active: false,
	},
]
