---
layout: post
title: "DrawThingsStudio, Part 5: Tell a Story"
date: 2026-03-17
---

Here's the hard problem with AI image generation and narrative: consistency.

You can generate a beautiful character. You can generate a beautiful setting. Getting the same character to appear in a dozen different scenes, with the same face and the same visual style, without starting from scratch every time — that's where things get difficult. There's a lot of prompt archaeology involved. A lot of re-entering the same LoRA weights and reference images and negative prompts for each new scene.

Story Studio is DrawThingsStudio's answer to that problem. It's a workspace for building visual narratives where the consistency work is done once, up front, and every scene benefits from it automatically.

## The structure

A Story Studio project has three building blocks:

**Characters** — the people, creatures, or objects that appear across your scenes. Each character has a name, a description, a primary reference image, LoRA associations, moodboard weights, and as many appearance variants as you need (young/old, casual/formal, happy/distressed). You define them once.

**Settings** — the places where scenes happen. Each setting has a description, a reference image, and its own prompt fragments. Again, defined once.

**Scenes** — where characters and settings come together. Each scene specifies which characters are present (and in what expression, pose, and position), which setting it takes place in, a camera angle, a mood, and the action or moment being depicted. DrawThingsStudio assembles the final generation prompt automatically from all of those pieces.

## How a scene comes together

When you're working on a scene, you're making creative choices, not writing prompts. You pick a setting from your list. You add characters and specify how they're showing up in this moment. You set the mood and camera. You add any scene-specific notes.

DrawThingsStudio takes all of that and composes a prompt: art style, setting description, character appearances, action, camera, mood — combined in a consistent order every time. The moodboard references and LoRA weights come along automatically.

Then you generate. Results appear as variants in a panel below the scene. Pick the best one, approve it, move on to the next scene.

## Keeping track

The left panel shows your project as a tree: project → chapters → scenes. Approved scenes get a checkmark. You can see at a glance which scenes are done and which still need work.

Characters and settings are shared across the whole project, so updating a character's LoRA weight once updates every scene that includes them. No hunting through individual scenes to fix something you changed your mind about.

## The bottom line

Story Studio doesn't make consistency automatic — AI image generation is still probabilistic and sometimes stubborn — but it makes the *attempt* at consistency dramatically less tedious. If you've been wanting to tell a visual story but kept running aground on the logistics of keeping it coherent, this is the feature to try.

---

*Next up: the DT Project Browser, for digging back through everything Draw Things has ever made for you.*
