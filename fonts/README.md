# Fonts

Doctor Eye uses **Pretendard** (primary) and **Noto Sans KR** (fallback).

No `.ttf` / `.woff2` files were included in the source repo, so `colors_and_type.css` loads them from CDN:

- Pretendard Variable — https://cdn.jsdelivr.net/gh/orioncactus/pretendard
- Noto Sans KR — Google Fonts

**Action needed:** if you have self-hosted font files (required for offline / enterprise deploys), drop them here and swap the `@import` in `colors_and_type.css` for a local `@font-face` block.
