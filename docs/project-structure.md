# Project structure and architecture

This document explains how OleMart is organised, how its main features connect, and where to make common changes.

For installation instructions and project links, see the [README](../README.md).

## Organisation

OleMart separates route composition, feature components, reusable controls, state, and application logic.

| Directory                      | Responsibility                                                          |
| ------------------------------ | ----------------------------------------------------------------------- |
| `src/app`                      | Routes, root layout, global styles, and route-level fallback interfaces |
| `src/components/cart`          | Cart provider, cart controls, full cart, and mini cart                  |
| `src/components/checkout`      | Checkout fields, validation flow, and confirmation                      |
| `src/components/contact`       | Contact fields and form behaviour                                       |
| `src/components/design-system` | Documentation, code samples, and interactive previews                   |
| `src/components/layout`        | Header, footer, branding, and navigation                                |
| `src/components/products`      | Catalogue, details, search, sorting, and product presentation           |
| `src/components/theme`         | Theme provider and toggle                                               |
| `src/components/toast`         | Notification provider and container                                     |
| `src/components/ui`            | Shared interface controls and styling helpers                           |
| `src/context`                  | Cart and toast context definitions                                      |
| `src/hooks`                    | Shared state access and reusable interactive behaviour                  |
| `src/lib`                      | API access, validation, pricing, cart calculations, and storage         |
| `src/types`                    | Shared TypeScript definitions                                           |

## Routes

| Route               | File                                | Purpose                                 |
| ------------------- | ----------------------------------- | --------------------------------------- |
| `/`                 | `src/app/page.tsx`                  | Shop introduction and product catalogue |
| `/product/[id]`     | `src/app/product/[id]/page.tsx`     | Individual product page                 |
| `/cart`             | `src/app/cart/page.tsx`             | Cart items, quantities, and totals      |
| `/checkout`         | `src/app/checkout/page.tsx`         | Demo customer details form              |
| `/checkout/success` | `src/app/checkout/success/page.tsx` | Checkout confirmation                   |
| `/contact`          | `src/app/contact/page.tsx`          | Validated contact form                  |
| `/design-system`    | `src/app/design-system/page.tsx`    | Interactive component documentation     |

`src/app/layout.tsx` composes the site-wide providers, header, page content, and footer.

`src/app/error.tsx` provides a recovery interface for rendering failures within its route boundary. General missing pages use `src/app/not-found.tsx`, while missing products have a product-specific fallback in `src/app/product/[id]/not-found.tsx`.

## Rendering and interactivity

The application uses the Next.js App Router.

Route and presentation components can remain server components when they do not need browser state or event handlers. Interactive components use client boundaries where required, including cart controls, theme switching, forms, search, and responsive pagination.

This keeps browser behaviour separate from components that primarily compose or display content.

## Product data and catalogue

`src/lib/api/products.ts` contains product API access. API response and product definitions are maintained in `src/types/api.ts` and `src/types/product.ts`.

The catalogue is divided into focused components:

| Component               | Responsibility                                               |
| ----------------------- | ------------------------------------------------------------ |
| `ProductListing`        | Coordinates catalogue data and listing configuration         |
| `PaginatedProducts`     | Selects the visible product slice and coordinates pagination |
| `ProductGrid`           | Arranges products and displays the empty state               |
| `ProductCard`           | Displays a linked product summary                            |
| `ProductListingLoading` | Displays catalogue loading feedback                          |
| `ProductSortNavigation` | Updates the shop URL when sorting changes                    |
| `ProductSort`           | Presents the sorting control                                 |

`src/lib/products/productSorting.ts` contains sorting logic. Sorting applies to the catalogue before pagination.

`useProductsPerPage` determines the page size from the viewport:

- Below 640px: six products.
- From 640px to 1023px: eight products.
- From 1024px: nine products.

If resizing makes the requested page unavailable, the listing updates the URL to the last available page.

## Search

`ProductSearchContent` connects product data to the search interface.

`ProductSearch` manages the query and results-panel visibility. It compares product titles without case sensitivity and ignores surrounding query whitespace.

`SearchResults` displays matching products as links. Documentation previews can supply a callback to select a result locally instead of navigating.

An empty query hides the panel. An unmatched query displays an empty-result message.

## Product details and pricing

`ProductDetailsContent` connects the individual product data to the detail view.

`ProductDetails` composes the product image, title, description, pricing, rating, tags, optional actions, and reviews.

Smaller presentation components are shared with other parts of the shop:

- `ProductPrice`
- `DiscountBadge`
- `ProductRating`
- `ProductTags`
- `ProductReviews`

`getProductPricing.ts` contains the shared discount rule: a discount exists only when the discounted price is lower than the original price.

The selling price comes from the product data. The discount percentage is calculated for presentation.

## Cart state and persistence

Cart state is shared through `CartProvider` and `CartContext`. Components access the public cart interface through `useCart`.

Supporting code is separated by responsibility:

| File                          | Responsibility                 |
| ----------------------------- | ------------------------------ |
| `src/hooks/useCartState.ts`   | Cart state coordination        |
| `src/lib/cart/cartReducer.ts` | Cart state transitions         |
| `src/lib/cart/cartStorage.ts` | Browser storage handling       |
| `src/lib/cart/isCartItem.ts`  | Checking stored cart item data |
| `src/lib/cart/cartTotals.ts`  | Item totals and cart totals    |
| `src/types/cart.ts`           | Cart data types                |

The shop cart uses persistence. Cart interfaces wait for restoration before deciding whether the cart is empty.

