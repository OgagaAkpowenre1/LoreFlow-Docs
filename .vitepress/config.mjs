import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "docs",
  title: "LoreFlow",
  description: "Visual Narrative Logic Suite",
  themeConfig: {
    // Top Navigation Bar
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/getting-started" },
    ],

    // Left Sidebar
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "What is LoreFlow?",
            link: "/getting-started#what-is-loreflow",
          },
          {
            text: "vs. Twine & Yarn Spinner",
            link: "/getting-started#loreflow-vs-twine-yarn-spinner",
          },
          {
            text: "Quickstart Guide",
            link: "/getting-started#quickstart-guide",
          },
          {
            text: "Tech Requirements",
            link: "/getting-started#tech-requirements",
          },
        ],
      },
      {
        text: "The Interface",
        items: [
          { text: "The Canvas", link: "/interface#the-canvas" },
          { text: "Navbar", link: "/interface#navbar" },
          { text: "Inspector Sidebar", link: "/interface#inspector-sidebar" },
          { text: "Graph Navigator", link: "/interface#graph-navigator" },
          { text: "Settings Editor", link: "/interface#settings-editor" },
        ],
      },
      {
        text: "Node Types",
        items: [
          { text: "Overview", link: "/nodes#node-types" },
          { text: "Start Node", link: "/nodes#start-node" },
          { text: "Scene Node", link: "/nodes#scene-node" },
          { text: "Logic Node", link: "/nodes#logic-node" },
          { text: "Switch Node", link: "/nodes#switch-node" },
          { text: "Jump Node", link: "/nodes#jump-node" },
          { text: "Collection Node", link: "/nodes#collection-node" },
        ],
      },
      {
        text: "Core Systems",
        items: [
          { text: "Blueprint System", link: "/core-systems#blueprint-system" },
          { text: "Variables & Lists", link: "/core-systems#variables-lists" },
          {
            text: "Conversation Registry",
            link: "/core-systems#conversation-registry",
          },
          {
            text: "Playtest Simulator",
            link: "/core-systems#playtest-simulator",
          },
          { text: "Localization", link: "/core-systems#localization" },
        ],
      },
      {
        text: "Exporting",
        items: [
          {
            text: "Save Project (.lore)",
            link: "/exporting#saving-a-project-lore-file",
          },
          { text: "Game Data Export", link: "/exporting#game-data-export" },
          { text: "Strings CSV", link: "/exporting#strings-csv-export" },
          {
            text: "Export Format Reference",
            link: "/exporting#export-format-reference",
          },
        ],
      },
    ],
  },
});