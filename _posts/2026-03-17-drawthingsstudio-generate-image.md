---
layout: post
title: "DrawThingsStudio, Part 3: Generate Without Switching Apps"
date: 2026-03-19
---

Draw Things is great. But here's something slightly awkward about it: the moment you want to do anything *around* your generations — compare results, track settings, try the same prompt with three different models — you're back to juggling Finder windows, copy-pasting filenames, and hoping your memory is better than it is.

DrawThingsStudio's Generate Image view doesn't replace Draw Things. It talks to Draw Things, lets you drive it from a proper persistent interface, and keeps a gallery of everything you've made.

## Setting up the connection

First things first: Draw Things needs to be running and its API needs to be enabled. In Draw Things, go to Settings and turn on the API server. By default it listens on port 7860 (HTTP) or 7859 (gRPC). Either one works with DrawThingsStudio.

In DrawThingsStudio, go to Settings → Draw Things. Enter the host (usually `localhost` if both apps are on the same Mac) and choose HTTP or gRPC. Hit the connect button. If it works, you'll see the connection indicator turn green and your available models will load.

gRPC is the more capable connection — it handles larger images and gives you progress updates during generation. HTTP is simpler and works fine for most use cases. When in doubt, start with HTTP.

## Running a generation

The Generate Image view is set up like a focused version of Draw Things' own interface. You've got:

- **Prompt and negative prompt** fields at the top
- **Model picker** with your loaded models (plus a searchable cloud catalog of ~400 community models)
- **Config presets** — if you've exported a config from Draw Things, you can import it here as a preset and apply it in one click
- **All the standard parameters** — dimensions, steps, guidance, sampler, seed, LoRAs, and more
- **A quick-preset grid** for your nine most-used configurations

Hit Generate. Draw Things does the work. The result appears in the gallery below.

## img2img

Drop a source image onto the source image drop zone (or use the file picker) and DrawThingsStudio switches to img2img mode automatically. The strength slider controls how much the source image influences the result. Clear the source image to go back to text-to-image.

## The gallery

Every image you generate is saved automatically to a folder inside the app's container, with a metadata sidecar. The gallery keeps a running timeline. Click any thumbnail to see the full image and all its parameters. Click "Describe with AI" to get a vision model's take on what it's looking at.

"Send to Workflow Builder" sends the prompt and config to the Workflow Builder view, which is handy if you want to turn a successful generation into a repeatable workflow.

## The bottom line

Generate Image is a pretty direct path from "I have an idea" to "I have an image" without leaving DrawThingsStudio. And the gallery means no more hunting through Finder for that generation from last Tuesday — which, for me at least, was worth it right there.

---

*Next up: the Workflow Builder, where you stop generating one image at a time and start thinking in sequences.*
