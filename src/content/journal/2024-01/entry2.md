---
title: "Making the journal work"
date: "2025-01-03"
category: none
tags: ["astro"]
---

It seems kind of obvious but there is no hint in the Astro documentation for 
rendering various pieces of content in the same page, you can only use the
`<Content>` component once per component.

Then it hit me, I can achieve that by creating a component, passing the entry
from the page and rendering the entry to the render method of astro:content.

Maybe I can write a blog post about it.