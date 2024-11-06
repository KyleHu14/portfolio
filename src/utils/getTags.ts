// Used to normalize tag names
import { slugifyStr } from "./slugify"

// Astro
import type { CollectionEntry } from "astro:content"

// Interface for Tag Object
interface Tag {
	slug: string
	originalName: string
}

const getTags = (posts: CollectionEntry<"blog">[]) => {
	// Key : originalName, Val : slug
	const tagMap = new Map<string, string>()

	// Loop through every post's tags
	posts
		.flatMap((post) => post.data.tags)
		.forEach((tag) => {
			// If the tagMap does not have this tag then we can add it to our Map
			if (!tagMap.has(tag)) {
				tagMap.set(tag, slugifyStr(tag))
			}
		})

	return Array.from(tagMap, ([originalName, slug]) => ({
		slug,
		originalName,
	})).sort((a, b) => a.slug.localeCompare(b.slug))
}

export default getTags
