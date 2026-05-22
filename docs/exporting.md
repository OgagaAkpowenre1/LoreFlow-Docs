# Exporting

## Saving a Project (.lore file)

Clicking "Save Project" (the floppy disk icon) downloads a `.lore` file. This is a complete, portable backup of your entire project. 

---

## Game Data Export

Clicking the Download icon → "Export Game Data" produces an `_export.json` file.

### What the export contains
```json
{
  "version": "2.0",
  "metadata": {
    "projectName": "Shadows Over Lagos",
    "exportedAt": "2026-05-21T...",
    "startGraph": "Main Story"
  },
  "variables": {
    "wolf_dead":   { "type": "boolean", "default": false },
    "player_gold": { "type": "number",  "default": 0 }
  },
  "registry": {
    "blacksmith": [
      { "priority": 100, "condition": {...}, "graph": "blacksmith_wolf_done" },
      { "priority": 0,   "condition": null,  "graph": "blacksmith_intro" }
    ]
  },
  "locales": {
    "en": {...}, "fr": {...}
  },
  "graphs": {
    "blacksmith_intro": {
      "startNode": "node_abc123",
      "nodes": [
        {
          "id": "node_abc123",
          "type": "scene",
          "data": { "title": "The Forge", "dialogueLines": [...], ...},
          "next": {
            "choice_buy": "node_shop",
            "choice_leave": "node_farewell"
          }
        }
      ]
    }
  }
}
```

### Key export behaviors
* **Start and Collection nodes are stripped.** * **The `next` map is computed from edges.** * **Canvas layout (x, y positions) is excluded.** ---

## Strings CSV Export

Click the File Text icon to download a **Strings CSV** for external translation workflows. The CSV contains one row per translatable string with stable, hierarchical identifiers (`graphName.nodeId.line_N`). 

---

## Export Format Reference

| Export type | Filename | Contains | Use for |
| --- | --- | --- | --- |
| **Save Project** | `project_name.lore` | Complete project state | Backup and portability. |
| **Export Game Data** | `project_name_export.json`| Cleaned graphs, variables, registry | Drop into game engines. |
| **Strings CSV** | `project_name_strings.csv` | Translatable strings with keys | Send to translators. |

::: info
The `version` field in the export JSON is the data format version, not the LoreFlow application version. Your game engine runtime should read this field to determine which parser to use.
:::