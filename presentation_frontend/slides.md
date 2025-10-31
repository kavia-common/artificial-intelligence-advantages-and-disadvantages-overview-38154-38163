---
# Global deck settings
theme: default
title: "Artificial Intelligence: Advantages and Disadvantages"
info: |
  A balanced, professional overview of AI's opportunities and risks.
  Designed with the Ocean Professional (light) theme utilities.
class: text-left
mdc: true
transition: slide-left
fonts:
  sans: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial
  mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
css: |
  @import "./style.css";
---

# Artificial Intelligence
<div class="title-slide with-hero-glow grain-overlay">
  <div class="hero-copy">
    <div class="badge blue">Ocean Professional</div>
    <h2 class="text-hero">Advantages and Disadvantages</h2>
    <p class="subtitle text-md">A concise, balanced overview for decision‑makers</p>
    <div class="subtitle text-xs">Presenter • {{ new Date().toLocaleDateString() }}</div>
    <div class="mt-2">
      <!-- PUBLIC_INTERFACE: Begin button advances to the next slide -->
      <button class="btn-primary" @click="$slidev.nav.next()">Begin</button>
      <!-- PUBLIC_INTERFACE: Download PDF triggers Slidev export route (when available) -->
      <a class="btn-secondary" href="/download" target="_blank" rel="noopener">Download PDF</a>
    </div>
  </div>
</div>

---

# Agenda

<div class="card-grid two mt-2">
  <div class="card">
    <div class="eyebrow">Orientation</div>
    <ul class="points-clean">
      <li>What is AI today?</li>
      <li>Where it adds value</li>
      <li>Where it creates risk</li>
    </ul>
  </div>
  <div class="card">
    <div class="eyebrow">Flow</div>
    <ul class="points-clean">
      <li>Overview & Definitions</li>
      <li>Advantages</li>
      <li>Disadvantages</li>
      <li>Ethics & Governance</li>
      <li>Implementation Considerations</li>
      <li>Conclusion</li>
    </ul>
  </div>
</div>

---

# AI Overview

<div class="split-cols mt-2">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">Definition</div>
      <h3 class="feature-title">What we mean by "AI"</h3>
      <ul class="points-clean">
        <li>Systems that perform tasks requiring human-like intelligence</li>
        <li>Includes ML, deep learning, generative models, and reasoning engines</li>
        <li>Rapidly evolving with foundation models and tool-use</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">Context</div>
      <h3 class="feature-title">Where AI is used</h3>
      <ul class="points-clean">
        <li>Customer support, content generation, analytics</li>
        <li>Automation, personalization, forecasting</li>
        <li>Scientific discovery and software development</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame tall">
      <div class="placeholder">Illustration: AI capability spectrum</div>
    </div>
  </div>
</div>

---

# Advantages at a Glance

<div class="stats-band mt-2">
  <div class="stat-card">
    <div class="stat-number">10x</div>
    <div class="stat-label">Productivity</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">60–80%</div>
    <div class="stat-label">Task Automation</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">24/7</div>
    <div class="stat-label">Availability</div>
  </div>
</div>

---

src: ./pages/ai-advantages.md
---

# Disadvantages at a Glance

<div class="card-grid three mt-2">
  <div class="feature-card">
    <div class="eyebrow">Risk</div>
    <h3 class="feature-title">Bias & Fairness</h3>
    <p class="muted">Models can amplify inequities if data or processes are skewed.</p>
  </div>
  <div class="feature-card">
    <div class="eyebrow">Exposure</div>
    <h3 class="feature-title">Security & Privacy</h3>
    <p class="muted">Sensitive data handling, prompt injection, model exfiltration.</p>
  </div>
  <div class="feature-card">
    <div class="eyebrow">Reliability</div>
    <h3 class="feature-title">Hallucinations</h3>
    <p class="muted">Confidently wrong outputs can mislead decisions.</p>
  </div>
