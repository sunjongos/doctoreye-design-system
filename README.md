# Doctor Eye Design System

닥터아이 (Doctor Eye) — an AI-powered medical agent and healthcare platform by **파이헬스케어 (Pi Healthcare)**. This design system captures Doctor Eye's brand foundations, typography, color tokens, and UI components so designers and engineers can ship consistent, trustworthy medical interfaces.

## Product context

Doctor Eye is a vision-care and eye-health platform that bridges AI diagnostics, clinical IT infrastructure, and patient-facing digital healthcare tools. The brand tone is **Reliable & Professional**, **Clean & Hygienic**, and **Soft & Accessible** — designed for a broad audience (clinicians, administrators, and patients of all ages).

Core surfaces represented in this system:
- **Patient app** — mobile/web surface where patients view eye-health results, book appointments, track vision exercises.
- **Clinician dashboard** — desktop surface for eye-care professionals reviewing AI-assisted diagnostics, patient lists, and exam reports.

## Sources

- **Repo:** [sunjongos/doctoreye-design-system](https://github.com/sunjongos/doctoreye-design-system) (`main` branch)
  - `DESIGN.md` — canonical brand + token definitions (Korean source of truth)
  - `tailwind.config.js` — color + font tokens
  - `src/App.tsx`, `src/index.css`, `src/App.css` — component patterns (card, btn-primary)
  - `public/favicon.svg`, `public/icons.svg` — **note:** these are Vite scaffolding, not Doctor Eye brand assets. No real brand logo was available; we drew a minimal wordmark/eye mark in the spirit of the brand and **flagged it for user review**.

## Index

| File | Purpose |
| --- | --- |
| `README.md` | This file — context, content fundamentals, visual foundations, iconography |
| `SKILL.md` | Agent skill entrypoint (also usable as a Claude Code skill) |
| `colors_and_type.css` | CSS variables — raw tokens + semantic roles + type scale |
| `fonts/` | Web-font CSS import notes (Pretendard, Noto Sans KR) |
| `assets/` | Logo marks, favicon, sample illustrations |
| `preview/` | Small HTML cards rendered in the Design System tab |
| `ui_kits/patient-app/` | React kit for the patient app (home, results, booking, profile) |
| `ui_kits/clinician-dashboard/` | React kit for the clinician dashboard (patient list, exam viewer, report) |

## Content fundamentals

Doctor Eye's copy is **short, reassuring, and clinically precise**. It must read naturally in Korean and English; the source is Korean, English is a careful translation — no marketing fluff.

- **Voice:** calm expert. Speak to the patient in `-요`/`-세요` (polite, warm Korean) and to clinicians in plain polite forms. In English, use "you" for patients, neutral third-person for clinical reports.
- **Tone balance:** 70% clinical clarity / 30% warmth. Avoid slang. Avoid exclamation marks except in congratulatory moments ("오늘의 비전 체크를 완료했어요!").
- **Casing:** Title Case for product surfaces ("Vision Check", "My Eye Report"). Sentence case for body copy and buttons. UPPERCASE reserved for tiny labels (`NEW`, `AI`) and never used on paragraphs.
- **Numbers & units:** always paired with units and never abbreviated in headlines. `20/20 시력`, `안압 14 mmHg`, `좌안 / 우안` (L / R). Decimals use a period; thousands separators use a comma.
- **I vs. you:** brand never says "we" to patients; it says "Doctor Eye will…" in neutral voice, or "당신의 눈을 위해". Patients are addressed as "you" / "님" — never by medical condition.
- **Emoji:** not part of the brand voice. The DESIGN.md example uses `💡` in a demo alert but this is a scaffolding artifact; production copy relies on the SVG icon set instead.
- **Reassurance patterns:** Every alarming result is paired with a next step. Never leave a patient with a red number and no CTA.
- **Examples**
  - ✅ "오늘의 비전 체크를 완료했어요. 결과를 확인해 보세요." → "Your vision check is complete. View your results."
  - ✅ "안압이 평소보다 약간 높아요. 담당 의료진과 상담을 권장합니다." → "Intraocular pressure is slightly elevated. We recommend consulting your care team."
  - ❌ "WOW! Great job finishing your exam 🎉" — too casual, emoji, exclamation overuse.

## Visual foundations

### Color

- **Mint Green `#17B798`** — primary. Used for CTAs, active tabs, success states, and small accent marks (the vertical pill beside section titles). The vibe is clinical-fresh, not neon.
- **Dark Navy `#1A2B3C`** — primary text, top-nav backgrounds, secondary buttons with high presence.
- **Surface Gray `#F4F7F6`** — page background. Near-white with a faint cool-mint cast that reads as "clean clinic air".
- **White `#FFFFFF`** — card surface. Used liberally; content lives on white, environment is gray.
- **Accents** — Health Green `#92C118` (positive/vitality), Doctor Blue `#0087B6` (info/diagnostic), Warning Orange `#F29D00` (caution). Never used as backgrounds at full saturation; tinted variants only.

Imagery sits in a **cool-bright** palette — clean whites, soft teals, glass/medical device photography. Avoid warm/amber tones and high grain. No b&w. No duotone effects.

### Typography

- **Primary:** `Pretendard` (Korean-first neo-grotesque, large x-height, excellent legibility on mobile). Fallback `Noto Sans KR`, then system sans.
- **Scale:** 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48. Body defaults to 16 / 1.6, headings to -0.02em tracking.
- Weights in active use: 400 (body), 500 (UI labels, buttons), 700 (headings, numerals in data).
- Numerals in clinical data are **tabular** (`font-variant-numeric: tabular-nums`) so columns align.

### Spacing & layout

- 4px base grid. Tailwind-style scale (4/8/12/16/24/32/48/64).
- Card padding defaults to **32px** (`p-8`); dense list rows use 12–16px.
- Max content width ~1024px centered; dashboards go edge-to-edge with a 280px left nav.
- Layouts are **composed from white cards on gray bg** — never full-bleed color except a single navy top bar on the clinician surface.

### Corners, borders, shadows

- Radius scale: `6px / 8px / 12px / 16px / 999px`. Buttons = 8px. Cards = 12px. Pills and avatars = full.
- Borders: **1px solid `#F3F4F6`** (`gray-50`) — hairline, used to delineate cards against gray bg.
- Shadow system:
  - `shadow-card` → `0 4px 20px rgb(0 0 0 / 0.04)` — default card lift
  - `shadow-sm` → `0 1px 2px rgb(0 0 0 / 0.05)` — on primary buttons for subtle dimensionality
  - `shadow-pop` → `0 10px 30px rgb(23 183 152 / 0.15)` — for hovered CTAs & toast notifications
  - No inner shadows on interactive surfaces (the demo uses `shadow-inner` on color swatches only).

### Backgrounds

No gradients, no illustrated scenes, no full-bleed photography, no hand-drawn textures. The background is the surface gray `#F4F7F6`. Hero sections may use a soft **mint-to-white vertical gradient** (`from-[#E6F7F3] to-white`) — rare, reserved for welcome screens.

### Motion

- **Subtle** is the rule. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo feel).
- Durations: 150ms for hover/press, 220ms for panel slides, 400ms for page transitions.
- Elements fade + translate **8px max**. No bounces. No spring overshoots.
- Pulse only used on "scanning / analyzing" states (AI processing indicators).

