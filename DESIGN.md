---
name: doctor-eye-design
description: Use this skill to generate well-branded interfaces and assets for Doctor Eye (닥터아이), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — drop-in CSS variables (raw + semantic + type scale)
- `fonts/` — font-loading notes (Pretendard + Noto Sans KR via CDN)
- `assets/` — `logo-mark.svg`, `wordmark.svg`, `favicon.svg` (placeholder marks — flagged)
- `preview/` — small HTML cards demonstrating colors, type, components
- `ui_kits/patient-app/` — React kit for the mobile patient surface
- `ui_kits/clinician-dashboard/` — React kit for the desktop clinician surface

## The 10-second brief

Mint `#17B798` primary · Navy `#1A2B3C` text · Surface `#F4F7F6` bg · White cards with 12px radius, hairline `#F3F4F6` border, `0 4px 20px rgb(0 0 0 / 0.04)` shadow. Pretendard / Noto Sans KR. No emoji. No gradients (except one soft mint→white hero). Subtle motion only (cubic-bezier(0.22, 1, 0.36, 1)). Signature motif: a 4×22px mint vertical pill before section titles.
