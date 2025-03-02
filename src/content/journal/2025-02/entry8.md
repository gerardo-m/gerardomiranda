---
title: "Fixing catppuccin"
date: "2025-02-18"
category: none
tags: ["tmux"]
---

Yesterday while I was customizing my tmux installation I wanted to
add a pomodoro plugin to catppuccin, that was the initial
configuration I chose.

For some reason the separator with the icon was not showing, and
I wasn't able to solve it. Until today when I realized a fix I saw
yesterday was not yet in the stable channel, so that was causing 
a non existant color to be the color of the separator.

Other than that, I also want to customize the colors of the theme
so I am going to do the only thing a sane person would do. I'll
fork it and add my own stuff.