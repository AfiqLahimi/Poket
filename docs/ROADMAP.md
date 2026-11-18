# Poket roadmap

Status key: ✅ done · 🟡 partial · ⬜ not started. Nothing is marked done until it has been visually checked.

## Phase 1 — Core ledger (PWA v1–v4) ✅
Accounts, transactions, derived balances, net worth, budgets, bills, debts, goals, backup/restore, EN/BM, Apple Pay file-import workaround.

## Phase 2 — Premium design + command centre (PWA v5) 🟡
- ✅ Poket White + Blue design tokens, light + dark tuned separately
- ✅ Home dashboard: overview hero, 6 glance widgets, 4 coming-up cards, 7 your-money cards, detail sheets, customisation, privacy mode
- ✅ Safe-to-spend with payday option; receivables
- ⬜ Restyle the remaining tabs to the new card and section system (they inherit the tokens but keep the older layout)
- ⬜ Monthly / weekly / payday budget modes in the budget editor
- ⬜ Evaluate and install design skills (UI/UX Pro Max, Anthropic frontend-design, Impeccable) for ongoing design critique
- ⬜ Get the two reference dashboard screenshots from the user and compare against them
- ⬜ Automated tests for `computeBalances`, `monthStats`, `forecast`, `safeToSpend`

## Phase 3 — Capture & Poket Connect
- ⬜ Poket Connect tutorial centre: step-by-step Apple Pay automation guide with annotated screenshots, progress, resume, checklist
- ⬜ Integration status driven by real events (Not configured → Awaiting test transaction → Connected and tested, based on the first imported Shortcut line)
- ⬜ Troubleshooting guide
- ⬜ CSV statement import (Maybank, CIMB, etc.) with column mapping and duplicate detection
- ⬜ Receipt scan (on-device OCR) — evaluate Tesseract.js size and accuracy vs waiting for native Vision

## Phase 4 — Planning depth
- ⬜ Subscriptions as a first-class object (auto-detected from recurring merchants)
- ⬜ Loan amortisation schedules (interest rate, tenure)
- ⬜ Investment holdings (units × price), dividends, realised P/L
- ⬜ Reports module: annual summary, period comparison, export (CSV/PDF)

## Phase 5 — Malaysian tax
- ⬜ Assessment-year rule tables (reliefs, limits, rates) as data, verified against official LHDN publications for each YA. Nothing hardcoded.
- ⬜ Tag transactions to relief categories, attach receipts, PCB/EA tracking, estimated chargeable income and tax (clearly labelled as estimates)

## Phase 6 — AI assistant
- ⬜ Start with on-device rule-based Q&A over the user's records, with transparent calculations
- ⬜ Optional LLM, only with explicit consent and a cost estimate approved by the owner

## Phase 7 — Native iPhone app (SwiftUI)
Needs a Mac with Xcode. Building to your own iPhone is free; TestFlight and App Store need the Apple Developer Program (USD 99/yr, owner approval required).
- App Intents for "Log transaction" (direct Apple Pay automation, no file import), widgets, Share Extension, Vision OCR, Keychain/encrypted storage, iCloud sync
- Port the data model and calculations 1:1 (see `ARCHITECTURE.md`) and import PWA backups

## Phase 8 — App Store readiness
Privacy policy, data deletion, App Store metadata and screenshots, TestFlight.
