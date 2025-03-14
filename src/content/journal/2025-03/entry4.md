---
title: "Ruby constants and Rails loading"
date: "2025-03-13"
category: none
tags: ["rails"]
---

Today I learnt about those annoying constant already 
initialized warning we usually got in rails applications,
they don't cause any issues, but they are as I said
annoying...

Finally today got down to understand what was happening,
and even I had an idea, I couldn't just fix the issue
since a feature of the web application was actually 
depending on the reloading of some files in the lib 
directory.

So what I did was just to activate eager loading in
development and added the required files to 
eager_load_paths.