The full cart and mini cart consume the same shop state. Updating quantities or removing an item updates the associated totals and header count.

Documentation examples create separate temporary providers so their actions do not modify the shop cart.

### Monetary calculations

Cart calculations use integer øre to reduce floating-point rounding problems.

For example, 49.95 NOK is represented as 4,995 øre for arithmetic. Formatting back into NOK happens for display.

Pricing rules and arithmetic belong in shared helpers rather than being repeated in individual cart components.

## Checkout

Checkout is a simulation:

1. The user opens checkout from the cart.
2. `CheckoutContents` checks cart readiness and whether items exist.
3. `CheckoutForm` reads and validates customer details.
4. Invalid submissions focus the first invalid field.
5. Successful validation clears the cart.
6. The shop navigates to `/checkout/success`.

`CheckoutFields` contains the controls, while `validateCheckout.ts` contains validation rules.

Documentation previews use an `onComplete` callback to display confirmation locally instead of changing routes.

No payment service or order backend is connected. Customer details are not submitted or saved.

## Contact form

`ContactFields` composes shared form controls. `ContactForm` handles form events, validation feedback, focus management, and the demo confirmation.

Validation rules are defined in `src/lib/validation/validateContact.ts`:

- Full name: at least three characters.
- Subject: at least three characters.
- Email: valid email format.
- Message: at least ten characters.

Fields are checked on blur. Existing errors are rechecked while the user types. Submission checks all fields.

The form validates input but does not send a message.

## Shared interface components

### Buttons

- `Button` renders text actions.
- `ButtonLink` renders navigation with button styling.
- `IconButton` renders an icon action with an accessible label.
- `buttonStyles.ts` shares styles between text buttons and button links.

Use links for navigation and buttons for actions.

### Form controls

`Input`, `Textarea`, and `Select` use `FormField` for a consistent label and spacing structure.

`FormField` can also display help text and error messages. Controls remain responsible for connecting those messages through `aria-describedby` and setting `aria-invalid`.

`formControlStyles.ts` centralises common control styles and validation appearance.

Validation stays in the parent form and validation helpers.

### Panels

`useDismissiblePanel` shares open state, outside-interaction handling, focus-leaving behaviour, and Escape dismissal for the navigation and mini cart.

The consuming component controls panel markup, animation, and whether closed content is interactive.

Product search retains its own behaviour because result visibility also depends on the query and input focus.

### Notifications

`ToastProvider`, `ToastContext`, and `useToast` expose notification behaviour.

`ToastContainer` arranges notifications, while `src/components/ui/Toast.tsx` renders an individual notification.

`useToastTimer` handles dismissal timing. Timers pause while a notification is hovered or contains keyboard focus.

## Theme and colours

`ThemeProvider` integrates next-themes. The initial theme follows the device setting until the user saves a preference.

`ThemeToggle` switches between light and dark mode.

All application colour tokens are defined in `src/app/globals.css`:

- `:root` defines default values.
- `:root.dark` overrides colours that change in dark mode.
- `@theme inline` exposes the values as Tailwind colour utilities.

Components use semantic classes such as:

- `bg-background`
- `bg-surface`
- `text-foreground`
- `text-muted-foreground`
- `border-border`
- `text-error`
- `focus-visible:outline-focus`

Product images, code examples, and discount badges have dedicated tokens that retain their intended colours across themes.

The Tailwind import uses `theme(static)` so palette variables referenced by the custom tokens remain available in the generated CSS.

## Design-system documentation

`src/components/design-system/sections.ts` registers section IDs, navigation labels, components, and display order.

`DesignSystemPage` renders the registry. `DesignSystemNav` builds anchor navigation from the same source.

Shared documentation components include:

- `GuidelineSection` for section structure.
- `CodeExample` for code samples.
- Feature-specific guidelines and examples.

To add a section:

1. Create its documentation component.
2. Wrap it in `GuidelineSection`.
3. Choose a unique section ID.
4. Register the component in `sections.ts` using the same ID.
5. Add examples that demonstrate relevant states.

## Where to make common changes

| Change                                  | Location                                   |
| --------------------------------------- | ------------------------------------------ |
| Change the colour palette               | `src/app/globals.css`                      |
| Change text button styling              | `src/components/ui/buttonStyles.ts`        |
| Change icon button styling              | `src/components/ui/IconButton.tsx`         |
| Change shared form styling              | `src/components/ui/formControlStyles.ts`   |
| Change field labels and feedback layout | `src/components/ui/FormField.tsx`          |
| Change contact validation               | `src/lib/validation/validateContact.ts`    |
| Change checkout validation              | `src/lib/validation/validateCheckout.ts`   |
| Change discount rules                   | `src/lib/products/getProductPricing.ts`    |
| Change cart arithmetic                  | `src/lib/cart/cartTotals.ts`               |
| Change sorting behaviour                | `src/lib/products/productSorting.ts`       |
| Change responsive page sizes            | `src/hooks/useProductsPerPage.ts`          |
| Change product fetching                 | `src/lib/api/products.ts`                  |
| Change documentation order              | `src/components/design-system/sections.ts` |

## Maintenance approach

Keep shared logic in one place when multiple features genuinely need it. Keep feature-specific behaviour near the feature.

A new component or helper should make responsibilities clearer or remove meaningful duplication. Reducing line count alone is not a reason to split a file.

After changes, run linting and a production build, then manually check the affected behaviour. Visual changes should be checked in both themes and at relevant viewport widths.
