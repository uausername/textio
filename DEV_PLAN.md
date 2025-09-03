# Development Plan

This document outlines milestones for building the AI‑customizable text editor and tracks current progress.

## Milestones
1. **Research & Architecture** *(in progress)*
   - Select headless editor framework (**Tiptap** chosen for MVP due to extension-friendly API).
   - Define sandbox model for executing AI-generated code safely (evaluate QuickJS vs WebContainers).
   - Draft minimal API contract that extensions can access.
2. **Minimal Prototype**
   - ~~Render a minimal Tiptap instance with slash-command palette.~~ *(completed; basic prototype in repo)*
   - Wire an LLM endpoint that proposes extensions.
   - Allow LLM to register a simple command extension in a sandbox.
3. **Extension Sandbox**
   - Implement isolation using QuickJS or WebContainers.
   - Restrict capabilities and expose a minimal API surface.
   - Provide a review/approval step before mounting new extensions.
4. **UI Manifest System**
   - Translate LLM output into declarative UI descriptions.
   - Host application renders panels/buttons based on manifests.
   - Persist accepted manifests to local storage for future sessions.
5. **Testing & Hardening**
   - Add unit tests for sandbox and extension loader.
   - Document security policies and review process.
   - Conduct manual security and UX reviews.

## Open Questions
- How to persist user-approved extensions across sessions?
- What review flow is required for network or file-system access?
- How to version generated extensions and allow rollback?
