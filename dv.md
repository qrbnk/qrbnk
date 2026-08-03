---
name: Clinical Precision & AI Agility
colors:
  surface: '#0f131f'
  surface-dim: '#0f131f'
  surface-bright: '#353946'
  surface-container-lowest: '#0a0e1a'
  surface-container-low: '#171b28'
  surface-container: '#1b1f2c'
  surface-container-high: '#262a37'
  surface-container-highest: '#313442'
  on-surface: '#dfe2f3'
  on-surface-variant: '#bec8ce'
  inverse-surface: '#dfe2f3'
  inverse-on-surface: '#2c303d'
  outline: '#899298'
  outline-variant: '#3f484e'
  surface-tint: '#7bd1fa'
  primary: '#c5eaff'
  on-primary: '#003547'
  primary-container: '#7dd3fc'
  on-primary-container: '#005b78'
  inverse-primary: '#006686'
  secondary: '#a0cde5'
  on-secondary: '#003548'
  secondary-container: '#1f4e63'
  on-secondary-container: '#92bed7'
  tertiary: '#f1ddff'
  on-tertiary: '#411e65'
  tertiary-container: '#ddbaff'
  on-tertiary-container: '#66438b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c0e8ff'
  primary-fixed-dim: '#7bd1fa'
  on-primary-fixed: '#001e2b'
  on-primary-fixed-variant: '#004d66'
  secondary-fixed: '#c0e8ff'
  secondary-fixed-dim: '#a0cde5'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#1c4c60'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#dcb8ff'
  on-tertiary-fixed: '#2b024f'
  on-tertiary-fixed-variant: '#59367d'
  background: '#0f131f'
  on-background: '#dfe2f3'
  surface-variant: '#313442'
  surface-glass: rgba(15, 21, 36, 0.6)
  surface-glass-elevated: rgba(15, 21, 36, 0.75)
  border-glass: rgba(125, 211, 252, 0.1)
  photonic-glow: rgba(125, 211, 252, 0.05)
  surface-midnight: '#0a0e1a'
  glass-bg: rgba(15, 21, 36, 0.6)
  glass-border: rgba(125, 211, 252, 0.1)
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: -0.05em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: -0.05em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '800'
    lineHeight: '1.5'
    letterSpacing: 0.2em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  micro-heading:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '800'
    lineHeight: '1.5'
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 8rem
  container-padding: 2rem
  element-gap-lg: 4rem
  element-gap-md: 2rem
  element-gap-sm: 1rem
  gap-lg: 4rem
  gap-md: 2rem
  gap-sm: 1rem
---

## Brand & Style
The brand personality is a sophisticated synthesis of clinical authority and technical innovation. It targets healthcare leaders and AI innovators who require a partner capable of navigating high-stakes environments with the speed of a startup builder.

The visual style is **Glassmorphism**, utilized to create a sense of depth and modernism without sacrificing the "clean room" feeling expected in health tech. It features translucent surfaces, subtle backdrop blurs, and localized "glow" effects (photonic accents) that represent technical intelligence. The atmosphere is nocturnal and focused, using high-contrast typography against deep oceanic backgrounds to evoke a sense of calm, expert-led transformation.

## Colors
The palette is rooted in a deep "Midnight Navy" (`#0a0e1a`) neutral, providing a stable foundation for technical accents. 

- **Primary (Sky Blue):** Used for calls to action, high-priority status indicators, and highlights. It represents technical clarity and agility.
- **Secondary (Steel Blue):** Used for supporting elements and iconography, bridging the gap between the background and active elements.
- **Tertiary (Soft Lavender):** Introduced as an accent for "scaler" or commercial growth concepts, providing a warm contrast to the clinical blues.
- **Surface Strategy:** Employs varying opacities of the neutral base combined with backdrop filters (16px to 24px blur) to create layered hierarchy rather than flat color fills.

## Typography
The system uses **Inter** exclusively to lean into its utilitarian, systematic nature. The hierarchy relies on extreme contrast in scale and tracking.

- **Display & Headlines:** Utilize heavy weights (700-800) and tight letter spacing to create a high-impact, editorial feel. 
- **Sub-headers:** Use a "micro-heading" style—all-caps with wide letter spacing (0.2em)—to categorize content without adding visual bulk.
- **Body Text:** Employs a lighter weight (300) for large-scale reading to maintain the "airy" feel of the glassmorphism style, moving to a standard weight (400) for smaller descriptive text.
- **Responsive Scaling:** Headline sizes should aggressively contract on mobile to maintain readability without overwhelming the viewport.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop (max-width 1280px) and a fluid, single-column approach for mobile. 

- **Vertical Rhythm:** A generous "Section Gap" of 8rem (128px) ensures that complex clinical and technical concepts have room to breathe, preventing cognitive overload.
- **Alignment:** Content is generally center-aligned for high-level narrative sections and uses a 2-column "Impact" grid for feature breakdowns (1:1 ratio).
- **Responsive Behavior:** Transitions from side-by-side grids to vertical stacks occur at the 1024px (lg) breakpoint. Horizontal padding remains consistent at 2rem to ensure safe margins on small devices.

## Elevation & Depth
Depth is created through "The Glass Stack" rather than traditional shadows.

1.  **Level 0 (Base):** The dark background (`#0a0e1a`) with occasional radial gradients of primary-tinted light.
2.  **Level 1 (Panels):** Glass panels with `backdrop-filter: blur(16px)` and a 1px border at 10% opacity of the primary color.
3.  **Level 2 (Elevated):** Hover states and modal-like containers increase the blur to 24px and increase border opacity to 30%.
4.  **Level 3 (Photonic Glow):** Instead of drop shadows, active or hovered elements project a soft, colored outer glow (`box-shadow: 0 0 30px rgba(125, 211, 252, 0.1)`) to simulate light passing through glass.

## Shapes
The shape language combines geometric discipline with organic softness.

- **Standard Containers:** Use `rounded-2xl` (1rem/16px) to maintain a modern, friendly feel.
- **Interactive Elements:** Buttons and decorative "tags" use a full pill-shape (`rounded-full`) to clearly distinguish them from structural content containers.
- **Media:** Images should be encased in the same `rounded-2xl` containers, often treated with grayscale filters to maintain the color palette's integrity until interacted with.

## Components
- **Buttons:**
    - *Primary:* Solid fill of the Primary color with `on-primary` text. No border.
    - *Secondary (Glass):* Translucent background with a thin primary-tinted border and "Glow on Hover" effect.
- **Chips / Badges:** Tiny, pill-shaped glass containers with `headline-sm` typography. Used for status or categories.
- **Glass Cards:** The primary content vessel. Features a 1px `border-primary/10` and `backdrop-blur-xl`. On hover, the border color should brighten to `primary/30`.
- **Navigation Bar:** A persistent "Level 2" glass strip at the top of the viewport. Uses `backdrop-blur-xl` and a subtle bottom border to separate from content.
- **Iconography:** Use "Material Symbols Outlined" with a light weight (300). Icons are always colored in the `primary` or `tertiary` hue to act as visual anchors.