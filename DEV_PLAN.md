# Development Plan

This document outlines the initial milestones for building the AI-customizable text editor.

## Milestones
1. **Research & Architecture**
   - Finalize technology choice (Tiptap or Lexical).
   - Define sandbox model for executing AI-generated code safely.
2. **Minimal Prototype**
   - Render an empty editor with slash-command palette.
   - Allow LLM to propose extensions and register them in a sandbox.
3. **Extension Sandbox**
   - Implement isolation using QuickJS or WebContainers.
   - Restrict capabilities and expose a minimal API surface.
4. **UI Manifest System**
   - Translate LLM output into declarative UI descriptions.
   - Host application renders panels/buttons based on manifests.
5. **Testing & Hardening**
   - Add unit tests for sandbox and extension loader.
   - Document security policies and review process.

## Open Questions
- How to persist user-approved extensions across sessions?
- What review flow is required for network or file-system access?
