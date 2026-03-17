---
layout: post
title: "DrawThingsStudio: Video Generation and the DT Project Browser"
date: 2026-03-26
---

Draw Things added video generation with LTX-2 in late February, and the March updates have been iterating on it fast — LTX-2.3 22B landed just last week, with spatial upscalers on top of that. If you've been generating video clips in Draw Things, you may have noticed your project databases are getting interesting in a hurry.

DrawThingsStudio's DT Project Browser was actually built with video in mind from early on, so it handles this pretty gracefully.

## What the DT Project Browser does with video

When you open a Draw Things project database that contains video generations, the Browser groups clips together automatically — all the frames from a single generation appear as one entry in the thumbnail grid rather than dozens of individual frames. Click the entry and you get a preview of the clip along with its full metadata: prompt, model, dimensions, frame count, timestamp.

If you want to see the individual frames, there's a toggle — **Grouped / All Frames** — in the toolbar. Useful if you're looking for a specific frame to pull out as a still.

**Export:** The detail panel has a `.mov` export button for video entries. It packages the frames into a proper QuickTime file, which you can then drop into whatever you're editing in. This is probably the most immediately practical thing the Browser does with video — Draw Things generates the clip, you pull it out as a `.mov` in two clicks.

## LTX-2 and audio

LTX-2 added audio generation alongside video, which is a genuinely new thing for Draw Things to be doing. The audio shows up in the DT Project Browser too — if a generation has audio, the detail panel includes an audio playback control so you can listen to it before deciding whether to export.

## A few things to know about LTX-2 in DrawThingsStudio

DrawThingsStudio detects LTX-2 as a video model automatically, so the Generate Image view adjusts accordingly — frame count controls become available, and the config handles the model-specific settings without you having to do anything special.

The spatial upscalers that arrived with LTX-2.3 are accessible through the standard refiner/upscaler selector in Generate Image. Worth experimenting with if you want to push output resolution higher after an initial generation.

**Storage:** Video files are larger than stills, which means your DrawThingsStudio gallery folder can grow quickly. If you want the output going somewhere specific — an external drive, a video project folder — go to Settings → Storage and point the Generated Images folder wherever makes sense for your setup.

## The honest caveat

Video generation is still early, and "early" means results are inconsistent in ways that image generation mostly isn't anymore. LTX-2 can be magical and it can be baffling, sometimes in the same generation run. DrawThingsStudio makes it easy to organize and export what you get — it can't make the model behave, unfortunately.

That said, the DT Project Browser's clip grouping and `.mov` export make the post-generation workflow considerably less annoying than fishing through raw frame files would be. Small mercies.

---

*Have something working well with Z Image or LTX-2 that you'd like to see covered? Open an issue on [GitHub](https://github.com/skeptict/DrawThingsStudio) — feedback genuinely shapes what gets built next.*
