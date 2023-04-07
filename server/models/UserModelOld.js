import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
    'user',
    {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        birthdate: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);


export default User;

// (async () => {
//     await db.sync();
// })();
