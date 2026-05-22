# Node Types

Every element on the LoreFlow canvas is a node. Nodes connect to each other through directional edges.

## Overview

* **Start Node:** The required entry point of every graph. 
* **Scene Node:** The primary writing unit. Holds a dialogue sequence, choices, and flags.
* **Logic Node:** A conditional gate. Evaluates variable conditions and routes to different targets.
* **Switch Node:** Routes based on the exact value of a string variable (like a switch-case).
* **Jump Node:** Teleports the story to the beginning of another graph. 
* **Collection Node:** An organizational container. Stripped from game exports.

---

## Start Node

The Start node marks the entry point of a graph. Connect the Start node's output handle to the first Scene (or Logic) node the player should encounter. 

::: warning
Placing more than one Start node in a graph produces undefined behavior in the exporter.
:::

---

## Scene Node

### What a Scene contains (Default Schema)
| Field | Type | Purpose |
| --- | --- | --- |
| **Scene Title** | `text` | An internal label for navigation. |
| **Background Image** | `list` | The background art ID. |
| **BGM Track** | `list` | Background music to start. |
| **Scene Flags** | `flag_group` | Variable mutations that execute when the scene is entered. |
| **Dialogue Sequence**| `sequence` | An ordered list of spoken lines. |
| **Branching Choices**| `choice_list`| Player-facing option buttons. |

---

## Logic Node

The Logic node is a conditional gate. It has no dialogue — its only purpose is to evaluate game state and route the story.

### How conditions work
A Logic node contains one or more **routes**. The first true route wins. The last route is always the fallback.

```json
// Example: compound route with AND logic
{
  "operator": "AND",
  "conditions": [
    { "variable": "player_has_key", "op": "==", "value": true },
    { "variable": "door_unlocked", "op": "==", "value": false }
  ],
  "target": "node_unlock_door"
}
```

### Operators by variable type
| Variable type | Available operators |
| --- | --- |
| **boolean** | `==` `!=` |
| **number** | `==` `!=` `>` `<` `>=` `<=` |
| **string** | `==` `!=` |

---

## Switch Node

The Switch node routes the story based on the exact *value* of a string variable. 

::: tip
Prefer Switch over Logic whenever you're branching on a variable that can take more than two known values.
:::

---

## Jump Node

The Jump node is the cross-graph connector. In the game engine's runtime, hitting a Jump node means: "unload the current graph and start the target graph from its Start node." 

---

## Collection Node

The Collection node is a purely organizational tool. It is stripped from game data exports entirely and has no runtime behavior.