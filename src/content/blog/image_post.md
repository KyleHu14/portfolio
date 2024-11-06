---
author: Sat Naing
pubDatetime: 2024-01-04T09:30:41.816Z
title: AstroPaper 4.0
slug: "astro-paper-v4"
featured: true
ogImage: ../../assets/images/AstroPaper-v4.png
tags:
    - release
description: "AstroPaper v4: ensuring a smoother and more feature-rich blogging experience."
---

Hello everyone! Wishing you a happy New Year 🎉 and all the best for 2024! We're excited to announce the release of AstroPaper v4, a significant update that introduces a range of new features, improvements, and bug fixes to elevate your blogging experience. A big thank you to all the contributors for their valuable input and efforts in making version 4 possible!

![AstroPaper v4](/assets/test.png)

## Table of contents

## Major Changes

### Upgrade to Astro v4 [#202](https://github.com/satnaing/astro-paper/pull/202)

AstroPaper now leverages the power and capabilities of Astro v4. However, it’s a subtle upgrade and won’t break most Astro users.

![Astro v4](https://astro.build/_astro/header-astro-4.GLp8HjfV.webp)

### Replace `postSlug` with Astro Content `slug` [#197](https://github.com/satnaing/astro-paper/pull/197)

The `postSlug` in the blog content schema is no longer available in AstroPaper v4. Initially Astro doesn't have a `slug` mechanism and thus we have to figure it out on our own. Since Astro v3, it supports content collection and slug features. Now, we believe it's time to adopt Astro's out-of-the-box `slug` feature.

**_file: src/content/blog/astro-paper-4.md_**

```bash
---
author: Sat Naing
pubDatetime: 2024-01-01T04:35:33.428Z
title: AstroPaper 4.0
slug: "astro-paper-v4" # if slug is not specified, it will be 'astro-paper-4' (file name).
# slug: "" ❌ cannot be an empty string
---
```

The behavior of the `slug` is slightly different now. In the previous versions of AstroPaper, if the `postSlug` is not specified in a blog post (markdown file), the title of that blog post would be slugified and used as the `slug`. However, in AstroPaper v4, if the `slug` field is not specified, the markdown file name will be used as the `slug`. One thing to keep in mind is that the `slug` field can be omitted, but it cannot be an empty string (slug: "" ❌).

If you're upgrading AstroPaper from v3 to v4, make sure to replace `postSlug` in your `src/content/blog/*.md` files with `slug`.

## New Features

### Add code-snippets for content creation [#206](https://github.com/satnaing/astro-paper/pull/206)

AstroPaper now includes VSCode snippets for new blog posts, eliminating the need for manual copy/pasting of the frontmatter and content structure (table of contents, heading, excerpt, etc.).
