# Core Systems

## Blueprint System

LoreFlow is **schema-driven**. Instead of hardcoding what information a Scene node holds, the editor renders its form entirely from the Blueprint configuration in your Settings. 

### The Default Blueprint (Scene Node)
* `title` (text) - Scene Title
* `background` (list → backgrounds) - Background Image
* `flags` (flag_group) - Scene Flags
* `music` (list → music_tracks) - BGM Track
* `dialogueLines` (sequence) - Dialogue Sequence
* `choices` (choice_list) - Branching Choices

---

## Variables & Lists

Variables are the memory of your game world. They track what the player has done, what they carry, and what has happened.

### Defining a variable
Open Settings → Global Lists. Add a new list and mark it as a "variable" type list. 

```json
// Example variables in a project
"wolf_dead":    { "type": "boolean", "default": false }
"player_gold":  { "type": "number",  "default": 0 }
"player_class": { "type": "string",  "default": "warrior",
                  "allowedValues": ["warrior", "mage", "rogue"] }
```

### Using variables in dialogue text
Variables can be embedded inline in any dialogue text using square bracket syntax: `[variable_name]`. 

*Example: "You have `[player_gold]` coins. That's barely enough."*

---

## Conversation Registry

The Conversation Registry tells the game engine which graph to load when a player talks to a specific NPC. All of this logic ships *inside the exported JSON*, removing the need for custom routing code in the game engine.

---

## Playtest Simulator

The Simulator is a full in-browser dialogue engine that lets you walk through your story as a player would. 

### Two play modes
* **Graph mode:** Pick any graph from the dropdown and press Play. 
* **NPC mode:** Pick any NPC from the Conversation Registry. The Simulator evaluates the registry rules against the current sandbox state and loads the matched graph automatically.

---

## Localization

* **Adding a language:** Click the Globe icon in the navbar and enter a language code (e.g. `fr`, `ja`).
* **Switching active language:** When a language other than English is active, the Inspector can display translated versions of dialogue text fields.
* **Locales in export:** The Game Data export includes the full `locales` object, keyed by language code.