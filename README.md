🇬🇧 [English](#english) | 🇪🇸 [Español](#español)

---

# English

# Nido — Personal Finance App

A full-stack personal finance app to track expenses, income, budgets and passive investments. Available on web and natively on iPhone.

---

## Tech Stack

| Part | Technology | Version |
|---|---|---|
| Backend | Node.js | v25.9.0 |
| Backend framework | Express | -- |
| Database | PostgreSQL | v16.13 |
| Query builder | pg (node-postgres) | -- |
| Authentication | JWT + bcrypt | — |
| Web frontend | React + Vite | React -- |
| Styles | Tailwind CSS | -- |
| Web charts | Recharts | -- |
| iOS app | SwiftUI + Charts | iOS 17+ |
| Backend deploy | Railway or Render | — |
| Database deploy | Supabase (PostgreSQL) | — |
| Web deploy | Vercel | — |

---

## Database Schema

6 main tables. All user-related tables include `user_id` to support multiple users from day one.

### `users`
Registered users.
- `id` UUID PK
- `email` unique string
- `password_hash` string (passwords are never stored in plain text)
- `name` string
- `created_at` timestamp

### `categories`
Expense or income categories (Food, Transport, Salary...). Each user manages their own.
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string
- `color` string (hex, for the UI)
- `icon` string (icon name)
- `type` string → `'expense'` | `'income'`

### `accounts`
User accounts (Cash, Card, Bank account...).
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string
- `type` string → `'cash'` | `'card'` | `'bank'`
- `balance` decimal

### `transactions`
Every expense or income entry. The central table of the app.
- `id` UUID PK
- `user_id` UUID FK → users
- `category_id` UUID FK → categories
- `account_id` UUID FK → accounts
- `amount` decimal
- `type` string → `'expense'` | `'income'`
- `date` date
- `note` string (optional)
- `created_at` timestamp

### `investments`
Each passive investment position (index fund, ETF, savings account...).
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string (e.g. "MSCI World — MyInvestor")
- `type` string → `'index_fund'` | `'etf'` | `'savings_account'` | `'pension'` | `'bonds'`
- `platform` string (e.g. "MyInvestor", "Indexa Capital")
- `current_value` decimal (manually updated)
- `currency` string (e.g. `'EUR'`)
- `notes` string (optional)
- `created_at` timestamp

### `investment_contributions`
Every deposit or withdrawal for an investment. Used to calculate real return.
- `id` UUID PK
- `investment_id` UUID FK → investments
- `user_id` UUID FK → users
- `amount` decimal
- `type` string → `'deposit'` | `'withdrawal'`
- `date` date
- `note` string (optional)

---

## Features

### Phase 1 — Core
- [ ] Register and login (JWT)
- [ ] Add expenses and income
- [ ] Monthly dashboard: total spent, earned, balance
- [ ] Donut chart by category
- [ ] Transaction history with filters

### Phase 2 — Improvements
- [ ] Monthly budgets per category with visual alerts
- [ ] Recurring expenses (Netflix, rent...)
- [ ] Export to CSV
- [ ] Multiple accounts
- [ ] Passive investments section with real return tracking

### Phase 3 — iOS app
- [ ] JWT login stored in Keychain
- [ ] Dashboard and transactions
- [ ] Charts with Apple Charts framework
- [ ] Home screen widget
- [ ] Push notifications when budget is exceeded

### Phase 4 — Deployment
- [ ] Backend on Railway / Render
- [ ] Database on Supabase
- [ ] Frontend on Vercel
- [ ] iOS app pointing to production API

---

## Project Status

| Phase | Status |
|---|---|
| Phase 1 — Backend & database | 🟡 In progress |
| Phase 2 — Web frontend | ⬜ Not started |
| Phase 3 — iOS app | ⬜ Not started |
| Phase 4 — Deployment | ⬜ Not started |

---

## Local Setup

### Requirements
- Node.js v22+
- PostgreSQL v16+

### Installation
```bash
# Coming soon
```

---
---

# Español

# Nido — App de Finanzas Personales

Aplicación de gestión de finanzas personales: gastos, ingresos, presupuestos e inversión pasiva. Disponible en web y como app nativa para iPhone.

---

## Stack tecnológico

| Parte | Tecnología | Versión |
|---|---|---|
| Backend | Node.js | v22.x |
| Framework backend | Express | v4.x |
| Base de datos | PostgreSQL | v16.x |
| Query builder | pg (node-postgres) | v8.x |
| Autenticación | JWT + bcrypt | — |
| Web frontend | React + Vite | React v19.x |
| Estilos | Tailwind CSS | v4.x |
| Gráficas web | Recharts | v2.x |
| App iOS | SwiftUI + Charts | iOS 17+ |
| Despliegue backend | Railway o Render | — |
| Despliegue base de datos | Supabase (PostgreSQL) | — |
| Despliegue web | Vercel | — |

---

## Esquema de base de datos

6 tablas principales. Todas las tablas de usuario incluyen `user_id` para soportar múltiples usuarios desde el primer día.

### `users`
Usuarios registrados en la app.
- `id` UUID PK
- `email` string único
- `password_hash` string (nunca se guarda la contraseña en texto plano)
- `name` string
- `created_at` timestamp

### `categories`
Categorías de gasto o ingreso (Comida, Transporte, Salario...). Cada usuario gestiona las suyas.
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string
- `color` string (hex, para la UI)
- `icon` string (nombre del icono)
- `type` string → `'expense'` | `'income'`

### `accounts`
Cuentas del usuario (Efectivo, Tarjeta, Cuenta bancaria...).
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string
- `type` string → `'cash'` | `'card'` | `'bank'`
- `balance` decimal

### `transactions`
Cada gasto o ingreso registrado. Es la tabla central de la app.
- `id` UUID PK
- `user_id` UUID FK → users
- `category_id` UUID FK → categories
- `account_id` UUID FK → accounts
- `amount` decimal
- `type` string → `'expense'` | `'income'`
- `date` date
- `note` string (opcional)
- `created_at` timestamp

### `investments`
Cada posición de inversión pasiva (fondo indexado, ETF, depósito...).
- `id` UUID PK
- `user_id` UUID FK → users
- `name` string (ej: "MSCI World — MyInvestor")
- `type` string → `'index_fund'` | `'etf'` | `'savings_account'` | `'pension'` | `'bonds'`
- `platform` string (ej: "MyInvestor", "Indexa Capital")
- `current_value` decimal (actualizado manualmente)
- `currency` string (ej: `'EUR'`)
- `notes` string (opcional)
- `created_at` timestamp

### `investment_contributions`
Cada aportación o retirada en una inversión. Permite calcular la rentabilidad real.
- `id` UUID PK
- `investment_id` UUID FK → investments
- `user_id` UUID FK → users
- `amount` decimal
- `type` string → `'deposit'` | `'withdrawal'`
- `date` date
- `note` string (opcional)

---

## Funcionalidades

### Fase 1 — Core
- [ ] Registro e inicio de sesión (JWT)
- [ ] Añadir gastos e ingresos
- [ ] Dashboard mensual: total gastado, ingresado, balance
- [ ] Gráfica de dona por categorías
- [ ] Historial con filtros por fecha y categoría

### Fase 2 — Mejoras
- [ ] Presupuestos mensuales por categoría con alerta visual
- [ ] Gastos recurrentes (Netflix, alquiler...)
- [ ] Exportar a CSV
- [ ] Múltiples cuentas
- [ ] Sección de inversiones pasivas con rentabilidad real

### Fase 3 — App iOS
- [ ] Login con JWT guardado en Keychain
- [ ] Dashboard y transacciones
- [ ] Gráficas con el framework Charts de Apple
- [ ] Widget para pantalla de inicio
- [ ] Notificaciones push al superar presupuesto

### Fase 4 — Despliegue
- [ ] Backend en Railway / Render
- [ ] Base de datos en Supabase
- [ ] Frontend en Vercel
- [ ] App iOS apuntando a API en producción

---

## Estado del proyecto

| Fase | Estado |
|---|---|
| Fase 1 — Backend y base de datos | 🟡 En progreso |
| Fase 2 — Web frontend | ⬜ No iniciada |
| Fase 3 — App iOS | ⬜ No iniciada |
| Fase 4 — Despliegue | ⬜ No iniciada |

---

## Setup local

### Requisitos
- Node.js v22+
- PostgreSQL v16+

### Instalación
```bash
# Próximamente
```
