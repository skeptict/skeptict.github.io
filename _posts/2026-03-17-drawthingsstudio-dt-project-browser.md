---
layout: post
title: "DrawThingsStudio, Part 6: Digging Through Your DT History"
date: 2026-03-17
---

Draw Things keeps everything. Every image you've ever generated is stored in a project database — a `.sqlite3` file sitting quietly on your drive. It's a complete archive of your creative history, and until now, the only way to get into it was through Draw Things' own history view.

The DT Project Browser gives you a second door into that archive, with a few tricks Draw Things doesn't have.

## The scenario

You generated something months ago. You remember it was in a particular project. You remember it was a close-up, blue tones, maybe a FLUX model. You don't remember the prompt, the seed, or what LoRA you had loaded.

Open the DT Project Browser. Add your Draw Things project folder (it'll ask you to grant permission once, then remember it). Browse to the project. Scroll the thumbnail grid until you spot it. Click it. The full metadata — prompt, model, sampler, dimensions, steps, guidance, seed, LoRAs, timestamp — is right there in the detail panel.

Copy the config, send it to Generate Image, use it as a reference for a Story Studio setting. Done.

## What it can read

The Browser reads Draw Things' native `.sqlite3` database files directly, including:

- Full generation metadata (everything Draw Things stores)
- Thumbnails for every entry
- Video clips, if you've been using Draw Things for animation work (with a toggle between grouped clips and individual frames, and `.mov` export)

It works with databases on your internal drive, external drives, and network volumes.

## Search and bulk actions

The search bar filters by prompt, negative prompt, or model name across the current project. For multi-select, hold Shift or Command and click — bulk actions let you export full-resolution images or delete entries in one go.

A status bar at the bottom shows how many entries are in the project and how many are currently visible after filtering.

## Sending images elsewhere

From the detail panel you can:

- **Copy Config** — copies the generation parameters to the clipboard
- **Copy All** — copies everything including the prompt
- **Send to Generate Image** — transfers the config directly to the Generate Image view
- **Add to Story Studio** — promotes a generated image to a character reference or setting reference in Story Studio, with the prompt fragment pre-filled for you to trim

## A note on access

The first time you add a folder, macOS will ask you to confirm access. DrawThingsStudio remembers that permission using a security-scoped bookmark, so you only need to grant it once per folder. If you're browsing a database on an external drive that's been ejected, the Browser will tell you the volume is unavailable rather than silently failing.

## The bottom line

Your Draw Things history is a real asset. The DT Project Browser treats it like one — searchable, browsable, and connected to the rest of DrawThingsStudio so that good work you did in the past can inform what you're building now.

---

*That's the full tour. If something isn't working the way you expect, or you have an idea for a feature that would make your workflow better, open an issue on [GitHub](https://github.com/skeptict/DrawThingsStudio). This thing gets better every week, and user feedback is a big reason why.*
