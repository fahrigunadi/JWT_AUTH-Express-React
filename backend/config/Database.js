import { Sequelize } from "sequelize";

const db = new Sequelize('nodejs_jwtauth', 'root', 'fahri',{
    host: 'localhost',
    port:'3305',
    dialect: 'mysql'
});

export default db;