# AI assistance and learning log

## Purpose

I used ChatGPT during the development of OleMart for explanations, debugging, implementation assistance, and refactoring discussions.

This document focuses on questions I explored and what I learned. It is not a complete transcript, and it does not list every code suggestion, repetitive edit, or task where AI helped me work faster.

AI also assisted with drafting this documentation. The descriptions should be read as a summary of the development discussions, not as independently verified evidence of project quality.

## Existing experience

I entered this assignment with experience in React, Next.js, TypeScript, Tailwind CSS, and reusable components.

Alongside my studies, I have also worked on a real e-commerce project using Shopify. This made several shop concepts familiar, including product presentation, navigation, and cart interactions.

I had previously worked with a design system during an internship. Building reusable components and documenting their use therefore drew on existing experience rather than being entirely new to me.

The questions below focus on areas I investigated further during this project.

## Questions and learning

### Why calculate money in øre/cents?

I explored the purpose of converting prices into øre/cents before calculating cart totals.

JavaScript numbers use binary floating-point representation, so some decimal calculations can produce small rounding differences. For prices expressed in NOK with two decimal places, calculating in integer øre provides a clearer basis for addition and multiplication.

For example:

- 49.95 NOK becomes 4,995 øre.
- Two items total 9,990 øre.
- The result is displayed as 99.90 NOK.

The discussion around `toOre` helped me understand why monetary conversion belongs in shared calculation logic instead of being repeated throughout the interface.

I also learned to distinguish formatting a number with two decimal places from controlling how the underlying arithmetic is performed.

### What is regex, and how can it help with a project-wide change?

When centralising colours, I needed to find hardcoded colour classes across many files.

I asked about the `.*` button in VS Code search and learned that it enables regular expressions, often shortened to regex. A regex search can match a pattern rather than only one exact piece of text.

We used a pattern to locate colour utilities such as `bg-slate-50`, `text-red-700`, and `border-green-300`.

This also showed why search results require review:

- Central colour definitions in `globals.css` were expected matches.
- SVG assets contained their own colour values.
- HTML entities such as `&#123;` could be mistaken for hexadecimal colour matches.

For exact class replacements, I switched regex off and used literal text. File filters helped limit replacements to the components where the new token had the correct meaning.

### Why did the discount badge lose its background?

After replacing direct palette classes with semantic colour tokens, the discount badge background disappeared. Rating stars and product image backgrounds also lost their intended colours.

The shared symptom pointed to the colour setup rather than three unrelated component failures.

Changing the Tailwind import to use `theme(static)` restored the palette variables referenced by the custom tokens.

This helped me understand that defining a custom variable which references another variable also depends on that referenced variable being present in the generated CSS.

It also demonstrated why a successful build is not enough to confirm visual correctness.

### Why did dark mode initially look incomplete?

During the theme migration, some surfaces changed while text and other components still used fixed light-theme colours.

This produced low contrast and a mixture of light and dark areas. I questioned whether this was expected during the migration and which components still needed changes.

The process helped clarify the difference between activating a dark theme and designing every component to support it.

Semantic tokens made the intended role of each colour clearer. For example, supporting text uses `text-muted-foreground`, while panel backgrounds use `bg-surface`.

Some colours intentionally remain consistent across themes, including product image backgrounds and code examples.

### Does reusable code always mean fewer lines?

I questioned whether the refactoring was worthwhile when the total line count did not immediately decrease.

The discussion helped separate reuse from simply shortening files.

A shared component or styling helper may add a definition while removing duplication from its consumers. Its value is that later changes can be made consistently in one place.

Examples in OleMart include:

- Shared text button styles.
- Icon buttons with consistent labels and focus styling.
- Form labels, help text, and error presentation.
- Shared form-control styles.
- Dismissible panel behaviour.

The goal became clearer responsibilities and easier maintenance, rather than extracting every repeated line.

## Working with AI suggestions

The development process included reviewing suggested changes, trying them in the application, and reporting problems when the result did not match expectations.

The colour-token regression was a concrete example: the initial suggestion introduced a visual issue, and the browser result was needed to identify and correct it.

AI assistance supported the work, but suggested code still required understanding, review, and testing.
