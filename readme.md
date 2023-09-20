1) A modern database toolkit/ORM(Object Relational Mapping) for web developers that simplifies database interactions.
2) Provides type safety and catches data-related errors.
3) Support for various databases (Postgres, MYSQL, etc).
4) Automatically generates code based on your database schema.

3 parts of Prisma:
a) Prisma Client: Auto-generated and type-safe query builder
b) Prisma Migrate: Declarative data modeling & migration system
c) GUI to view and edit your data.

Getting Started:
npm install typescript ts-node @types/node -D
npx tsc --init
npm i prisma
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx ts-node index.ts
npx prisma studio