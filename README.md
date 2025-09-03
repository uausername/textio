# textio

An AI-driven, highly customizable text editor that starts from a minimal interface and lets users grow functionality with AI assistance.

## Vision
Our goal is to create a "blank" editor where an LLM can add or remove panels, commands, and behaviors on demand, so every user can shape the environment to their workflow.

## Status
The project is in an early research phase. There is no runnable code yet, but AGENTS.md captures exploration of existing tools and architectural ideas.

## Roadmap
- Build a minimal prototype (e.g., Tiptap or Lexical based) demonstrating dynamic AI-generated extensions.
- Add a secure sandbox for executing model-written plugins.
- Provide declarative UI manifests so AI proposals translate into safe interface changes.
- Document plugin APIs and contributor guidelines.

## Quick Start
```bash
git clone <repo-url>
cd textio
# once code is available
npm install
npm start
npm test
```

## AGENTS.md Summary
AGENTS.md surveys existing customizable editors like Emacs with gptel, VS Code with Continue, Obsidian, and headless frameworks such as Tiptap and Lexical. The research concludes that no mainstream editor yet lets AI reconfigure the UI on the fly, but these tools show a practical path. It also sketches how an LLM could generate and safely load extensions in a sandboxed environment.
