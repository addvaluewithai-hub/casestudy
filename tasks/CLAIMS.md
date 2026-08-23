# Claims and Wording Guardrails

## Safe claims

- Yasser led UX strategy and information architecture for the redesign.
- Yasser defined the new site structure and pages.
- A collaborating UI designer produced the final visual designs under Yasser's direction and feedback.
- Yasser developed the production site.
- The rebuild uses native WordPress Gutenberg/FSE and ACF rather than a page builder.
- The multilingual structure supports English, Arabic, and Hindi without a translation plugin architecture; Arabic uses RTL.
- The new catalog exposes 98 finishes with name/code search, collection, finish, and design-family filters plus pagination.
- The new product detail experience adds richer product context, specifications, application imagery, sample/enquiry CTAs, benefits, and related finishes.
- Many application images are AI-generated; exact product/material reference should remain visually and editorially distinct from conceptual scenes.
- Desktop PageSpeed/Lighthouse evidence supplied by the user shows performance 45 → 96 and LCP 6.8s → 1.1s. Present these as lab measurements, not business outcomes.
- Automated mobile Lighthouse evidence retained in the case-study repo shows performance 37 → 91, LCP 34.29s → 2.87s, and TBT 759ms → 0ms in a Lighthouse CLI mobile run using simulated throttling on a GitHub Actions runner. Always include or preserve that methodology context.

## Claims requiring care

- "Improved product discovery" — now defensible because search/filtering exists, but phrase around interface capability rather than measured user success unless user research/analytics are supplied.
- "Improved conversion" / "more leads" — NOT supported.
- "Designed for architects" / "primary audience is architects" — NOT confirmed.
- "The client came to me because..." — original client motivation is unknown.
- "I designed the UI" — inaccurate. Use UX strategy / information architecture / design direction; credit UI designer separately.
- "Perfect accessibility" / "perfect SEO" — do not infer from Lighthouse 100 scores.
- "AI accurately reproduces the material in real spaces" — too strong. Application scenes are conceptual unless a specific validation process proves otherwise.
- Do not generalize the old mobile LCP of 34.29s into a real-user loading-time claim. It is one retained automated lab run, not field telemetry.

## Preferred role wording

**Role:** UX strategy · information architecture · design direction · WordPress development · performance engineering

**Collaboration:** UI design by a collaborating designer, directed and reviewed by Yasser.

## Preferred narrative language

Avoid insulting the old site. Prefer:

- "The product website had outgrown its structure and presentation."
- "The redesign reorganized the experience around browsing, evaluating, and enquiring about materials."
- "The old product page presented the material; the new system gives customers more context for evaluating it."

Avoid empty hype such as "revolutionary," "world-class," "pixel-perfect," or "game-changing" unless specifically evidenced.
