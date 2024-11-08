---
author: Kyle Hu
pubDatetime: 2024-11-07T22:57:22Z
modDatetime: 2024-11-08T22:57:22Z
title: Watchface
slug: "watchface"
github: "https://github.com/pielab-uci/watchface-website/tree/main"
link: "https://watchface-website.vercel.app/"
featured: true
ogImage:
tags:
    - work
description: "My thoughts on working on a research project at UCI."
---

Watchface was the first somewhat professional project that I worked on at UCI. Watchface is a smartwatch customization interface designed to help users create layouts for their devices. My role was to continue development after the original developer graduated. The project became a pivotal learning experience for me. You can visit the site and get an idea of how it works [here](https://watchface-website.vercel.app/).

I worked under a PHD student who was studying smartwatch customization. I was to continue working on a Vuejs website that was built by a student who had just graduated.

<!-- ![AstroPaper v4](/assets/test.png) -->

## Table of contents

## Premise

The project is written in Vuejs and a bit of TypeScript. At the time, the project was structured differently from how I was usually accustomed to. It was a single page app that could display a SVG smartwatch UI and conditionally rendered the steps of the design process as components.

## Challenges

The general challenges I encountered were :

1. Unfamiliarity with Vue.js: I had little experience with Vue.js and was still new to web development as a whole.
2. Lack of Documentation: The codebase had minimal documentation and comments, making it difficult to understand the existing structure.
3. Limited Experience in Team Projects: I had mostly worked solo on projects, so adapting to someone else’s coding style and structure was unfamiliar.
4. Limited Support: The original developer was hard to reach, leaving me with minimal guidance.

The most confusing part of this project was how messy the overall code was structured. The overall layout is not a problem, but understanding how the website renders the designed smartwatch is fairly complicated.

Here is an example of a complicated piece of code :

```vue
<StatisticItem
	v-if="
		(settingsStore.fields.length == 0 ||
			settingsStore.fields.length >= 1) &&
		settingsStore.theme !== 'multimodern'
	"
	:stat="settingsStore.fields.length == 0 ? null : settingsStore.fields[0]"
	:coords="layouts[layout == null ? settingsStore.layout as keyof typeof layouts : layout as keyof typeof layouts].stats[0]"
	:iconColor="settingsStore.iconColor"
	:textColor="settingsStore.iconTextColor" />
```

Looking at it now, it seems a bit more understandable. This component is setting up the colors and statistics from a global store called settingsStore. This component will only render given a condition in the v-if.

But as a third year in UCI, I did not have the intuition or experience to try to read this code. I accepted that and tried my best to work only on the code that was necessary.

## Overcoming Challenges

Initially, I gave myself too much pressure and stress to understand the entire codebase quickly. Although I put in the time and effort, I delayed my progress due to rushing the process. I stared at the code and clicked through random files, hoping something would click.

After several days of struggling, I tried shifting my strategy. The best approach for me was to experiement with changing the files bit by bit and observing the changes.

With time, I gained enough familiarity to start implementing features and write documentation for the project. You can view the documentation that I wrote for Watchme [here](https://docs.google.com/document/d/1QqVEKJbw2MoQqmXNZHXsi8MAXxK2ob3RUE1RNWfTlD0/edit?usp=sharing).

## Conclusion

I came into this project with unrealistic expectations. I thought that I had to understand the entire codebase. I was not patient and rushed to understand the code.

In spite of this, I learned a lot when it came to working on existing code and working with a team. I enjoyed working under a PHD student and he taught me a lot when it came to communicating and reporting about software.

Through Watchface, I learned that I need to apply patience with my work and that it takes time to get a stable footing when starting out on a project. Writing documentation and comments proved to be invaluable too as it maintained my understanding of the code even if my memory was not fresh.
