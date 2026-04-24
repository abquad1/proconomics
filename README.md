# Proconomics

Proconomics is a Next.js web application for building structured project financial models and business cases.
It helps teams define costs, forecast benefits, and evaluate ROI before committing resources.

## Live Demo
https://proconomics.vercel.app/model-builder-financial-roi

## Features

- Responsive landing page built from a Figma design brief
- Reusable content sections (Hero, Features, FAQ, Testimonials, CTA)
- SEO-optimized with metadata, heading hierarchy, alt text, and FAQ schema
- Google Analytics 4 integration with custom event tracking
- Toast notifications on form submission success and failure
- Custom local Satoshi variable font

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- UI: React 19
- Styling: Tailwind CSS 4
- Notifications: react-toastify
- Icons: react-icons
- Linting: ESLint 9 with eslint-config-next

## SEO Implementation
- Meta title and description via Next.js Metadata API
- Single H1 per page with proper H2/H3 hierarchy
- FAQ JSON-LD schema markup in model-builder page
- Descriptive alt text on all UI screenshots
- Internal linking between feature pages

## Analytics
- Google Analytics 4 integrated via `components/google-analytics.tsx`
- Loaded on every page through `app/layout.tsx`
- CTA button click tracked as custom event `cta_click_build_model`
- Measurement ID configured via `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Notifications
- React-Toastify configured in `app/layout.tsx`
- Toast notifications trigger on form submission success and failure

## Project Structure

```
app/
  layout.tsx
  page.tsx
  model-builder-financial-roi/page.tsx
  components/
lib/
  faq-data.ts
  features-data.tsx
public/
  fonts/
  images/
```

## Getting Started

### 1) Prerequisites

- Node.js 18+ (latest LTS recommended)
- npm (or your preferred package manager)

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables (optional)

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

If this variable is not set, Google Analytics is skipped automatically.

### 4) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start the local development server
- `npm run build` - Build the app for production
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint checks

## Pages

- `/` - Home screen with entry point to Model Builder
- `/model-builder-financial-roi` - Main model builder landing page

## Deployment

This project is deployed on Vercel).

Typical production flow:

```bash
npm run build
npm run start
```

## Notes

- The app uses a local Satoshi variable font from `public/fonts`.
- Path aliases are enabled via `@/*` in `tsconfig.json`.
- Update metadata in `app/layout.tsx` and route-specific metadata for SEO improvements.
