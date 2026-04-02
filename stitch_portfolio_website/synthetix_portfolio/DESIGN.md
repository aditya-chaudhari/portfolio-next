# Design System Specification

## 1. Overview & Creative North Star: "The Orchestrated Intelligence"
This design system is built to bridge the gap between the rigid precision of backend engineering and the fluid, evolving nature of Agentic AI. The Creative North Star is **"The Orchestrated Intelligence."** 

Unlike standard portfolios that rely on "boxed" layouts, this system uses intentional asymmetry and tonal depth to suggest a living machine. We avoid the "template" look by treating the screen as a multi-dimensional workspace. Information is not just displayed; it is hosted on layers of deep-space surfaces, using high-contrast typography scales and "Electric Indigo" light-leaks to represent innovation breaking through the logic of the code.

## 2. Colors & Surface Architecture
The palette is rooted in a deep, "obsidian" dark mode, utilizing high-energy accents to signal technical sophistication.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation needed. Lines are for code; surfaces are for UX.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of tinted glass. 
- **Base Layer:** `surface` (#0b1326) for the primary background.
- **Content Blocks:** Use `surface-container` (#171f33) for main modules.
- **Nested Elements:** Use `surface-container-high` (#222a3d) for nested items like code snippets or card details to create a natural, "lifted" hierarchy without shadows.

### The "Glass & Gradient" Rule
To represent the "fluidity" of AI, use Glassmorphism for floating elements (navbars, tooltips). Apply `surface-container-lowest` with a 70% opacity and a `20px` backdrop-blur. 
- **Signature Accents:** Use a linear gradient from `primary` (#c0c1ff) to `secondary_container` (#03b5d3) at a 135-degree angle for hero text or primary CTA backgrounds to provide a "digital soul" that flat colors lack.

## 3. Typography: Editorial Logic
We pair the technical precision of **Inter** with the architectural character of **Space Grotesk**.

*   **Display & Headlines (Space Grotesk):** These should be oversized and confident. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create an "Editorial Tech" feel.
*   **Body & Labels (Inter):** High-readability is paramount for technical descriptions. Use `body-md` (0.875rem) for the bulk of the content, ensuring a line-height of 1.6 for breathability.
*   **Hierarchy as Identity:** Use `label-md` in all-caps with 0.1em letter-spacing for metadata (e.g., "DEPLOYMENT PIPELINE") to evoke a terminal-like authority.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a "recessed" look, perfect for code blocks or technical logs.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a modal), use a shadow with a 40px blur, 0px offset, and 6% opacity using the `on_surface` color. It should feel like a soft glow, not a drop shadow.
*   **The Ghost Border:** If a boundary is legally required for accessibility, use the `outline_variant` token at 15% opacity. Never use 100% opaque borders.
*   **Fluidity:** Use `primary` and `secondary` glow effects (elliptical gradients) behind key content sections to represent "Agentic Energy" humming beneath the surface.

## 5. Components

### Buttons
*   **Primary:** Background: `primary_container` (#8083ff). Text: `on_primary_container`. Shape: `md` (0.375rem). Use a subtle inner-glow (1px top border) in a lighter indigo to give it a "hardware" feel.
*   **Secondary:** Ghost style. No background. `outline_variant` (20% opacity) border. Text: `secondary`.
*   **Tertiary:** Text-only. Use `tertiary` color with an underline that only appears on hover.

### Chips (Tags/Tech Stack)
*   **Style:** `surface-container-highest` background with `on_surface_variant` text.
*   **Shape:** `full` (pill).
*   **Interaction:** On hover, shift background to `secondary_container` and text to `on_secondary_container`.

### Input Fields
*   **Base:** `surface_container_lowest` background. 
*   **Border:** No bottom line. Instead, use a subtle 2px left-accent of `primary` when focused to represent a cursor in a terminal.
*   **Text:** `body-md` Inter.

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Separation:** Use `spacing-8` (2rem) between items. For lists, use alternating `surface-container` and `surface-dim` backgrounds to create "zebra" stripes without harsh lines.

### Specialized Component: The "Node Connector"
For a DevOps portfolio, use thin, 1px `outline_variant` lines at 10% opacity that "connect" cards in a vertical flow, representing a CI/CD pipeline. These are the only lines allowed.

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., more padding on the left than the right) to create a sophisticated, non-template layout.
*   **Do** use `secondary` (Cyan) exclusively for "active" or "live" states—it represents the "running" agent.
*   **Do** allow elements to overlap (e.g., an image of a terminal slightly overlapping a headline) to create depth.

### Don’t
*   **Don’t** use pure black (#000000). Always use `surface` (#0b1326) to maintain the "ink-blue" depth.
*   **Don’t** use standard 12-column grids strictly. Break the grid for pull-quotes or technical diagrams to show "innovation."
*   **Don’t** use rounded corners larger than `xl` (0.75rem) for main containers; keep it sharp and precise to reflect "Backend/DevOps" expertise. Use `full` only for small UI elements like chips.