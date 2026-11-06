# Skell

Fictional archival site for Skell, a Scandinavian architecture magazine that "ran" from 1971 to 1983.

**Live:** [skell-seven.vercel.app](https://skell-seven.vercel.app)

## Overview

Skell is a design exercise: a full made-up archive of 47 quarterly issues of architectural criticism out of Göteborg. I wanted to practise editorial storytelling, multi-page IA, and a dark archival visual system without inventing a CMS for it.

Content (issues, covers, editors, chronology) lives in typed TypeScript modules.

## What's on the site

- Home: featured issues, cover grid, editors, short chronology
- `/issues` index plus individual issue pages
- About, manifesto, and editors routes with bios and quotes
- Cream / gold on dark palette; cover images under `public/images/covers`

## Tech stack

- Next.js (App Router), React, TypeScript, Tailwind CSS
- Hosted on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

On Vercel with the default Next.js settings.

## Author

Vince Lapore · [portfolio](https://vincelapore-dev.vercel.app) · Brisbane, AU
