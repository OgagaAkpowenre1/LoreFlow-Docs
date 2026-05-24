# The Interface

## The Canvas

![LoreFlow Canvas](/loreflow-canvas-img.webp)

The canvas is the primary workspace — an infinite grid where your story graph lives. It is built on ReactFlow and supports all standard node graph interactions.

### Navigation

| Action | Input |
| --- | --- |
| **Pan** | Click and drag on empty canvas, or middle-mouse drag |
| **Zoom in / out** | Scroll wheel, or use the zoom controls (bottom-left) |
| **Fit all nodes** | Zoom controls → "Fit View" button (bottom-left) |
| **Select a node** | Left-click it |
| **Move a node** | Click and drag the node |
| **Deselect / close Inspector** | Click on empty canvas |
| **Connect two nodes** | Drag from a source handle (bottom circle) to a target handle (top circle) |
| **Delete an edge** | Click the edge line — a delete button appears at its midpoint |

### The Minimap
A small map panel in the bottom-right corner shows the entire graph at a glance. It is pannable and zoomable. 

### Viewport memory
When you switch between graphs using the Graph Navigator, LoreFlow saves and restores your exact pan position and zoom level for each graph individually. 

---

## Navbar

The navbar is a floating pill that appears centered at the top of the canvas. 

![LoreFlow Navbar](/loreflow-navbar-img.webp)

| Button | Action |
| --- | --- |
| **Project Name field** | Editable text input. Used as the default filename for exports. |
| **Green play icon** | Places a Start node on the canvas. |
| **New Scene (blue)** | Drops a Scene node onto the canvas. |
| **New Logic (orange)** | Drops a Logic node onto the canvas. |
| **New Switch (purple)** | Drops a Switch node onto the canvas. |
| **Jump (dark)** | Drops a Jump node onto the canvas. |
| **Film play icon** | Opens / closes the Playtest Simulator. |
| **Globe icon** | Opens the Localization menu. |
| **File text icon** | Exports a Strings CSV for translation. |
| **Download icon** | Export Game Data (engine-ready JSON). |
| **Save icon** | Save Project (full `.lore` backup file). |
| **Trash icon** | Reset Project — clears everything after a confirmation alert. |
| **Import button** | Load a previously saved `.lore` project file. |

---

## Inspector Sidebar

The Inspector is the right-side panel that opens when you click any node on the canvas. It is **resizable** — drag the left edge of the panel to make it wider or narrower.

![LoreFlow Inspector](/loreflow-inspector-1-img.webp)

### What the Inspector shows
* **Scene nodes:** Renders every field defined in your Blueprint schema (Title, Background, BGM, Flags, and the Sequence editor). 
* **Logic and Switch nodes:** Shows the condition builder interface (variable selectors, operators, and value inputs).
* **Jump nodes:** Shows a dropdown listing all other graphs in your project.

### The Sequence Editor (inside Scene node Inspector)
| Sequence Line Field | Description |
| --- | --- |
| **Speaker** | Who is speaking. Pulls from the "characters" Global List. |
| **Dialogue Text** | The spoken line. Supports `[variable_name]` token syntax. |
| **Portrait / Expression** | The character emotion sprite. Pulls from the "expressions" Global List. |
| **SFX** | A sound effect to trigger with this line. |

### Live token validation
The dialogue text field validates `[token]` syntax in real time. If you type `[gold_amount]` and it is registered in your Global Lists, the token highlights green. If not, it highlights red.

---

## Graph Navigator

The Graph Navigator is the left sidebar panel. It lists every graph in the current project. The sidebar is **collapsible** and **resizable**.


| Action | How |
| --- | --- |
| **Switch active graph** | Click any graph name. |
| **Create new graph** | Click the "+ New Graph" button. |
| **Rename a graph** | Double-click the graph name to enter edit mode. Press Enter to confirm. |
| **Duplicate a graph** | Right-click or hover a graph → click the Copy icon. |
| **Delete a graph** | Hover → click the trash icon. Cannot delete the last remaining graph. |
| **Set as Entry Point** | Click the Flag icon next to a graph name. Marks it as the `startGraph`. |

---

## Settings Editor

![LoreFlow Settings](/loreflow-blueprints-img.webp)

The Settings Editor is a full-screen modal overlay opened by clicking the gear icon. 

::: info
Think of the Settings Editor as your "engine configuration." The **Blueprint** tab defines *what fields exist* on nodes. The **Global Lists** tab defines *what values those fields can hold*. The **Registry** tab defines *how the engine routes conversations* to NPCs.
:::

### Tab 1: Blueprints
* `text` - Single-line text input
* `number` - Numeric input (integer or float)
* `list` - Dropdown linked to a Global List
* `flag_group` - Set of variable mutations on scene entry
* `sequence` - Ordered list of dialogue lines
* `choice_list` - Player-facing choice options with output handles

### Tab 2: Global Lists
* **Simple Lists:** An array of string values (e.g., character names, background images).
* **Variable Lists:** Holds typed game state variables (boolean, number, or string) with default values and allowed states.

### Tab 3: Conversation Registry
The Conversation Registry tells the game engine which graph to load when a player talks to a specific NPC. 

```json
// Registry entry for "blacksmith" NPC:
{
  "blacksmith": [
    {
      "priority": 100,
      "condition": { "variable": "wolf_dead", "op": "==", "value": true },
      "graph": "blacksmith_wolf_done"
    },
    {
      "priority": 0,
      "condition": null,   // always-true fallback
      "graph": "blacksmith_intro"
    }
  ]
}
```