### Hover / press

- Hover on primary button → background darkens one step (mint → `teal-500` equivalent). No scale change.
- Hover on cards → `shadow-card` → `shadow-pop` and `translateY(-1px)`. Gentle.
- Press → `scale(0.98)` + shadow drops to sm. 80ms.
- Focus rings: 2px mint outline with 2px offset, never the default blue.

### Transparency & blur

Used sparingly:
- Modal overlay: `rgb(26 43 60 / 0.32)` (navy at 32%), no blur by default.
- Top bars that sit over content can use `backdrop-blur-sm` + white 80% — only on the patient app's scroll-aware header.

### Cards

- White fill, 12px radius, 1px hairline border, `shadow-card`.
- Section titles inside cards are prefixed by a **vertical pill accent** (2×24px, mint or navy). This is the system's signature motif.
- Padding ≥ 24px; never wider than 640px of text without a gutter.

### Fixed / layout rules

- Sticky patient app tab bar at bottom (64px, white, `shadow-card` upward).
- Clinician sidebar: 280px fixed, scrolls independently.
- Buttons never span full width except in mobile bottom sheets.

## Iconography

Doctor Eye uses a **stroke-based, rounded, 2px** icon style. The repo did not ship a production icon set (the `public/icons.svg` file is Vite scaffolding — GitHub/Discord/etc.), so this system uses **Lucide** (CDN) as a stand-in — it matches the target style closely (2px stroke, rounded caps, 24×24 grid).

- **Standard:** Lucide via `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`
- **Stroke:** 2px, `currentColor`.
- **Sizes:** 16, 20, 24 (default), 32.
- **Domain icons to feature:** `eye`, `eye-off`, `glasses`, `activity`, `heart-pulse`, `stethoscope`, `calendar`, `user-round`, `bell`, `shield-check`, `file-text`, `chart-line`.
- **No emoji.** No unicode symbols as icons. Checkmarks use Lucide `check`.
- **Logo mark:** a minimal eye glyph with a mint iris (see `assets/logo-mark.svg`). The wordmark pairs Pretendard Bold "Doctor" in navy and "Eye" in mint. **Flagged:** no official logo was in the repo — please supply one to replace this placeholder.

> **Substitutions that need your review**
> - Logo mark & wordmark (placeholder drawn in the brand's spirit — not official).
> - Pretendard webfont (loaded from jsDelivr CDN since no `.ttf` files were in the repo).
> - Lucide icon set (CDN stand-in for a missing production icon font).

---

See `SKILL.md` for how an agent (or Claude Code) can use this system to produce on-brand artifacts.
