# File Structure Plan

The repository is currently documentation-only. The following structure describes the layout once development begins.

```
textio/
├── src/                  # Application source code
│   ├── editor/           # Core editor components
│   ├── extensions/       # AI-generated and built-in extensions
│   ├── sandbox/          # Isolation layer for executing generated code
│   ├── manifest/         # Types and helpers for declarative UI manifests
│   └── ui/               # Rendering logic for manifests
├── tests/                # Unit and integration tests
│   ├── sandbox/          # Tests for sandbox and extension loader
│   └── editor/           # Tests for editor behaviours
├── scripts/              # Utility scripts (build, lint, etc.)
├── docs/                 # Additional project documentation
└── package.json          # Project metadata and npm scripts
```

This structure is expected to evolve as features are implemented.
