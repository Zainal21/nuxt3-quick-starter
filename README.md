# Nuxt 3 Quick Starter 🚀

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Data Fetching

Data fetching is handled by Browser Fetch and [Vue Query](https://tanstack.com/query/latest/docs/vue/overview).
Data fetching is done in the following order:

1. Create/modify a model for the data to be fetched in `src/models/`
2. Create/modify an API client class in `domain/apiclient/`
3. Create/modify a usecase in `domain/usecases/`
4. Create/modify a repositories in `domain/respositories/`
5. Create/modify a services in `domain/services/`
6. Use the service api call in the component that requires the data

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
