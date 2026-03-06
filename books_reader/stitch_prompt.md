# Stitch Prompt: Hylst Books & Reader (UI/UX Refinement)

A premium, literary-focused PWA for reading digital books and listening to curated atmosphere music, featuring a sophisticated "Editorial Classic" aesthetic with rich typography and glassmorphism.

---

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first (Mobile responsive)
- **Primary Vibe:** Premium, Editorial, Sophisticated, Literary, Immersive.
- **Color Palette:**
    - Background (Sepia): Warm Cream (#f4f1eb)
    - Background (Dark): Deep Charcoal (#0f0e0c)
    - Background (Light): Pure White (#fafaf8)
    - Primary Accent: Rich Earth Brown (#8b5a2b) - use for buttons and active states.
    - Surfaces: Cloud White (#ffffff) with 0.07 opacity borders.
- **Typography:**
    - Headings: 'Cormorant Garamond' (Serif, Elegant)
    - Body Text: 'Libre Baskerville' (Serif, Readable)
    - UI Elements: 'Inter' (Sans-serif, Modern)
- **Visual Styles:**
    - Corners: Gently rounded (12px for cards, 18px for modals)
    - Shadows: Multi-layered, soft shadows for depth (variable --shadow-lg)
    - Effects: Glassmorphism (16px blur) for headers and overlay backgrounds.
    - Transitions: Smooth 0.3s cubic-bezier for all interactions.

---

**PAGE STRUCTURE & SCREEN TEMPLATES:**

1. **Integrated Workspace (Main Library):**
    - **Header:** Sticky, glassmorphic navigation bar. Includes "Hylst Books & Reader" in elegant serif, quick-access icons (About, Settings, Search), and a primary "Importer" button (#8b5a2b).
    - **Library Grid:** Vertical list with clear sectional labels: "BIBLIOTHÈQUE DE HYLST" and "VOS AUTRES LECTURES".
    - **Book Cards:** Card grid layout with 2:3 aspect ratio covers. Each card shows title, author, and a subtle reading progress bar.
    - **Constraint:** Ensure book cards are NOT narrow; they should feel like physical book covers with legible, elegant typography.

2. **Advanced Music Player (Modal):**
    - **Layout:** Wide, landscape-oriented two-column layout (max-width: 1100px).
    - **Left Column:** Scrollable grid of music track cards with square covers and track titles. Includes a sticky search bar at the top.
    - **Right Column (Player Focus):** Gradient background side panel. Large track cover with soft shadow, track info (Title, Genre), playback controls (Play/Pause, Previous/Next, Loop), and a dynamic "playing wave" micro-animation.
    - **Constraint:** Fix vertical scroll issues by ensuring internal scroll areas are properly defined.

3. **Reader Customization (Settings Modal):**
    - Sophisticated drawer or centered modal with clearly labeled setting groups.
    - **Controls:** Segmented buttons for Theme selection, font size steps (A- / 100% / A+), and paragraph alignment (Left / Justified).

4. **About / Literary Vision (Modal):**
    - A storytelling-focused modal using rich typography.
    - Includes a featured "Creator" card for Geoffroy Streit with an avatar circle and elegant contact/social links.

---

**KEY UI/UX REQUIREMENTS:**
- Avoid generic colors; use the earth/sepia palette provided.
- Ensure generous whitespace and "literary" breathing room.
- Use Lucide-style icons (refined, thin strokes).
- Focus on the "Premium Reader" feel—nothing should look like a standard dashboard.

---
💡 **Tip:** This prompt is optimized for high-fidelity generation in Stitch. Use it to propose a cohesive, stunning design system that honors the project's literary roots.
