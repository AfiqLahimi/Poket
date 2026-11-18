# Architecture & data model

## Runtime
Static PWA. `index.html` loads `app.js`, then `dash.js`. `boot()` runs on DOMContentLoaded and calls `render()`. `render()` builds the active tab from the URL hash (`#home`, `#activity`, `#portfolio`, `#debts`, `#goals`, `#settings`). Clicks go through one delegated handler that dispatches `data-act` to `ACT[name](data-v, el, event)`. Bottom sheets use `openSheet(html, redraw)`.

## Storage (localStorage, prefix `poket:`)
| Key | Shape |
|---|---|
| `accounts` | `{list:[Account]}` |
| `settings` | `{profile:{name}, lang, theme, expCats, incCats, rules:{merchant:cat}, imported:[hash], lastBackup, payday?, privacy?, dash?:{order,hidden,recent}}` |
| `plan` | `{budgets:{cat:amount}, monthly?, bills:[Bill], goals:[Goal], receivables?:[Receivable]}` |
| `m-YYYY-MM` | `{items:[Tx]}` (one doc per month) |

**Account** `{id, name, type: bank|ewallet|cash|invest|property|vehicle|asset|cc|loan|bnpl, opening, archived?, lastCheck?, alias?[], limit?, dueDay?, monthly?, orig?, kind?, value?, costAtValue?, valueDate?}`

**Tx** `{id, t: exp|inc|trf|adj, amt, date:'YYYY-MM-DD', ts?, note, cat, from?, to?, pending?, rev?, src?, card?, h?}`
- `pending`: no account yet, excluded from every total. `rev`: imported from a Shortcut and awaiting confirmation (counted).

**Bill** `{id, name, amt, day, freq: m|y, month?, cat, acc, lastPaid?}`. **Goal** `{id, name, target, by?:'YYYY-MM', acc?, saved?}`. **Receivable** `{id, name, amt, got, date}`.

## Calculation rules
- Balance = opening + Σ non-pending tx (expense −from, income +to, transfer −from/+to, adjustment ±). Liabilities are stored as negative asset value; display debt = −balance.
- Valued assets: `value + (costNow − costAtValue)`, so contributions after a valuation still count.
- Spending/income = `exp`/`inc` only. Transfers to liabilities = debt repayment; transfers to investments = invested.
- Net worth history (`netAsOf`) replays transactions up to each month end and applies valuations only from their `valueDate`.
- Forecast and safe-to-spend use liquid accounts only and are labelled as estimates.
