# Todo List Monorepo

This is a monorepo project using pnpm workspaces, containing:
- Frontend (React + Vite)
- Backend (Node.js + Koa)
- Shared UI Components
- Shared Utilities

## Project Structure

```
.
├── apps/
│   ├── frontend/     # React + Vite frontend application
│   └── backend/      # Koa backend application
└── packages/
    ├── ui/          # Shared UI components
    └── utils/       # Shared utility functions
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development servers:

Frontend:
```bash
cd apps/frontend
pnpm dev
```

Backend:
```bash
cd apps/backend
pnpm dev
```

## Building

To build all packages:
```bash
pnpm -r build
```

## Shared Packages

### UI Components
The `@todo-list/ui` package contains shared React components that can be used across the frontend application.

### Utilities
The `@todo-list/utils` package contains shared utility functions that can be used across both frontend and backend applications.

## Development

- Frontend: React + Vite + TypeScript
- Backend: Koa + TypeScript
- Database: MySQL
- Package Manager: pnpm
- Monorepo Management: pnpm workspaces


