# ▲ / next-forge

**Production-grade Turborepo template for Next.js apps.**

<div>
  <img src="https://img.shields.io/npm/dy/next-forge" alt="" />
  <img src="https://img.shields.io/npm/v/next-forge" alt="" />
  <img src="https://img.shields.io/github/license/vercel/next-forge" alt="" />
</div>

## Overview

[next-forge](https://github.com/vercel/next-forge) is a [Next.js](https://nextjs.org/) project boilerplate for modern web application. It is designed to be a comprehensive starting point for new apps, providing a solid, opinionated foundation with a minimal amount of configuration.

## Getting Started

Clone the repo using:

```sh
npx next-forge@latest init
```

Then read the [docs](https://www.next-forge.com/docs) for more information.

## Contributors

<a href="https://github.com/vercel/next-forge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vercel/next-forge" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

# 🎉 Event Manager (Mini Assignment)

This project is built using the **Next-Forge Turbo template** (Turborepo + pnpm) with **Next.js (App Router)**, **TypeScript**, and **TailwindCSS**.  
It implements a simple **Event Manager** with the ability to add, search, and delete events — all client-side.

---

## 🚀 How to Run

1. Clone the repo and navigate into the project folder:
   ```bash
   git clone <repo-url>
   cd my-event-manager
Install dependencies:

pnpm install
Run the development server:

Option 1: Run only the events-app

cd apps/events-app
pnpm dev
Option 2: From root using Turborepo filter

pnpm turbo run dev --filter=events-app
Open your browser at:
👉 http://localhost:3000/events

📍 Path of the Page
Main page for Event Manager is available at:

/events
📝 Features
Add a new event (Event Name + Date).

Prevents adding past dates.

List of events with Delete button.

Search bar to filter events by name.

LocalStorage persistence so events stay after refresh.

Clean, mobile-friendly UI with TailwindCSS.

📌 Notes & Assumptions
No backend/database → data is stored in browser memory and localStorage.

Date Validation: Past dates cannot be added (both UI restriction + JS validation).

State Management: Implemented with useState.

Built as part of a monorepo .

Tested with pnpm package manager.

🎨 Tech Stack
Next.js (App Router)

TypeScript

TailwindCSS

pnpm

