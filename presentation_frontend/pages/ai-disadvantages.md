# Disadvantages: Risk & Reliability

<div class="grid-2 mt-2">
  <div class="card inner-soft">
    <div class="eyebrow">Hallucinations</div>
    <ul class="points-clean">
      <li>Confident but incorrect responses</li>
      <li>Requires verification and human oversight</li>
      <li>Mitigate with retrieval, constraints, and evals</li>
    </ul>
  </div>
  <div class="card offset-border">
    <div class="eyebrow">Robustness</div>
    <ul class="points-clean">
      <li>Susceptible to prompt injection and jailbreaks</li>
      <li>Model drift over time without monitoring</li>
      <li>Adversarial inputs can degrade outputs</li>
    </ul>
  </div>
</div>

---

# Disadvantages: Ethics & Compliance

<div class="card-grid three mt-2">
  <div class="feature-card">
    <div class="eyebrow">Bias</div>
    <h3 class="feature-title">Fairness challenges</h3>
    <ul class="points-clean">
      <li>Training data may contain historical bias</li>
      <li>Unequal error rates across groups</li>
      <li>Requires auditing, documentation, and red‑teaming</li>
    </ul>
  </div>
  <div class="feature-card">
    <div class="eyebrow">Privacy</div>
    <h3 class="feature-title">Data handling</h3>
    <ul class="points-clean">
      <li>PII exposure risks and data leakage</li>
      <li>Jurisdictional constraints (e.g., GDPR)</li>
      <li>Retention, minimization, and access controls</li>
    </ul>
  </div>
  <div class="feature-card">
    <div class="eyebrow">IP & Content</div>
    <h3 class="feature-title">Attribution & licensing</h3>
    <ul class="points-clean">
      <li>Training data provenance and rights</li>
      <li>Output ownership uncertainty</li>
      <li>Watermarking and citation strategies</li>
    </ul>
  </div>
</div>

---

# Disadvantages: Cost & Change Management

<div class="split-cols mt-2">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">Economics</div>
      <h3 class="feature-title">Hidden costs</h3>
      <ul class="points-clean">
        <li>Inference spend and rate limits</li>
        <li>Latency, reliability, and vendor lock‑in</li>
        <li>Specialized talent and tooling investments</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">Operations</div>
      <h3 class="feature-title">Change fatigue</h3>
      <ul class="points-clean">
        <li>New workflows and controls</li>
        <li>Upskilling and training needs</li>
        <li>Stakeholder alignment and communications</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame short">
      <div class="placeholder">ROI sensitivity plot</div>
    </div>
    <div class="card">
      <div class="eyebrow">Mitigations</div>
      <ul class="points-clean">
        <li>Pilot, measure, and iterate</li>
        <li>Guardrails, policies, and audits</li>
        <li>Fallbacks and clear escalation paths</li>
      </ul>
    </div>
  </div>
</div>
