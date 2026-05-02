🇬🇧 [English](#english) | 🇪🇸 [Español](#español)
- [Readme](README.md)
---

# English

# Development Journal

Chronological log of everything built, technical decisions made and problems solved.

---

## [Phase 1] Backend & Database

### Day 1 — 02/05/2026

**Done:**
- Created GitHub repository
- Installed PostgreSQL v16 locally via Homebrew on Mac
- Designed the complete database schema (6 tables)
- Created the `nido` database in PostgreSQL
- Created all 6 tables with relationships, constraints and correct types
- Initialized the Node.js backend project with `npm init`
- Installed all backend dependencies
- Created the base project structure
- Connected Express server to PostgreSQL successfully
- Built full authentication system: register, login and JWT middleware
- Tested all auth endpoints with Thunder Client

**Technical decisions:**
- Multi-user design from day one to avoid rewriting later
- UUIDs instead of numeric IDs for security
- Separate `investment_contributions` table from `investments` to calculate real return
- App named **Nido**
- README written in both English and Spanish in a single file

**Stack confirmed:**
| Part | Technology | Version |
|---|---|---|
| Backend | Node.js | v25.x |
| Backend framework | Express | v4.x |
| Database | PostgreSQL | v16.x |
| Query builder | pg (node-postgres) | v8.x |
| Authentication | JWT + bcrypt | — |

**Dependencies installed:**
- `express` — web server framework
- `pg` — PostgreSQL connector
- `bcryptjs` — password hashing
- `jsonwebtoken` — JWT creation and verification
- `dotenv` — environment variables
- `cors` — cross-origin resource sharing
- `nodemon` (dev) — auto-restart on file change

**Project structure created:**
```
nido/
└── backend/
    └── src/
        ├── controllers/
        │   └── auth.controller.js
        ├── routes/
        │   └── auth.routes.js
        ├── middleware/
        │   └── auth.middleware.js
        ├── db/
        │   └── index.js
        └── index.js
```

**Endpoints working:**
- `POST /api/auth/register` — creates a new user with hashed password, returns user + JWT
- `POST /api/auth/login` — validates credentials, returns user + JWT
- Private route middleware — blocks requests without valid JWT (401)

**Pending:**
- CRUD for transactions
- CRUD for categories
- CRUD for accounts
- Monthly summary endpoint
- CRUD for investments

---

<!-- Copy this block for each new day -->
<!--
### Day X — DD/MM/YYYY

**Done:**
-

**Technical decisions:**
-

**Problems and solutions:**
-

**Pending:**
-
-->

---
---

# Español

# Diario de desarrollo

Registro cronológico de todo lo que se va construyendo, decisiones técnicas tomadas y problemas resueltos.

---

## [Fase 1] Backend y base de datos

### Día 1 — 02/05/2026

**Hecho:**
- Creado el repositorio en GitHub
- Instalado PostgreSQL v16 en local con Homebrew en Mac
- Diseñado el esquema completo de la base de datos (6 tablas)
- Creada la base de datos `nido` en PostgreSQL
- Creadas las 6 tablas con todas sus relaciones, restricciones y tipos correctos
- Inicializado el proyecto backend Node.js con `npm init`
- Instaladas todas las dependencias del backend
- Creada la estructura base del proyecto
- Conectado el servidor Express a PostgreSQL correctamente
- Construido el sistema de autenticación completo: registro, login y middleware JWT
- Probados todos los endpoints de autenticación con Thunder Client

**Decisiones técnicas:**
- Diseño multi-usuario desde el primer día para no tener que reescribir después
- UUIDs en vez de IDs numéricos por seguridad
- Tabla `investment_contributions` separada de `investments` para calcular rentabilidad real
- La app se llama **Nido**
- README escrito en inglés y español en un único archivo

**Stack confirmado:**
| Parte | Tecnología | Versión |
|---|---|---|
| Backend | Node.js | v25.x |
| Framework backend | Express | v4.x |
| Base de datos | PostgreSQL | v16.x |
| Query builder | pg (node-postgres) | v8.x |
| Autenticación | JWT + bcrypt | — |

**Dependencias instaladas:**
- `express` — framework servidor web
- `pg` — conector a PostgreSQL
- `bcryptjs` — cifrado de contraseñas
- `jsonwebtoken` — creación y verificación de JWT
- `dotenv` — variables de entorno
- `cors` — acceso entre dominios
- `nodemon` (dev) — reinicio automático al guardar

**Estructura del proyecto creada:**
```
nido/
└── backend/
    └── src/
        ├── controllers/
        │   └── auth.controller.js
        ├── routes/
        │   └── auth.routes.js
        ├── middleware/
        │   └── auth.middleware.js
        ├── db/
        │   └── index.js
        └── index.js
```

**Endpoints funcionando:**
- `POST /api/auth/register` — crea un usuario nuevo con contraseña cifrada, devuelve usuario + JWT
- `POST /api/auth/login` — valida credenciales, devuelve usuario + JWT
- Middleware de ruta privada — bloquea peticiones sin JWT válido (401)

**Pendiente:**
- CRUD de transacciones
- CRUD de categorías
- CRUD de cuentas
- Endpoint de resumen mensual
- CRUD de inversiones

---

<!-- Copia este bloque para cada nuevo día de trabajo -->
<!--
### Día X — DD/MM/YYYY

**Hecho:**
-

**Decisiones técnicas:**
-

**Problemas y soluciones:**
-

**Pendiente:**
-
-->
