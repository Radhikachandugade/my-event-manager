## 🚀 How to Run

1. Clone the repo and navigate into the project folder:
   ```bash
   git clone https://github.com/Radhikachandugade/my-event-manager.git
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
👉 http://localhost:3000

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