</div>

---

src: ./pages/ai-disadvantages.md
---

# Comparison: When to Use AI

<div class="grid-2 mt-2">
  <div class="card inner-soft">
    <div class="eyebrow">High Fit</div>
    <ul class="points-clean">
      <li>Large volumes of semi-structured data</li>
      <li>Probabilistic tasks with tolerance for error</li>
      <li>Human-in-the-loop for oversight</li>
      <li>Clear cost or speed benefits</li>
    </ul>
  </div>
  <div class="card offset-border">
    <div class="eyebrow">Low Fit</div>
    <ul class="points-clean">
      <li>Safety-critical, deterministic requirements</li>
      <li>High regulatory burden with limited guardrails</li>
      <li>No labeled data or clear success metrics</li>
      <li>Opaque decision-making unacceptable</li>
    </ul>
  </div>
</div>

---

# Ethics & Governance

<div class="card-grid two mt-2">
  <div class="card">
    <div class="eyebrow">Principles</div>
    <ul class="points-clean">
      <li>Transparency and explainability</li>
      <li>Fairness and non‑discrimination</li>
      <li>Privacy by design</li>
      <li>Accountability and recourse</li>
    </ul>
  </div>
  <div class="card">
    <div class="eyebrow">Controls</div>
    <ul class="points-clean">
      <li>Data governance & model documentation</li>
      <li>Red-teaming, alignment, and evals</li>
      <li>Policy, training, and access controls</li>
      <li>Monitoring drift and continuous review</li>
    </ul>
  </div>
</div>

---

# Implementation Considerations

<div class="split-cols mt-2">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">Architecture</div>
      <h3 class="feature-title">Pragmatic setup</h3>
      <ul class="points-clean">
        <li>Choose: API vs self‑hosted vs hybrid</li>
        <li>Retrieval (RAG), function calling, guardrails</li>
        <li>Observability: logs, traces, eval dashboards</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">Operations</div>
      <h3 class="feature-title">Run with confidence</h3>
      <ul class="points-clean">
        <li>Security reviews and privacy assessments</li>
        <li>Rate limits, cost caps, and caching</li>
        <li>Human‑in‑the‑loop escalation paths</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame short">
      <div class="placeholder">Diagram: AI service mesh + policy</div>
    </div>
    <div class="card">
      <div class="eyebrow">Environment</div>
      <ul class="points-clean">
        <li>Respect runtime variables for deployments</li>
        <li class="muted">VITE_API_BASE, VITE_BACKEND_URL, VITE_FRONTEND_URL, VITE_WS_URL</li>
        <li class="muted">VITE_NODE_ENV, VITE_ENABLE_SOURCE_MAPS, VITE_PORT, VITE_TRUST_PROXY</li>
        <li class="muted">VITE_LOG_LEVEL, VITE_HEALTHCHECK_PATH, VITE_FEATURE_FLAGS, VITE_EXPERIMENTS_ENABLED</li>
      </ul>
    </div>
  </div>
</div>

---

# Conclusion

<div class="cta-band mt-2">
  <div>
    <div class="overline">Key Takeaway</div>
    <h2 class="text-hero">AI is powerful—use it responsibly.</h2>
    <p class="muted">Maximize benefits through clear goals, guardrails, and iterative learning with human oversight.</p>
    <div class="cta-actions">
      <button class="btn-primary">Adopt with Guardrails</button>
      <button class="btn-secondary">Review Governance</button>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="eyebrow">Next Steps</div>
      <ul class="points-clean">
        <li>Define success metrics and risk thresholds</li>
        <li>Pilot with a narrow, high‑value use case</li>
        <li>Instrument evaluation and monitoring</li>
      </ul>
    </div>
  </div>
</div>

---

layout: center
class: text-center
---

# Thank You

Questions?

<div class="mt-4 subtle">Press S for presenter mode • Press E to open editor • Use arrow keys to navigate</div>
