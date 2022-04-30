# CCP4-KPOP-DB.API


## About

This project was created during my time as a student at Code Chrysalis. KPOP-DB.API uses a PostgreSQL database that's connected to the Knex.js library. This database will give you access to data for various KPOP groups/artists. With KPOP becoming such a world wide phenomenon, I wanted to create an application that is useful to a wide audience. 

## Set up

#### Postgres

You will need Postgres installed. Download and install the [PostgresApp](https://postgresapp.com/) and verify its working by running the command `psql` in your terminal.

#### Installing Dependencies and Startup

After forking and cloning the repository, please do the following: 

To install dependencies:

```
    npm install
```

- Add a .env file to the root directory and paste the following:

```
PORT=3000
DB_NAME=anime_db
DB_USER="your_database_user"
DB_PASSWORD="your_database_password"
```

- Create a PostgreSQL database called "kpop_db" locally.

To run the server:

```
    npm run start
```

Once the server is running you can open `localhost:3000` in your browser. 

#### Migrations

Run the following command in the terminal to create tables in the PostgreSQL database:

```
npm run migrate
```

#### Seed 

To fill the tables in the PostgreSQL database with initial data, run the following command in the terminal:

```
npx run seed
```

## API

| Requests | End Points   | Output                     |
| -------- | ------------ | :------------------------- |
| GET      | /groups      | all groups                 |
| POST     | /groups      | add group                  |
| PUT      | /:id         | update group by id         |
| DELETE   | /:group_name | remove group by group name |

