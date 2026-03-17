---
layout: post
title: "DrawThingsStudio, Part 1: From Frustration to Feature-Complete"
date: 2026-03-17
---

Earlier this year I tried building a Draw Things client with Claude Code. It did not go smoothly. I burned through a week of LLM tokens and had almost nothing to show for it. I compared myself to the guy on the airplane complaining about spotty wifi — the fact that any of this works at all is remarkable, but still.

That was then. A lot has happened since.

What started as a wobbly gRPC experiment has grown into a full macOS app called **DrawThingsStudio**. It's free, it's open source, and if you use Draw Things regularly, maybe you'll find it useful.

## So what does it actually do?

DrawThingsStudio sits alongside Draw Things and extends it in ways the main app doesn't cover. The big ones:

- **Image Inspector** — drag any PNG onto it and instantly see every generation parameter that produced it. (Mostly) works with Draw Things, A1111, and ComfyUI images (in theory, I don't use A1111 or Comfy much, so I haven't tested this).
- **Generate Image** — send generation requests directly to Draw Things from DTS, with a persistent gallery of everything you've made.
- **Workflow Builder** — build and run StoryFlow instruction sequences visually, without touching JavaScript (check out [StoryFlow](https://cutsceneartist.com/DrawThings/StoryflowEditor_online.html), very impressive).
- **Story Studio** — create multi-scene visual narratives with consistent characters, settings, and styles across every image. This the hardest part to pull off in a way that is intuitive and easy - very much a work in progress.
- **DT Project Browser** — browse your Draw Things project databases directly, including thumbnails, full metadata, and video clips.

It also has LLM-powered prompt enhancement (via Ollama, LM Studio, or Jan), cloud model browsing, img2img support, and a dark mode that doesn't look like an afterthought.

## Who is this for?

If you use Draw Things and you've ever wished you could:

- Know exactly what settings produced an image you love (and easily recreate them)
- Run the same workflow repeatedly without copy-pasting JSON into Draw Things every time
- Keep characters visually consistent across a series of images
- Browse your generation history like a proper archive

...then DrawThingsStudio was built for you.

You don't need to be a developer. You don't need to touch any code. You do need a Mac running macOS 14 Sonoma or later, and Draw Things running on the same machine (or reachable over your network).

## Getting it

DrawThingsStudio is available on GitHub at [skeptict/DrawThingsStudio](https://github.com/skeptict/DrawThingsStudio). Download the latest release, unzip it, and drag it to your Applications folder. That's it. (Well, that's mostly it. You also need to use attr magic to let macOS trust it)
## What's next

Over the next few posts I'm going to walk through each major feature — not as a dry feature list, but as a real scenario: here's a situation you've probably been in, here's how DrawThingsStudio helps.

First up: the Image Inspector, which mostly works as I want it to, but is not yet as slick as other apps PromptReader or DTM.

---

*Have questions, bugs, or feature ideas? Open an issue on GitHub — I read every one, it just might take me while.*
