## Andromeda Metaverse

## Getting Started

Run the development server:

```bash
yarn dev
```

## Deployment

### With Vercel

Just create with default settings

### With PM2

- Deploy first time

```bash
yarn
yarn build
pm2 start npm --name "andromeda" -- start
```

- Deploy new version

```bash
git pull
yarn
yarn build
pm2 restart andromeda
```