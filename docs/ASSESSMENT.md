# Project assessment — 18 Nov 2026

## Summary
The brief describes a SwiftUI app at "Phase 2". The repository actually contains a **working vanilla-JS PWA (v4)**: about 100 KB of JavaScript, no build step, data stored on the device. There is no Swift code, no Xcode project, no CLAUDE.md and no roadmap or phase documents. The "Phase 2" plan is not recorded anywhere in the repo. Git history has two commits ("Initial commit", "First upload"). The README says the app started as a claude.ai artifact and was ported to a standalone PWA.

## Completed and working (v4)
- **Accounts:** bank, e-wallet, cash, investment (ASB/ASNB, stocks, unit trust, gold, crypto, Tabung Haji, EPF, FD), property, vehicle, other asset, credit card, loan, BNPL. Opening balances, archive and delete.
- **Transactions:** spend, income, transfer and adjustment. Transfers and card/loan repayments are correctly excluded from income and spending. Edit, delete, search, filters and a review queue.
- **Derived balances** (single source of truth), net worth, asset/liability split, investment P/L against manual valuations.
- **Budgets** (per category) with over/near-limit states.
- **Bills** (monthly and yearly) with "pay" that records the transaction; due-soon alerts.
- **Debts:** credit card utilisation and due dates, loan/BNPL instalments, months left, debt-free date.
- **Goals:** standalone, or backed by an account balance.
- **Financial health indicators:** emergency fund months, debt ratio, utilisation, savings rate, commitments.
- **Apple Pay capture (workaround):** a Shortcuts Wallet "Transaction" automation appends `Poket|date|amount|merchant|card` to a text file, which the user imports. Includes hash-based duplicate protection, card→account matching by name/alias/last-4 digits, and keyword auto-categorisation plus learned rules.
- **Data safety:** backup (share sheet or download) and restore.
- **App settings:** EN/BM languages; light/dark/system themes; custom categories; offline service worker.

## Partially implemented
- Smart categorisation: keyword rules only, no subcategories.
- Shortcut setup help: a text sheet, not an interactive tutorial centre.
- Reports: monthly figures on Home only; no annual or period comparison and no export.

## Not implemented
Poket Connect tutorial centre with status tracking, receipt OCR/PDF/voice capture, CSV/bank statement import, weekly and payday budgets, subscriptions as a distinct concept, Malaysian tax module, reports and analytics module, AI assistant, cloud sync/auth/encryption, widgets, native app.

## Technical risks
1. **Platform gap.** A PWA cannot use App Intents, widgets or a Share Extension, and cannot receive data from Shortcuts directly. A home-screen PWA also has **separate storage from Safari**, so a Shortcut that opens a URL lands in Safari, not in the app. That is why the file-append + manual import workaround exists. Fully automatic Apple Pay capture needs the native app.
2. **Data loss.** All data lives in one device's localStorage, with no sync. Backups are manual (the app nudges every 14 days).
3. **No automated tests** for the financial calculations.
4. **Single 100 KB file** with dense code. Workable, but new features go into separate modules (`dash.js` is the first).
5. **Contrast.** The specified secondary text colour `#718096` on white is about 4.0:1, just under WCAG AA for small text (see design system notes).
6. **Reference screenshots** mentioned in the brief are not in the repo, so they could not be reviewed.

## Work done in this session (v5)
- Poket White + Blue design system replaces the monochrome theme. Light and dark are tuned separately and the system font is used.
- New Home **Financial Command Centre** (`dash.js`):
  - Monthly overview hero: left to spend, per-day allowance, budget pace marker, month navigation.
  - **Month at a glance**: spending trend, top category, daily budget, money flow, savings rate, forecast.
  - **Coming up**: payments due, card bills, subscriptions, to review (including duplicate detection).
  - **Your money**: net worth with derived history, cash & debit, portfolio, goals, rewards & fees, receivables (new), debt payoff.
  - Tap-through detail sheets with "How this is calculated", including a **safe-to-spend** calculation with optional payday.
  - Customisation: show/hide and reorder widgets, hide amounts (privacy), recent activity toggle, reset.
  - Estimates are labelled throughout.
- The six alert banners that used to stack above the content are now grouped into the Payments due and To review cards. All their actions (Pay, Check, Backup, Review) are still available.
- New data fields (additive, with no migration needed): `plan.monthly`, `plan.receivables[]`, `settings.payday`, `settings.privacy`, `settings.dash`.
