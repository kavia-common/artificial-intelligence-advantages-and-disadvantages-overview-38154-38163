# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show locally:

- `pnpm install`
- `pnpm dev`
- Visit http://localhost:3000 (default) or the forwarded URL your environment provides

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Environment variables (optional)

This project supports optional runtime wiring for a safe subset of `VITE_*` variables through a Vite plugin. You can define these in a `.env` file or your environment before starting the dev server or during build. Any variables not set are simply omitted.

Recognized keys:
- VITE_API_BASE
- VITE_BACKEND_URL
- VITE_FRONTEND_URL
- VITE_WS_URL
- VITE_NODE_ENV
- VITE_NEXT_TELEMETRY_DISABLED
- VITE_ENABLE_SOURCE_MAPS
- VITE_PORT
- VITE_TRUST_PROXY
- VITE_LOG_LEVEL
- VITE_HEALTHCHECK_PATH
- VITE_FEATURE_FLAGS
- VITE_EXPERIMENTS_ENABLED

Port configuration:
- The dev server port is read from `VITE_PORT` when provided.
- If `VITE_PORT` is not set, the dev server defaults to `3000`.

Example `.env` snippet:
```
# Core URLs (optional)
VITE_API_BASE=https://api.example.com
VITE_BACKEND_URL=https://backend.example.com
VITE_FRONTEND_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000

# Dev server port (optional, defaults to 3000)
VITE_PORT=3000

# Misc toggles (optional)
VITE_NODE_ENV=development
VITE_ENABLE_SOURCE_MAPS=true
VITE_LOG_LEVEL=info
```
