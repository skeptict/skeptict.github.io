---
layout: post
title: "DrawThingsStudio: Working with Z Image"
date: 2026-03-24
---

Z Image is one of those models that snuck up on a lot of people. It landed in Draw Things in December, and if you've been sleeping on it, here's the short pitch: it's fast, it's sharp, and the Turbo variants in particular produce results that would have seemed unreasonable to expect six months ago.

DrawThingsStudio supports Z Image across all its features — Generate Image, Workflow Builder, and the DT Project Browser. Here's what's worth knowing.

## Generating Z Image images

In the Generate Image view, Z Image works like any other model — pick it from the model list, set your prompt, hit Generate. But there are a couple of settings worth paying attention to.

**CFG / Guidance:** Z Image Turbo variants want a low guidance value. If you're used to running FLUX or SDXL at guidance 7 or higher, dial it back — somewhere in the 1–3 range is typical for Turbo. Too high and results get strange fast.

**Config presets:** If you've dialed in a Z Image setup in Draw Things that you like, export the config and import it into DrawThingsStudio as a preset. One click to apply it, and you don't have to remember the magic numbers every time.

**LoRAs:** Z Image LoRA support landed alongside the model itself, and DrawThingsStudio passes your LoRA selections through to Draw Things automatically. Add them in the LoRA section just like any other model.

## Z Image in Workflow Builder

Z Image works well in workflows because the Turbo variants are fast enough that looping through variations doesn't feel punishing. A simple loop — set prompt, generate, save, repeat with a seed increment — can give you a useful spread of results in the time a single FLUX generation might take.

One thing to include in any Z Image workflow: a **config instruction** that specifies the model. DrawThingsStudio uses the model name to handle the decoding correctly on the gRPC side, so without it, results can come out garbled. It's easy to forget when you're building a workflow from scratch, and the app will remind you if a generation trigger is present but no config is set.

## Browsing Z Image history in DT Project Browser

If you've been generating Z Image images in Draw Things, they show up in the DT Project Browser like any other entries — thumbnail grid, full metadata panel, search by prompt or model name. The metadata includes the model name, so filtering for "z-image" in the search bar is a quick way to pull up just those generations.

The "Send to Generate Image" button in the detail panel transfers the full config, which is particularly handy for Z Image since getting the guidance and sampler settings right takes a bit of experimentation — once you find something that works, you don't want to retype it.

## The bottom line

Z Image is worth trying if you haven't, and DrawThingsStudio doesn't require any special setup to use it — it just works. The main thing to remember is that Turbo variants want low guidance, and if you're using Workflow Builder over gRPC, include a config instruction so the model family is detected correctly.

---

*Next up: video generation with LTX-2 and what the DT Project Browser does with it.*
