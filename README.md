# Todo List Monorepo

This is a monorepo project using pnpm workspaces, containing:
- Frontend (React + TypeScript)
- Backend (Express + TypeScript)
- Shared TypeScript types

## Project Structure

```
packages/
  ├── fe/           # Frontend React application
  ├── server/       # Backend Express server
  └── shared/       # Shared TypeScript types
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development servers:

Frontend:
```bash
cd packages/fe
pnpm dev
```

Backend:
```bash
cd packages/server
pnpm dev
```

## Building

To build all packages:
```bash
pnpm -r build
```

## Shared Types

The `shared` package contains TypeScript types that are used by both frontend and backend. To use these types in your code:

```typescript
import { Todo, CreateTodoDto } from '@todo-list/shared';
```


