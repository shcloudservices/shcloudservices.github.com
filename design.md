---
name: Soluciones Hospedadas Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#576065'
  on-secondary: '#ffffff'
  secondary-container: '#dbe4ea'
  on-secondary-container: '#5d666b'
  tertiary: '#505f76'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d9db5'
  on-tertiary-container: '#243449'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#dbe4ea'
  secondary-fixed-dim: '#bfc8ce'
  on-secondary-fixed: '#141d21'
  on-secondary-fixed-variant: '#3f484d'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
---

## Brand & Style

The design system is anchored in the concept of "Atmospheric Professionalism." It translates the core business of cloud-based development into a visual language of clarity, vastness, and precision. The target audience—enterprise stakeholders and technical leads—requires a platform that feels both high-end and technologically advanced.

The aesthetic follows a **Corporate Modern** style with strong **Minimalist** leanings. By utilizing expansive whitespace and a light-drenched palette, the UI evokes an "airy" sensation. The goal is to reduce cognitive load, making complex cloud architectures feel manageable and transparent. Reliability is communicated through rigorous alignment and systematic typography, while innovation is signaled through subtle depth and ethereal gradients.

## Colors

The color palette is derived from the high-altitude atmosphere. 

- **Primary Sky Blue (#0EA5E9):** Used for actionable items, primary branding, and progress indicators. It represents the "clear sky" of successful deployment.
- **Secondary Cloud (#F0F9FF):** A soft, luminous blue used for large surface areas, hover states, and subtle grouping.
- **Neutral Slate (#64748B):** Used for secondary text and icons, providing enough contrast for readability without the "heaviness" of pure black.
- **Surface & Backgrounds:** We utilize "Pure White" (#FFFFFF) for the primary content containers to maintain a clean, surgical feel, contrasted against "Ghost Gray" (#F8FAFC) for page backgrounds to provide subtle definition.

Avoid using dark mode or heavy shadows; the "cloud" feel relies on high-key values and soft transitions.

## Typography

This design system utilizes **Inter** across all levels to ensure maximum legibility and a utilitarian, technical edge. 

- **Headlines:** Use tighter letter-spacing and heavier weights to create an authoritative anchor for the "airy" layout.
- **Body Text:** Generous line-heights (1.5 - 1.6) are mandatory to maintain the "open" feeling of the brand.
- **Labels:** Small caps or slightly tracked-out labels should be used for metadata and technical specs to differentiate them from prose.
- **Scale:** On mobile devices, large display headers must scale down significantly to prevent awkward word breaks and preserve the sense of white space.

## Layout & Spacing

The layout philosophy is based on a **Fluid Grid** with strict horizontal constraints to ensure the content feels "weighted" correctly amidst the whitespace.

- **Desktop:** A 12-column grid with 2.5rem side margins. Containers should have a maximum width of 1280px to prevent lines of text from becoming too long.
- **Rhythm:** Use an 8px (0.5rem) base unit. "Airy" layouts require larger-than-standard vertical gaps; use `xl` (4rem) spacing between major sections and `lg` (2.5rem) between distinct content blocks.
- **Padding:** Internal card padding should be generous (typically `md` or `lg`) to prevent information density from feeling claustrophobic.

## Elevation & Depth

To achieve the "Cloud" effect, this design system avoids heavy drop shadows in favor of **Tonal Layers** and **Ambient Glows**.

- **Tiers:** Use background color shifts (White surface on a #F8FAFC background) to denote hierarchy.
- **Shadows:** When necessary, use extremely diffused, low-opacity shadows. Use a "Sky Tint" for shadows: `0 10px 30px rgba(14, 165, 233, 0.05)`. This creates an effect of an object floating in an atmosphere rather than sitting on a hard surface.
- **Borders:** Use soft, low-contrast outlines (`1px solid #E2E8F0`) for interactive elements. This maintains structure without breaking the visual flow of the white space.

## Shapes

The shape language is "Soft Professional." 

A `roundedness` level of **1** (0.25rem base) provides a subtle softening of technical edges without appearing too consumer-focused or "bubbly." 
- **Buttons and Inputs:** Use the standard 0.25rem (4px) radius.
- **Cards and Containers:** Use `rounded-lg` (0.5rem) to differentiate large structural blocks from smaller interactive elements.
- **Visual Elements:** Occasional use of "Pill-shaped" buttons for secondary tags or status chips is permitted to contrast against the more rigid grid.

## Components

- **Buttons:** Primary buttons use a subtle vertical gradient from `#38BDF8` to `#0EA5E9`. This adds a "dimension" that mimics light hitting a cloud. Secondary buttons should be ghost-style with a primary-colored border.
- **Input Fields:** Use a solid white background with a 1px border in `#E2E8F0`. On focus, the border transitions to Primary Blue with a soft 4px glow.
- **Cards:** White backgrounds, `rounded-lg` corners, and a light-tinted ambient shadow. No heavy borders. Use headers within cards that have a slight secondary-blue background tint.
- **Chips/Status:** Use high-clarity background tints (e.g., success is soft green background with dark green text) rather than solid dark colors.
- **Progress Indicators:** Use thin, sleek lines. Avoid bulky loaders.
- **Lists:** Use generous vertical padding (`0.75rem`) and light horizontal dividers to maintain the "airy" feel within data-heavy views.