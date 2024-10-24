# NextAuth.js Server Side Rendering Example

This repository contains a Next.js application that demonstrates authentication using NextAuth.js with server-side rendering (SSR). It integrates with a Prisma client to manage user sessions efficiently.

## Features
- User authentication with NextAuth.js
- Server-side rendering support
- Custom Prisma client extension to retrieve current user
- Support for JavaScript disabled users and web crawlers

## Installation
To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SanaAzeem512/nextjs-authentication.git
   cd nextjs-authentication
2.Install dependencies:
 ```bash
npm install
```
3.Set up environment variables: 
```bash
Create a .env file in the root of the project and add your configuration.
DATABASE_URL="your_neon_tech_postgresql_url"
```
4.Run Prisma commands:
```bash
  Generate the Prisma client:
    $ npx prisma generate
   Run database migrations: If you have created a migration, run:
    $ npx prisma migrate dev --name <migration_name>
```
5.Run the development server:
```bash
npm run dev
```

6.Visit the application: Open your browser and go to http://localhost:3000.
```bash
