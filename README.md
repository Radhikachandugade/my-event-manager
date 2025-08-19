# 📑 Event Manager – Assignment  

## 🚀 How to Run  

### Quick Run  
```bash
pnpm install
pnpm dev
```

👉 Open in browser: [http://localhost:3000](http://localhost:3000)  

---

### Detailed Steps  

1. **Clone the repo and navigate into the project folder**  
   ```bash
   git clone https://github.com/Radhikachandugade/my-event-manager.git
   cd my-event-manager
   ```

2. **Install dependencies**  
   ```bash
   pnpm install
   ```

3. **Run the development server**  

   **Option 1: Run only the events-app**  
   ```bash
   cd apps/events-app
   pnpm dev
   ```

   **Option 2: Run from root using Turborepo filter**  
   ```bash
   pnpm turbo run dev --filter=events-app
   ```

4. **Open in browser**  
   👉 [http://localhost:3000](http://localhost:3000)  

   📍 **Path of the Page:**  
   ```
   /events
   ```

---

## 📝 Features  

- ➕ Add a new event (Event Name + Date)  
- 🚫 Prevents adding past dates  
- 📋 List of events with Delete button  
- 🔍 Search bar to filter events by name  
- 💾 LocalStorage persistence so events stay after refresh  
- 📱 Clean, mobile-friendly UI with TailwindCSS  

---

## 📌 Notes & Assumptions  

- No backend/database → Data is stored in **browser memory + localStorage**  
- Date Validation: Past dates cannot be added (UI restriction + JS validation)  
- State Management with **useState**  
- Built as part of a **monorepo** (Turborepo)  
- Tested with **pnpm package manager**  

---

## 🎨 Tech Stack  

- ⚡ Next.js (App Router)  
- 🟦 TypeScript  
- 🎨 TailwindCSS  
- 📦 pnpm  

---

✨ **GitHub Repo Link:** [my-event-manager](https://github.com/Radhikachandugade/my-event-manager)  
