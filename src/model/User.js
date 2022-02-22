import db from '../config/db';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const User = db.define("tb.user", {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name_user: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
})

// User.sync({force: true})

export default User;