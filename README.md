# PostgreSQL - Node - Typescript Playground

This project is a PostgreSQL playground that enables running TypeScript scripts using [ts-node](https://typestrong.org/ts-node/) and [node-pg](https://node-postgres.com/) against the database. It also spins up a [pgAdmin4](https://www.pgadmin.org/) client that enables managing the database. It allows loading SQL files from the `sql/**/*` directory.

## Getting Started
To get started with the PostgreSQL playground, you'll need to have Docker and Node.js installed on your machine.

1. Start the PostgreSQL database and pgAdmin4 client using docker-compose:

```
docker-compose up
```
The PostgreSQL database will be is exposed locally on port `:5432`, and pgAdmin4 will be available on port `:16543`. 

2. Install the required node dependencies:

```
npm install
```


## Seeding database
The [database-seed.sql](database-seed.sql) file will be automatically loaded when you start the database using docker-compose. This file can be used to seed the database with sample data.


## Managing database

You can use pgAdmin4  to manage the database, create tables, and run SQL queries. The tool will be available http://localhost:16543
You can log in to pgAdmin4 using the following credentials:

```
Email: placeholder@example.com
Password: password
```

These credentials are set in the docker-compose.yml file.


## Loading SQL Files
To load a SQL file you can place the file in the `sql/**/*` directory. The file will be automatically loaded to script memory when you start the script.

## Running TypeScript Scripts
To run a TypeScript script against the PostgreSQL database, you can use the following command:

```
npm run start -- script.ts
```

This will compile the script.ts file using ts-node, and run it against the PostgreSQL database.

## Example script
See [script.ts](script.ts)

## Conclusion
That's it! You're now ready to start using the PostgreSQL playground to develop your applications with PostgreSQL. If you have any questions or issues, please feel free to open an issue on GitHub.

## License
MIT