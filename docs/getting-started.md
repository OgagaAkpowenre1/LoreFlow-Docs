# Getting Started

## What is LoreFlow?

LoreFlow is a browser-based visual editor designed specifically for the discipline of narrative design in games. It bridges the gap between creative writing and technical implementation — allowing writers to think spatially about their stories while automatically generating the structured data that game engines need to run them.

At its core, LoreFlow is a **node graph editor**. Your story is a network of connected boxes. Each box (a "node") represents a discrete story event — a scene with dialogue, a logic gate that evaluates game state, or a jump to a different conversation. The connections between boxes represent the paths a player can take through your world.

Unlike word processors or spreadsheets, LoreFlow never loses the *shape* of your story. You can see, at a glance, how many choices a player has after scene 12, whether a logic gate is reachable, or which branch leads to a dead end. The structure is the interface.

### Who it's for

| Role | How they use it |
| --- | --- |
| **Narrative Designers** | Architect complex branching dialogue trees and manage global game state variables without touching code. |
| **Game Writers** | Write thousands of lines of dialogue across multiple characters and scenes, organized into discrete, navigable graphs. |
| **Indie Developers** | Export clean JSON directly into Godot, Unity, or Unreal without a proprietary runtime dependency. |
| **Solo Creators** | Build and test entire visual novels or RPG dialogue systems in the browser, no installation required. |

---

## LoreFlow vs. Twine & Yarn Spinner

Twine and Yarn Spinner are respected tools with strong communities. But they were built for different constraints. LoreFlow is a purpose-built professional studio that makes different — and often better — trade-offs for serious game development pipelines.

| Feature | Twine | Yarn Spinner | LoreFlow |
| --- | --- | --- | --- |
| **Interface paradigm** | Node graph (basic) | Text editor / script file | ✓ Visual node graph, purpose-designed |
| **Compound logic conditions** | ✗ One condition per passage | ~ Script-level if/else | ✓ AND / OR groups per logic route |
| **Schema-driven fields** | ✗ Free-form text only | ✗ Script file, no field types | ✓ Typed field blueprints you define |
| **Multi-graph projects** | ✗ One story = one file | ~ Multiple files, no UI manager | ✓ Unlimited named graphs per project |
| **NPC conversation routing** | ✗ Manual, no registry concept | ✗ Written in game engine code | ✓ Priority-based registry, ships in JSON |
| **In-editor playtest** | ✓ Basic preview | ✗ Requires game engine to test | ✓ Full simulator with live variable sandbox |
| **Engine-agnostic export** | ~ Custom format, limited bridges | ✗ Unity-specific runtime | ✓ Clean JSON, any engine |

### The core philosophical difference

Twine treats the story as the primary artifact — it publishes playable HTML. Yarn Spinner treats the script as the primary artifact — it outputs text that the engine reads. **LoreFlow treats the data model as the primary artifact**. The exported JSON is the product, structured precisely for runtime systems to consume without any custom parsing logic or glue code.

---

## Quickstart Guide

From a blank project to a working branching dialogue in under ten minutes.

1. **Open LoreFlow in your browser:** No login, no installation. The editor loads with a blank canvas and a default graph called "Main Story."
2. **Name your project:** Click the project name field in the top navbar and type your project name. 
3. **Place a Start node:** Click the green play button in the navbar. Every graph must have exactly one.
4. **Add your first Scene node:** Click the blue "New Scene" button. A scene card appears on the canvas. 
5. **Connect the nodes:** Drag from the bottom handle of the Start node to the top handle of your Scene node.
6. **Add branching choices:** In the Inspector for your Scene node, scroll to "Branching Choices." Add two or three choice options. 
7. **Playtest it:** Click the "Playtest" button (the film play icon in the navbar) to walk through your dialogue in real-time.
8. **Export:** When ready, click the Download icon in the navbar and choose "Export Game Data."

::: tip
**Auto-save is always on.** Your work is written to browser LocalStorage every time you make a change. There's no save button to press during normal work — only use "Save Project" when you want a portable backup file.
:::

---

## Tech Requirements

LoreFlow runs entirely in the browser. It has no server-side component and requires no account.

| Requirement | Minimum | Recommended |
| --- | --- | --- |
| **Browser** | Any Chromium or Firefox (2022+) | Chrome or Edge (latest) |
| **JavaScript** | Must be enabled | — |
| **LocalStorage**| Must be available | — |
| **Connection** | Required on first load | Works offline after first load |
| **Screen width**| 1024px | 1440px or wider |

::: warning
**Use "Save Project" regularly.** Browser LocalStorage is not permanent storage. It can be cleared by browser privacy settings, incognito sessions, or disk cleanup tools. Export a `.lore` file regularly to keep a safe backup on disk.
:::