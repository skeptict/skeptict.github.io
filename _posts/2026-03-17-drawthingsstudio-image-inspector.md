---
layout: post
title: "DrawThingsStudio, Part 2: Your New Favorite Metadata Tool"
date: 2026-03-17
---

Here's a situation every Draw Things user has been in at least once.

You're looking at an image you made a few weeks ago. It's *exactly* the kind of result you want to reproduce. But what were the settings? What model? What sampler? You dig through your history, you check your notes (if you kept any), you squint at filenames hoping for a clue. Sometimes you find it. Often you don't.

DrawThingsStudio's Image Inspector is the answer to that problem.

## What it does

The Inspector reads the metadata embedded in image files and shows you every generation parameter used to create them — model, sampler, dimensions, steps, guidance, seed, LoRAs, negative prompt, the works. It supports images from Draw Things, Automatic1111, Forge, and ComfyUI, so it works with basically anything you've generated, wherever you generated it.

It keeps a history of every image you've inspected, so you're building a searchable archive over time. And when you find the settings you want, one click sends them straight to the Generate Image view, ready to run.

## How to use it

Open DrawThingsStudio. The Image Inspector is the default view when the app launches.

**To inspect an image:** drag any PNG or JPG from Finder and drop it onto the Inspector. The metadata panel fills in immediately. If the image has no embedded metadata (some tools don't embed it), the Inspector will tell you that too — no mysterious blank screens.

**To inspect a Discord image:** paste a Discord image URL directly into the Inspector. It downloads and inspects it automatically, which is handy if someone shares a gorgeous image in a server and you want to know how they made it.

**To revisit something you've already inspected:** scroll the history timeline along the bottom. Every inspection is saved as a thumbnail. Click any one to bring its metadata back up.

**To send settings to Generate Image:** hit the "Send to Generate" button. All the parameters transfer over automatically, ready for you to tweak or run as-is.

## A few things worth knowing

The history is persistent — it survives app restarts by default. If you'd rather it clear on quit, turn off "Persist Inspector history" in Settings → Interface.

You can also open image files the traditional way with the "Open File" button in the history panel header, if drag-and-drop isn't your style.

And if you have the LLM integration set up, there's a "Describe with AI" option that sends the image to a vision model and gets a natural-language description — useful for images where the metadata tells you the *how* but not the *what*.

## The bottom line

The Image Inspector doesn't require a connection to Draw Things, doesn't require any setup, and starts being useful the moment you drop the first image onto it. If you're only going to use one feature of DrawThingsStudio, make it this one.

---

*Next up: generating images directly from DrawThingsStudio, with a persistent gallery and full config control.*
