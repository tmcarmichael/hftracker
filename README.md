## DEV HF Tracker

_This is an **experimental project** for learning and experimenting with React, Tailwind 4.0, GraphQL w/ Apollo, RSpack, and Redux, with room for future expansions such as AI-driven insights, habit recommendations, mobile PWA support, and third-party health integrations (Apple Health, Google Fit, wearable devices)._

A lightweight progressive web application for tracking sleep, nutrition, exercise, and stress through daily logs, with visualized trends and AI-generated insights.

### Tech Stack

- Frontend: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Redux](https://redux.js.org/), [Apollo Client](https://www.apollographql.com/docs/react), [Tailwind 4.0](https://tailwindcss.com/blog/tailwindcss-v4)
- Backend: [GraphQL](https://graphql.org/) w/ [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- State Management: [Redux Toolkit](https://redux-toolkit.js.org/), [GraphQL caching](https://graphql.org/learn/caching/)
- Data Visualization: [Recharts](https://recharts.org/en-US/)
- Tooling & API Testing: [RSpack](https://rspack.dev/), [pnpm](https://pnpm.io/), [Insomnia](https://insomnia.rest/)

### Features

- Daily Logging: Track key health levels in structured logs
- Evening Journal: Add reflections and tags for correlation
- GraphQL API: Fetch, store, and analyze logs with structured queries, mutations, and subscriptions
- Data Visualization: Interactive charts for trends over time using Recharts
- Redux State Management: Optimistic UI updates and local caching
- Dark Mode
- PWA/Mobile-Friendly UI

### Setup & Installation

Install `pnpm` if not already installed.

```bash
npm install -g pnpm
```

Clone, install, run local

```bash
git clone https://github.com/tmcarmichael/hftracker
cd hftracker
pnpm install
pnpm dev
```
