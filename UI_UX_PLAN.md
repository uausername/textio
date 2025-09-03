# UI/UX Plan

The editor starts with an almost blank canvas and grows with user intent.

## Core Concepts
- **Minimal Start**: initial interface shows only a text area and a command palette.
- **Slash Commands**: users type `/` to request features or actions.
- **AI-Suggested Panels**: LLM proposes UI panels (e.g., formatting toolbar, outline view) which the user can accept or dismiss.
- **Extension Approval**: proposed panels/extensions appear with a preview and require user confirmation before mounting.
- **Customizable Layout**: accepted panels can be rearranged, hidden, or removed through commands.

## User Flow
1. User types `/bold` → LLM proposes a formatting panel with a preview.
2. User accepts the proposal; the panel is mounted and registered in the sandbox.
3. User removes panel via `/hide formatting` or declines the proposal.
4. Layout preferences and accepted manifests are stored for future sessions.

## Accessibility & Feedback
- Keyboard-first interactions with accessible labels.
- Lightweight notifications explain new panels or commands and show when sandboxed code is executing.
- Undo/rollback available for AI-added features.
- Confirmation dialogs for actions that request elevated capabilities.
