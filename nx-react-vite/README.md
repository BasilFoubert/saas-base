# saas-base

## Getting Started

# How to develop the project
# run ./start-dev.sh to start dev environment

# How to deploy the project
# run ./deploy.sh to deploy the project


#testing the two app at the same time
cd nx-react-vite
nx run-many --target=test --all

#serving back & front 
nx serve api
nx serve nx-react-vite

#testing
nx test nx-react-vite   # Run tests for the React app
nx test api             # Run tests for the NestJS API

#linting
nx lint nx-react-vite   # Lint the React app
nx lint api             # Lint the NestJS API



#prisma
✔ Your Prisma schema was created at prisma/schema.prisma
You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
