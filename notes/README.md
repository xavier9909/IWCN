

## Prerequesites
* MySQL
* Node.js
* Sql

## Setup MySQL database
To setup MySQL databse we need to run following commands from `database` directory ( `root` should be replaced with MySQL server username )
```
mysql -u root -p
CREATE DATABASE notes;
USE notes;
SOURCE notes.sql
```
## Build and run project
### Build
To build project following commands should be run from project directory:
```
npm install body-parser cross-env express mocha mysql2 nodemon sequelize should sqlite3 supertest

cd notes-ui

npm install react react-dom react-router-dom react-scripts web-vitals
```
In order to work properly, `config.js` file in `src/model` should be edited with correct username and password of MySQL user  
***
### Run
To run this project following commands should be run from project directory:
```
npm start
```
And in another terminal
```
cd notes-ui

npm start
```
Now API is working on `localhost:4006` and UI is working on `localhost:3000`
***

API returns json with chosen note content
