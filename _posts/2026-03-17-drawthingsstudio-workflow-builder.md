---
layout: post
title: "DrawThingsStudio, Part 4: Build It Once, Run It Forever"
date: 2026-03-17
---

Draw Things has a powerful scripting system called StoryFlow. If you've ever seen a `.js` file that someone dropped into Draw Things to run a multi-step generation sequence — maybe an img2img chain, or a loop that generates variations and picks the best one — that's StoryFlow.

The catch is that StoryFlow scripts are JavaScript. Not everyone wants to write JavaScript, and even people who can still don't want to do it every time they have a new idea for a workflow.

The Workflow Builder is a visual interface for creating those scripts. You build a sequence of instructions by clicking, not by typing code. When you're done, you run it directly from DrawThingsStudio — no copy-pasting into Draw Things required.

## The scenario

Say you want to:

1. Load a base image
2. Set a prompt and model
3. Run an img2img pass to refine it
4. Save the result with a specific filename

That's four instructions. In the Workflow Builder, it's four rows in a list. Each row has an inline editor for its specific parameters. Drag to reorder. Click the trash icon to remove. Add new instructions from the "+" menu.

## The instructions

There are over 50 instruction types covering everything Draw Things can do programmatically:

- **Prompts:** set the main prompt, negative prompt, or load one from a config preset
- **Generation triggers:** `canvasSave` runs a generation and saves the result; `generate` runs it without saving; `loopSave` iterates over a folder of images
- **Canvas operations:** load, save, crop, resize, move
- **Loops:** iterate a sequence N times, or over every file in a folder
- **Moodboard:** add reference images and set weights
- **Masks:** load masks for inpainting
- **Notes:** add plain-English comments to document what the workflow is doing

The Workflow Builder highlights if your workflow is missing a generation trigger (the instructions that actually tell Draw Things to make something) — easy to miss, potentially confusing if it slips through.

## Running it

Hit the Execute button in the toolbar. DrawThingsStudio runs through your instructions in order, calling Draw Things at each generation step, and shows you progress as it goes. Generated images appear in a results panel as they come in.

You can also export the workflow as a JSON file (for sharing or backup) or save it to your library for quick access later.

## LLM prompt enhancement

The Workflow Builder has an AI Enhance button. If you have an LLM running locally (Ollama, LM Studio, or Jan), you can select an enhancement style — Creative, Photorealistic, Artistic, and more — and the LLM will expand and improve your prompt before the workflow runs. You can customize the style list or write your own.

## The bottom line

If you find yourself running the same generation setup repeatedly, or you want to experiment with sequences that are tedious to set up manually, the Workflow Builder is where you want to be. Build it once, save it, run it whenever you want.

---

*Next up: Story Studio, where individual images become part of a larger visual narrative.*
