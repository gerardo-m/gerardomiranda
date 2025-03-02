---
title: "Going back to Tomy"
date: "2025-01-20"
category: none
tags: ["tomy", "flutter"]
---

Today I went back to work a little bit on the Tomy Timer app, first fixing it
because the build was broken, and then adding a little bit of functionality.

Going back to this project I realized why some things are the way they are
especifically about the repository pattern, where I was using it just for the
sake of it. Now that I had to fix a weird behaviour, just realized the 
reason to use it in reality. One source of truth.