# OleMart

OleMart is a responsive online shop built with Next.js, React, TypeScript, and Tailwind CSS for the Noroff JavaScript Frameworks course assignment.

Users can browse products, search and sort the catalogue, view product details, manage a shopping cart, and complete a simulated checkout. The project also includes a validated contact form and an interactive design-system guide.

## Links

- [Live website](https://olemart.vercel.app/)
- [GitHub repository](https://github.com/OleKoderNo/olemart)
- [Design system](https://olemart.vercel.app/design-system)
- [Project structure and architecture](docs/project-structure.md)
- [AI assistance and learning log](docs/AI_LOG.md)

## Features

### Products

- Product catalogue retrieved from the Noroff Online Shop API.
- Responsive product grid.
- Product details with descriptions, images, tags, and customer reviews.
- Original and discounted prices with percentage discount badges.
- Product ratings and review counts.
- Search suggestions that link to matching products.
- Product sorting with the selected sort preserved during pagination.
- Responsive pagination based on viewport width.
- Loading feedback and error states.

### Shopping cart and checkout

- Shared cart state across the application.
- Cart quantity indicator in the header.
- Mini cart with quantity controls and item removal.
- Full cart page with item totals and an order summary.
- Browser storage persistence when storage is available.
- Integer-based monetary calculations in øre.
- Toast notifications for cart actions.
- Validated demo checkout with a confirmation page.
- Cart clearing after successful checkout validation.

### Forms and interface

- Contact form with field-level validation.
- Validation feedback on blur and while correcting existing errors.
- Focus moves to the first invalid field after an invalid submission.
- Light and dark themes with a saved preference.
- Responsive navigation and layouts.
- Keyboard focus indicators and accessible control labels.
- Dismissible panels with Escape and outside-interaction handling.
- Reduced-motion support for animated panels.
- Interactive documentation for shared components.

## Technology

| Technology     | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| Next.js 16     | App Router, page rendering, routing, and application framework |
| React 19       | Components and interactive interfaces                          |
| TypeScript 5   | Types for components, API data, forms, and application state   |
| Tailwind CSS 4 | Responsive styling and shared colour tokens                    |
| next-themes    | Theme preference and light/dark switching                      |
| React Icons    | Interface icons                                                |
| clsx           | Conditional class composition                                  |
| ESLint 9       | Static code checks                                             |
| Vercel         | Deployment                                                     |

The installed dependency versions are recorded in `package-lock.json`.

## Getting started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/OleKoderNo/olemart.git
cd olemart
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Creates a production build    |
| `npm start`     | Runs the production build     |
| `npm run lint`  | Runs ESLint                   |

To run the production version locally:

```bash
npm run build
npm start
```

## API integration

Product data comes from the Noroff Online Shop API.

The application uses:

- `GET /online-shop` for the catalogue.
- `GET /online-shop/<id>` for individual product details.

API integration is located in `src/lib/api/products.ts`. Shared API and product types are defined in `src/types`.

A discount applies only when `discountedPrice` is lower than `price`. The presence of a discounted price field alone does not mean a product is on sale.

## Architecture

Routes are defined in `src/app`. Feature components are organised under `src/components`, while reusable interface controls live in `src/components/ui`.

Shared state is accessed through context and custom hooks. API access, validation, pricing, cart calculations, and storage logic are separated from presentation components.

Colours are maintained centrally in `src/app/globals.css`. Components use named tokens such as `bg-surface`, `text-foreground`, and `text-error`.

See [Project structure and architecture](docs/project-structure.md) for component responsibilities, application flows, and maintenance guidance.

## Design system

The [design-system page](https://olemart.vercel.app/design-system) documents reusable components through guidelines, code samples, and interactive examples.

It covers themes, layout, navigation, buttons, form controls, products, pagination, shopping carts, checkout, and notifications.

Cart demonstrations use temporary cart providers so they do not change the shop cart. Some product demonstrations use fictional IDs and do not link to real products.

## Validation and testing

The application has been manually tested during development, including product browsing, search, sorting, cart interactions, form validation, checkout, responsive layouts, and both themes.

Code checks:

```bash
npm run lint
npm run build
```

Linting and production builds complement manual testing; they do not verify every visual or interactive behaviour.

No automated test runner is currently configured in the project scripts.

## Demo limitations

- Checkout is simulated. No payment is taken and no real order is created.
- Checkout details are not submitted or saved.
- The contact form validates input but does not send a message.
- Product availability and content depend on the external API.
- Cart persistence depends on browser storage being available.

## AI assistance

ChatGPT was used for explanations, debugging, implementation assistance, and refactoring discussions.

The [AI learning log](docs/AI_LOG.md) records selected questions and learning outcomes. It is not a complete transcript or a list of every AI-assisted edit.

## Author

Created by [OleKoderNo](https://github.com/OleKoderNo) for the Noroff JavaScript Frameworks course assignment.
