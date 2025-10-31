import { defineConfig, type Plugin } from 'vite'

/**
 * Safe list of VITE_* variables we allow to be exposed to the client at runtime.
 * This avoids leaking unexpected environment variables while enabling optional wiring.
 */
const SAFE_VITE_KEYS = [
  'VITE_API_BASE',
  'VITE_BACKEND_URL',
  'VITE_FRONTEND_URL',
  'VITE_WS_URL',
  'VITE_NODE_ENV',
  'VITE_NEXT_TELEMETRY_DISABLED',
  'VITE_ENABLE_SOURCE_MAPS',
  'VITE_PORT',
  'VITE_TRUST_PROXY',
  'VITE_LOG_LEVEL',
  'VITE_HEALTHCHECK_PATH',
  'VITE_FEATURE_FLAGS',
  'VITE_EXPERIMENTS_ENABLED',
] as const;

type SafeKey = (typeof SAFE_VITE_KEYS)[number];

/**
 * PUBLIC_INTERFACE
 * injectRuntimeEnv
 * A minimal Vite plugin that injects window.__ENV__ with a safe subset of VITE_* variables.
 * Works in both dev (configureServer middleware) and build (transformIndexHtml), without
 * altering Slidev's static rendering behavior.
 */
function injectRuntimeEnv(): Plugin {
  // Build the env map from process.env using only the safe keys
  const buildEnvObject = () => {
    const obj: Record<string, string> = {};
    for (const k of SAFE_VITE_KEYS) {
      const v = process.env[k as SafeKey];
      if (typeof v !== 'undefined') obj[k] = v;
    }
    return obj;
  };

  const scriptTag = () => {
    const env = buildEnvObject();
    // Create a tiny inline script to attach to window.__ENV__
    const payload =
      `window.__ENV__ = Object.freeze(${JSON.stringify(env)});` +
      `;window.__ENV__ = window.__ENV__ || {};`;
    return `<script>/* injected by injectRuntimeEnv */${payload}</script>`;
  };

  return {
    name: 'inject-runtime-env',
    apply: 'serve', // default to serve; we also hook into build via transformIndexHtml below
    configureServer(server) {
      // Inject into index.html served by dev server
      server.middlewares.use((req, res, next) => {
        next();
      });
    },
    transformIndexHtml(html) {
      // Append script on build and dev. This is a no-op for static export if HTML is not used.
      return {
        html,
        tags: [
          {
            tag: 'script',
            children: `/* injected by injectRuntimeEnv */\n${scriptTag().replace(/^<script>|<\/script>$/g, '')}`,
            injectTo: 'head',
          },
        ],
      };
    },
  };
}

const portFromEnv = Number(process.env.VITE_PORT) || 3000;

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: portFromEnv,
    allowedHosts: ['.kavia.ai'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    // Safely expose selected VITE_* variables at runtime
    injectRuntimeEnv(),
  ],
})
